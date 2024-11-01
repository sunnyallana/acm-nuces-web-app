import React from 'react';

const RegistrationClosedNotice = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4 mt-12">
      <h2 className="text-4xl font-bold text-red-400 mb-4">
        Registrations have now ended.
      </h2>
      <p className="text-xl text-gray-300">
        Qualifier Round begins on 7th November.
      </p>
    </div>
  );
};

export default RegistrationClosedNotice;