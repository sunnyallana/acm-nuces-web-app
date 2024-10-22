import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const apiUrl = import.meta.env.VITE_API_URL;

const requestApi = axios.create({
  baseURL: apiUrl,
});

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    vjudgeUsername: '',
    leaderName: '',
    leaderId: '',
    leaderEmail: '',
    leaderWhatsappNumber: '',
    mem1Name: '',
    mem1Id: '',
    mem1Email: '',
    mem1WhatsappNumber: '',
    mem2Name: '',
    mem2Id: '',
    mem2Email: '',
    mem2WhatsappNumber: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedInput, setFocusedInput] = useState('');

  const fieldLabels = {
    teamName: 'Team Name',
    vjudgeUsername: "Vjudge Username",
    leaderName: 'Leader Name',
    leaderId: 'Leader ID',
    leaderEmail: 'Leader NU Email',
    leaderWhatsappNumber: 'Leader WhatsApp Number',
    mem1Name: 'Member 1 Name',
    mem1Id: 'Member 1 ID',
    mem1Email: 'Member 1 NU Email',
    mem1WhatsappNumber: 'Member 1 WhatsApp Number',
    mem2Name: 'Member 2 Name (optional)',
    mem2Id: 'Member 2 ID (optional)',
    mem2Email: 'Member 2 NU Email (optional)',
    mem2WhatsappNumber: 'Member 2 WhatsApp Number (optional)',
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'teamName':
      case 'vjudgeUsername':
      case 'leaderName':
      case 'mem1Name':
        return value ? '' : `${fieldLabels[name]} is required.`;
      case 'leaderId':
      case 'mem1Id':
      case 'mem2Id':
        if (!value && name !== 'mem2Id') return `${fieldLabels[name]} is required.`;
        if (value && !/^\d{2}[A-Z]-\d{4}$/.test(value)) return 'Invalid ID format.';
        const batch = parseInt(value.slice(0, 2), 10);
        if (batch < 20 || batch > 24) return 'ID must be between 20K and 24K.';
        return '';
      case 'leaderEmail':
      case 'mem1Email':
      case 'mem2Email':
        if (!value && name !== 'mem2Email') return `${fieldLabels[name]} is required.`;
        if (value && !/^[a-zA-Z]\d{6}@nu\.edu\.pk$/.test(value)) return 'Invalid email format.';
        return '';
      case 'leaderWhatsappNumber':
      case 'mem1WhatsappNumber':
      case 'mem2WhatsappNumber':
        if (!value && name !== 'mem2WhatsappNumber') return `${fieldLabels[name]} is required.`;
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
  
    // Capitalize the letter after the first two digits for ID fields
    if (['leaderId', 'mem1Id', 'mem2Id'].includes(name) && value.length >= 3) {
      newValue = value.slice(0, 2) + value.charAt(2).toUpperCase() + value.slice(3);
    }
  
    // Limit ID length to 8 characters
    if (['leaderId', 'mem1Id', 'mem2Id'].includes(name) && value.length > 8) {
      newValue = value.slice(0, 8);
    }
  
    setFormData(prevData => ({ ...prevData, [name]: newValue }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: validateField(name, newValue) }));
  
    // Auto-fill email domain if prefix is 7 characters
    if (name.endsWith('Email') && value.length >= 7) {
      const prefix = value.slice(0, 7); // Get the first 7 characters
      setFormData(prevData => ({ ...prevData, [name]: `${prefix}@nu.edu.pk` }));
    }
  };
  

  const handlePhoneChange = (name, value) => {
    setFormData(prevData => ({ ...prevData, [name]: value }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: validateField(name, value) }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    // Additional validations for unique IDs and emails
    const ids = [formData.leaderId, formData.mem1Id, formData.mem2Id].filter(Boolean);
    if (new Set(ids).size !== ids.length) {
      newErrors._errors = [...(newErrors._errors || []), 'All IDs must be unique.'];
    }

    const emails = [formData.leaderEmail, formData.mem1Email, formData.mem2Email].filter(Boolean);
    const lowerCaseEmails = emails.map(email => email.toLowerCase());
    if (new Set(lowerCaseEmails).size !== lowerCaseEmails.length) {
      newErrors._errors = [...(newErrors._errors || []), 'All emails must be unique.'];
    }

    // Batch validation
    const getBatch = (id) => id ? parseInt(id.slice(0, 2), 10) : null;
    const leaderBatch = getBatch(formData.leaderId);
    const mem1Batch = getBatch(formData.mem1Id);
    const mem2Batch = getBatch(formData.mem2Id);
    const allBatches = [leaderBatch, mem1Batch, mem2Batch].filter(batch => batch !== null);

    if (!allBatches.every(batch => batch >= 20 && batch <= 24)) {
      newErrors._errors = [...(newErrors._errors || []), 'All members must belong to batches 20-24.'];
    } else if (leaderBatch === 20 || leaderBatch === 21) {
      if (!allBatches.every(batch => batch === 20 || batch === 21)) {
        newErrors._errors = [...(newErrors._errors || []), 'All members must be from batch 20K or 21K.'];
      }
    } else if (!allBatches.every(batch => batch === leaderBatch)) {
      newErrors._errors = [...(newErrors._errors || []), 'All members must be from the same batch for batches 22K-24K.'];
    }

    // Check if Member 2 details are partially filled
    const isMem2PartiallyFilled = 
      (formData.mem2Name && (!formData.mem2Id || !formData.mem2Email || !formData.mem2WhatsappNumber)) ||
      (formData.mem2Id && (!formData.mem2Name || !formData.mem2Email || !formData.mem2WhatsappNumber)) ||
      (formData.mem2Email && (!formData.mem2Name || !formData.mem2Id || !formData.mem2WhatsappNumber)) ||
      (formData.mem2WhatsappNumber && (!formData.mem2Name || !formData.mem2Id || !formData.mem2Email));

    if (isMem2PartiallyFilled) {
      const confirmDiscard = window.confirm("Member 2 details are incomplete. Do you want to discard these partial details?");
      if (!confirmDiscard) {
        newErrors._errors = [...(newErrors._errors || []), 'Please fill in all details for Member 2 or discard them.'];
      } else {
        // Clear Member 2 fields if the user decides to discard
        setFormData(prevData => ({
          ...prevData,
          mem2Name: '',
          mem2Id: '',
          mem2Email: '',
          mem2WhatsappNumber: '',
        }));
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Submitting form:', formData);
    if (validateForm()) {
      try {
        const submissionData = { ...formData };
        // Omit Member 2 details if they're empty
        if (!formData.mem2Name) {
          delete submissionData.mem2Name;
          delete submissionData.mem2Id;
          delete submissionData.mem2Email;
          delete submissionData.mem2WhatsappNumber;
        }

        const response = await requestApi.post(`/register`, submissionData);
        console.log('Response:', response.data);
        
        // Show success toast
        toast.success(response.data.message || 'Registration successful! 🎉', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });

        // Reset form after successful submission
        setFormData({
          teamName: '',
          vjudgeUsername: '',
          leaderName: '',
          leaderId: '',
          leaderEmail: '',
          leaderWhatsappNumber: '',
          mem1Name: '',
          mem1Id: '',
          mem1Email: '',
          mem1WhatsappNumber: '',
          mem2Name: '',
          mem2Id: '',
          mem2Email: '',
          mem2WhatsappNumber: '',
        });
        setErrors({});
      } catch (error) {
        console.error('Error submitting form:', error);
        
        // Handle different error types based on status codes
        if (error.response) {
          switch (error.response.status) {
            case 400:
              // Handle validation errors
              if (error.response.data.errors) {
                error.response.data.errors.forEach(err => {
                  toast.error(err, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                  });
                });
              } else {
                toast.error(error.response.data.message || 'Invalid input data 😕', {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                  transition: Bounce,
                });
              }
              break;
            case 409:
              // Handle conflict errors
              toast.error(error.response.data.message || 'Team already exists! 🧐', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
              });
              break;
            default:
              // Handle other errors
              toast.error(error.response.data.message || 'An error occurred while submitting the form 😕', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
              });
          }
        } else {
          toast.error('Network error occurred. Please try again later 😕', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        }
      }
    } else {
      // Show validation errors in toast
      if (errors._errors) {
        errors._errors.forEach(error => {
          toast.error(error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        });
      }
    }
    setIsSubmitting(false);
  };

  const renderField = (name, label, placeholder, type = 'text', required = true, colspan = false) => (
    <div key={name} className={colspan ? "col-span-1 sm:col-span-2" : ""}>
      <label htmlFor={name} className="block mb-2">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        required={required}
        placeholder={placeholder}
        className="w-full p-2 border rounded bg-[#2a2b55] border-[#3d3e6b] text-white"
      />
      {errors[name] && <div className="text-red-400 text-sm">{errors[name]}</div>}
    </div>
  );

  const renderPhoneField = (name, label, placeholder, required = true) => (
    <div key={name} className="col-span-1 sm:col-span-2">
      <label htmlFor={name} className="block mb-2">{label}</label>
      <PhoneInput
        country={'pk'}
        value={formData[name]}
        onChange={phone => handlePhoneChange(name, phone)}
        required={required}
        onFocus={() => setFocusedInput(name)}
        onBlur={() => setFocusedInput('')}
        inputStyle={{
          width: '100%',
          padding: '10px 10px 10px 45px',
          border: `1.25px solid ${focusedInput === name ? 'white' : '#3d3e6b'}`,
          borderRadius: '4px',
          background: '#2a2b55',
          color: 'white',
          height: '42px',
          transition: 'border 0.3s',
        }}
        buttonStyle={{
          background: '#bdc2d2',
          border: 'none',
          borderRadius: '4px 0px 0px 4px',
          height: '42px',
        }}
        placeholder={placeholder}
      />
      {errors[name] && <div className="text-red-400 text-sm">{errors[name]}</div>}
    </div>
  );

  return (
    <>
    <ToastContainer />
      <h1 className="text-white text-center text-[34px] 2xl:text-[80px] xl:text-[66px] lg:text-[55px] md:text-[40px] sm:text-[30px] font-bold py-2 px-2 mb-12 mt-24">
        <span className="bg-gradient-to-b from-gray-200 to-gray-300 text-transparent bg-clip-text">
          REGISTER HERE
        </span>
      </h1>
      <div className="min-h-screen py-10 px-4 text-gray-300">
        <div className="font-['Roboto_Mono'] w-full max-w-4xl mx-auto">
          <div className="bg-[#23244e] rounded-2xl shadow-md p-4 sm:p-6">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {renderField('teamName', fieldLabels.teamName, 'e.g. Team Caltech', 'text', true, true)}
              {renderField('vjudgeUsername', fieldLabels.vjudgeUsername, 'e.g. caltech_team', 'text', true, true)}
              {renderField('leaderName', fieldLabels.leaderName, 'e.g. Sheldon Cooper')}
              {renderField('leaderId', fieldLabels.leaderId, 'e.g. 22K-1234')}
              {renderField('leaderEmail', fieldLabels.leaderEmail, 'e.g. k221234@nu.edu.pk', 'email')}
              {renderPhoneField('leaderWhatsappNumber', fieldLabels.leaderWhatsappNumber, 'e.g. +92 312 0000000')}
              {renderField('mem1Name', fieldLabels.mem1Name, 'e.g. Leonard Hofstadter')}
              {renderField('mem1Id', fieldLabels.mem1Id, 'e.g. 22P-5678')}
              {renderField('mem1Email', fieldLabels.mem1Email, 'e.g. p224567@nu.edu.pk', 'email')}
              {renderPhoneField('mem1WhatsappNumber', fieldLabels.mem1WhatsappNumber, 'e.g. +92 313 0000000')}
              {renderField('mem2Name', fieldLabels.mem2Name, 'e.g. Howard Wolowitz', 'text', false)}
              {renderField('mem2Id', fieldLabels.mem2Id, 'e.g. 22L-1234', 'text', false)}
              {renderField('mem2Email', fieldLabels.mem2Email, 'e.g. l221234@nu.edu.pk', 'email', false)}
              {renderPhoneField('mem2WhatsappNumber', fieldLabels.mem2WhatsappNumber, 'e.g. +92 314 0000000', false)}

              <div className="col-span-1 sm:col-span-2">
                <button   
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#0f5ea3] hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
              
              {errors._errors && errors._errors.map((error, index) => (
                <div key={index} className="text-red-400 col-span-1 sm:col-span-2">{error}</div>
              ))}
            </form>
          </div>
          {successMessage && <div className="mt-4 text-green-500">{successMessage}</div>}
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;