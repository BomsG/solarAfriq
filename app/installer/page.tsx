"use client"
import React, {useState} from 'react'
import { Installer, CustomerForm } from '../types';



const page = () => {

    // const installers: Installer[] = [
    //     { id: 1, name: 'Sun Power Installations', location: 'California', rating: 4.8, specialties: ['Residential', 'Commercial'] },
    //     { id: 2, name: 'Solar Solu', location: 'Texas', rating: 4.5, specialties: ['Residential'] },
    //     { id: 2, name: 'Solar Solution', location: 'Lagos', rating: 4.5, specialties: ['Residential'] },
    //     { id: 2, name: 'Solar Solutio', location: 'Portharcourt', rating: 4.5, specialties: ['Residential'] },
    //     // More sample installers
    //   ];
    
      const [formData, setFormData] = useState<CustomerForm>({
        name: '',
        email: '',
        location: '',
        projectDetails: '',
      });
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Process the form data, e.g., send to API
        console.log('Form submitted:', formData);
      };
    
  return (
    <section >
        <div className='h-[120px] bg-black'></div>
    <div className='container mx-auto py-16 px-6 sm:px-12 lg:px-24'>
        <h1 className='text-[30px] sm:text-[40px] md:text-[50px] mb-8 leading-[50px] sm:leading-[60px] md:leading-[80px]'>Connect with technician</h1>

        <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded mb-8">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleInputChange} 
            className="border w-full p-2 rounded" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleInputChange} 
            className="border w-full p-2 rounded" 
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Location</label>
          <input 
            type="text" 
            name="location" 
            value={formData.location} 
            onChange={handleInputChange} 
            className="border w-full p-2 rounded" 
            required 
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-semibold mb-2">Looking for</label>
          <select
            id="role"
            name="role"
            className="w-full p-2 border border-gray-300 rounded mb-4 text-sm"
            required
          >
            <option value="" disabled>Select role</option>
            <option value="installer">Technician</option>
            <option value="electrician">Electrician</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Project Details</label>
          <textarea 
            name="projectDetails" 
            value={formData.projectDetails} 
            onChange={handleInputChange} 
            className="border w-full p-2 rounded" 
            required 
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Submit
        </button>
      </form>

      {/* Installers List */}
      {/* <h2 className="text-2xl font-semibold mb-4">Available Installers in Your Area</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {installers.map(installer => (
          <div key={installer.id} className="p-4 border rounded shadow">
            <h3 className="text-xl font-bold">{installer.name}</h3>
            <p>Location: {installer.location}</p>
            <p>Rating: {installer.rating} ⭐</p>
            <p>Specialties: {installer.specialties.join(', ')}</p>
          </div>
        ))}
      </div> */}
    </div>
    </section>
  )
}

export default page