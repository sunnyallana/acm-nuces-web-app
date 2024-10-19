import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  teamName: Yup.string().required('Team Name is required'),
  teamVjudgeUsername: Yup.string().required('Team\'s Vjudge Username is required'),
  leaderName: Yup.string().required('Leader Name is required'),
  leaderId: Yup.string()
    .matches(/^\d{2}[a-zA-Z]-\d{4}$/, 'Invalid ID format')
    .required('Leader ID is required'),
  leaderEmail: Yup.string()
    .matches(/^[a-z][0-9]{6}@nu\.edu\.pk$/, 'Email must start with a lowercase letter followed by 6 digits and be a valid nu.edu.pk domain')
    .required('Leader Email is required'),
  leaderWhatsapp: Yup.string().required('Leader WhatsApp number is required'),
  mem1Name: Yup.string().required('Member 1 Name is required'),
  mem1Id: Yup.string()
    .matches(/^\d{2}[a-zA-Z]-\d{4}$/, 'Invalid ID format')
    .required('Member 1 ID is required'),
  mem1Email: Yup.string()
    .matches(/^[a-z][0-9]{6}@nu\.edu\.pk$/, 'Email must start with a lowercase letter followed by 6 digits and be a valid nu.edu.pk domain')
    .required('Member 1 Email is required'),
  mem1Whatsapp: Yup.string().required('Member 1 WhatsApp number is required'),
  mem2Name: Yup.string().required('Member 2 Name is required'),
  mem2Id: Yup.string()
    .matches(/^\d{2}[a-zA-Z]-\d{4}$/, 'Invalid ID format')
    .required('Member 2 ID is required'),
  mem2Email: Yup.string()
    .matches(/^[a-z][0-9]{6}@nu\.edu\.pk$/, 'Email must start with a lowercase letter followed by 6 digits and be a valid nu.edu.pk domain')
    .required('Member 2 Email is required'),
  mem2Whatsapp: Yup.string().required('Member 2 WhatsApp number is required'),
}).test('unique-ids', 'IDs must be unique', function (value) {
  const ids = [value.leaderId, value.mem1Id, value.mem2Id];
  return new Set(ids).size === ids.length;
}).test('unique-emails', 'Emails must be unique', function (value) {
  const emails = [value.leaderEmail, value.mem1Email, value.mem2Email];
  return new Set(emails).size === emails.length;
});

const RegistrationForm = () => {
  const initialValues = {
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
  };

  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log('Form values:', values);

    /*
    try {
      const response = await axios.post('API_ENDPOINT', values);
      console.log('Response:', response.data);
      setSuccessMessage('Registration successful! Thank you for registering.');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    */

    setSuccessMessage('Registration successful! Thank you for registering.');
    setSubmitting(false);
  };

  return (
    <>
      <h1 className="text-white text-center text-3xl md:text-7xl font-bold py-2 px-2 mb-12 mt-24">REGISTER HERE</h1>
      <div className="min-h-screen py-10 px-4 text-gray-300">
        <div className="font-['Roboto_Mono'] w-full max-w-4xl mx-auto">
        <div className="bg-[#23244e] rounded-2xl shadow-md p-4 sm:p-6">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="col-span-1 sm:col-span-2">
                    <label htmlFor="teamName" className="block mb-2">Team Name</label>
                    <Field type="text" name="teamName" className="w-full p-2 border rounded bg-[#2a2b55] border-[#3d3e6b] text-white" />
                    <ErrorMessage name="teamName" component="div" className="text-red-400 text-sm" />
                  </div>

                  <div className="col-span-1 sm:col-span-2">
                    <label htmlFor="teamVjudgeUsername" className="block mb-2">Team's Vjudge Username</label>
                    <Field type="text" name="teamVjudgeUsername" className="w-full p-2 border rounded bg-[#2a2b55] border-[#3d3e6b] text-white" />
                    <ErrorMessage name="teamVjudgeUsername" component="div" className="text-red-400 text-sm" />
                  </div>

                  <div>
                    <label htmlFor="leaderName" className="block mb-2">Leader Name (e.g. John Doe)</label>
                    <Field type="text" name="leaderName" className="w-full p-2 border rounded bg-[#2a2b55] border-[#3d3e6b] text-white" />
                    <ErrorMessage name="leaderName" component="div" className="text-red-400 text-sm" />
                  </div>

                  <div>
                    <label htmlFor="leaderId" className="block mb-2">Leader ID (e.g. 22K-1234)</label>
                    <Field type="text" name="leaderId" className="w-full p-2 border rounded bg-[#2a2b55] border-[#3d3e6b] text-white" />
                    <ErrorMessage name="leaderId" component="div" className="text-red-400 text-sm" />
                  </div>

                  <div>
                    <label htmlFor="leaderEmail" className="block mb-2">Leader Email (e.g. k221234@nu.edu.pk)</label>
                    <Field type="email" name="leaderEmail" className="w-full p-2 border rounded bg-[#2a2b55] border-[#3d3e6b] text-white" />
                    <ErrorMessage name="leaderEmail" component="div" className="text-red-400 text-sm" />
                  </div>

                  <div>
                    <label htmlFor="leaderWhatsapp" className="block mb-2">Leader WhatsApp Number (e.g. +92-300-1234567)</label>
                    <Field type="text" name="leaderWhatsapp" className="w-full p-2 border rounded bg-[#2a2b55] border-[#3d3e6b] text-white" />
                    <ErrorMessage name="leaderWhatsapp" component="div" className="text-red-400 text-sm" />
                  </div>

                  <div>
                    <label htmlFor="mem1Name" className="block mb-2">Member 1 Name (e.g. Jane Doe)</label>
                    <Field type="text" name="mem1Name" className="w-full p-2 border rounded bg-[#2a2b55] border-[#3d3e6b] text-white" />
                    <ErrorMessage name="mem1Name" component="div" className="text-red-400 text-sm" />
                  </div>

                  <div>
                    <label htmlFor="mem1Id" className="block mb-2">Member 1 ID (e.g. 22K-5678)</label>
                    <Field type="text" name="mem1Id" className="w-full p-2 border rounded bg-[#2a2b55] border-[#3d3e6b] text-white" />
                    <ErrorMessage name="mem1Id" component="div" className="text-red-400 text-sm" />
                  </div>

                  <div>
                    <label htmlFor="mem1Email" className="block mb-2">Member 1 Email (e.g. k221234@nu.edu.pk)</label>
                    <Field type="email" name="mem1Email" className="w-full p-2 border rounded bg-[#2a2b55] border-[#3d3e6b] text-white" />
                    <ErrorMessage name="mem1Email" component="div" className="text-red-400 text-sm" />
                  </div>

                  <div>
                    <label htmlFor="mem1Whatsapp" className="block mb-2">Member 1 WhatsApp Number (e.g. +92-300-7654321)</label>
                    <Field type="text" name="mem1Whatsapp" className="w-full p-2 border rounded bg-[#2a2b55] border-[#3d3e6b] text-white" />
                    <ErrorMessage name="mem1Whatsapp" component="div" className="text-red-400 text-sm" />
                  </div>

                  <div>
                    <label htmlFor="mem2Name" className="block mb-2">Member 2 Name (e.g. John Smith)</label>
                    <Field type="text" name="mem2Name" className="w-full p-2 border rounded bg-[#2a2b55] border-[#3d3e6b] text-white" />
                    <ErrorMessage name="mem2Name" component="div" className="text-red-400 text-sm" />
                  </div>

                  <div>
                    <label htmlFor="mem2Id" className="block mb-2">Member 2 ID (e.g. 22K-9876)</label>
                    <Field type="text" name="mem2Id" className="w-full p-2 border rounded bg-[#2a2b55] border-[#3d3e6b] text-white" />
                    <ErrorMessage name="mem2Id" component="div" className="text-red-400 text-sm" />
                  </div>

                  <div>
                    <label htmlFor="mem2Email" className="block mb-2">Member 2 Email (e.g. k221234@nu.edu.pk)</label>
                    <Field type="email" name="mem2Email" className="w-full p-2 border rounded bg-[#2a2b55] border-[#3d3e6b] text-white" />
                    <ErrorMessage name="mem2Email" component="div" className="text-red-400 text-sm" />
                  </div>

                  <div>
                    <label htmlFor="mem2Whatsapp" className="block mb-2">Member 2 WhatsApp Number (e.g. +92-300-6543210)</label>
                    <Field type="text" name="mem2Whatsapp" className="w-full p-2 border rounded bg-[#2a2b55] border-[#3d3e6b] text-white" />
                    <ErrorMessage name="mem2Whatsapp" component="div" className="text-red-400 text-sm" />
                  </div>

                  <div className="col-span-1 sm:col-span-2">
                    <button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="w-full bg-[#0f5ea3] text-white p-2 rounded hover:bg-[#148EA2] transition-colors"
                    >
                      Submit
                    </button>
                  </div>

                  {successMessage && (
                    <div className="col-span-1 sm:col-span-2 text-green-500 text-lg mb-4">
                      {successMessage}
                    </div>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;