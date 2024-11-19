"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const TechnicianApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    role: '',
    reason: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here

    // Show success popup
    setShowSuccessPopup(true);
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
  };

 


  return (
    <div className="max-w-2xl mx-5 md:mx-auto mt-20 p-5 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-5 text-center">Technician Application Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-gray-700 font-medium">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-gray-700 font-medium">Role:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          >
            <option value="" disabled>Select role</option>
            <option value="technician">installer</option>
            <option value="electrician">Electrician</option>
          </select>
        </div>

        <div>
          <label htmlFor="reason" className="block text-gray-700 font-medium">Reason for Joining:</label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
            required
          ></textarea>
        </div>

        <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          Submit Application
        </button>
      </form>
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h3 className="text-2xl mb-4">Application Submitted Successfully!</h3>
            <Link href="/">
            <button onClick={closePopup} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Back Home
            </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnicianApplicationForm;
