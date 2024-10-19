import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    teamVjudgeUsername: '',
    leaderName: '',
    leaderId: '',
    leaderEmail: '',
    leaderWhatsapp: '',
    mem1Name: '',
    mem1Id: '',
    mem1Email: '',
    mem1Whatsapp: '',
    mem2Name: '',
    mem2Id: '',
    mem2Email: '',
    mem2Whatsapp: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fieldLabels = {
    teamName: 'Team Name (e.g. Team Caltech)',
    teamVjudgeUsername: "Team's Vjudge Username (e.g. caltech_team)",
    leaderName: 'Leader Name (e.g. Sheldon Cooper)',
    leaderId: 'Leader ID (e.g. 22K-1234)',
    leaderEmail: 'Leader Email (e.g. k221234@nu.edu.pk)',
    leaderWhatsapp: 'Leader WhatsApp Number (e.g. 0312-345-6789)',
    mem1Name: 'Member 1 Name (e.g. Leonard Hofstadter)',
    mem1Id: 'Member 1 ID (e.g. 21B-5678)',
    mem1Email: 'Member 1 Email (e.g. k224567@nu.edu.pk)',
    mem1Whatsapp: 'Member 1 WhatsApp Number (e.g. 0398-765-4321)',
    mem2Name: 'Member 2 Name (optional)',
    mem2Id: 'Member 2 ID (optional)',
    mem2Email: 'Member 2 Email (optional)',
    mem2Whatsapp: 'Member 2 WhatsApp Number (optional)',
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'teamName':
      case 'teamVjudgeUsername':
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
      case 'leaderWhatsapp':
      case 'mem1Whatsapp':
      case 'mem2Whatsapp':
        if (!value && name !== 'mem2Whatsapp') return `${fieldLabels[name]} is required.`;
        if (value && !/^\d{4}-\d{3}-\d{4}$/.test(value)) return 'Invalid WhatsApp number format. Use: 03XX-XXX-XXXX.';
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

    setFormData(prevData => ({ ...prevData, [name]: newValue }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: validateField(name, newValue) }));
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
      (formData.mem2Name && (!formData.mem2Id || !formData.mem2Email || !formData.mem2Whatsapp)) ||
      (formData.mem2Id && (!formData.mem2Name || !formData.mem2Email || !formData.mem2Whatsapp)) ||
      (formData.mem2Email && (!formData.mem2Name || !formData.mem2Id || !formData.mem2Whatsapp)) ||
      (formData.mem2Whatsapp && (!formData.mem2Name || !formData.mem2Id || !formData.mem2Email));

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
          mem2Whatsapp: '',
        }));
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (validateForm()) {
      try {
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Form values:', formData);
        setSuccessMessage('Registration successful! Thank you for registering.');
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors(prevErrors => ({
          ...prevErrors,
          _errors: [...(prevErrors._errors || []), 'An error occurred while submitting the form.']
        }));
      }
    }
    setIsSubmitting(false);
  };

  const renderField = (name, label, type = 'text', required = true, colspan = false) => (
    <div key={name} className={colspan ? "col-span-1 sm:col-span-2" : ""}>
      <label htmlFor={name} className="block mb-2">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        required={required}
        className="w-full p-2 border rounded bg-[#2a2b55] border-[#3d3e6b] text-white"
      />
      {errors[name] && <div className="text-red-400 text-sm">{errors[name]}</div>}
    </div>
  );

  return (
    <>
      <h1 className="text-white text-center text-3xl md:text-7xl font-bold py-2 px-2 mb-12 mt-24">REGISTER HERE</h1>
      <div className="min-h-screen py-10 px-4 text-gray-300">
        <div className="font-['Roboto_Mono'] w-full max-w-4xl mx-auto">
          <div className="bg-[#23244e] rounded-2xl shadow-md p-4 sm:p-6">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {renderField('teamName', fieldLabels.teamName, 'text', true, true)}
              {renderField('teamVjudgeUsername', fieldLabels.teamVjudgeUsername, 'text', true, true)}
              {renderField('leaderName', fieldLabels.leaderName)}
              {renderField('leaderId', fieldLabels.leaderId)}
              {renderField('leaderEmail', fieldLabels.leaderEmail, 'email')}
              {renderField('leaderWhatsapp', fieldLabels.leaderWhatsapp)}
              {renderField('mem1Name', fieldLabels.mem1Name)}
              {renderField('mem1Id', fieldLabels.mem1Id)}
              {renderField('mem1Email', fieldLabels.mem1Email, 'email')}
              {renderField('mem1Whatsapp', fieldLabels.mem1Whatsapp)}
              {renderField('mem2Name', fieldLabels.mem2Name, 'text', false)}
              {renderField('mem2Id', fieldLabels.mem2Id, 'text', false)}
              {renderField('mem2Email', fieldLabels.mem2Email, 'email', false)}
              {renderField('mem2Whatsapp', fieldLabels.mem2Whatsapp, 'text', false)}
              
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