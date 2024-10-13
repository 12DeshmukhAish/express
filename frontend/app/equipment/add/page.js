'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { addEquipment } from '../../../lib/api'

export default function AddEquipment() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    condition: '',
    rentalPrice: '',
    availabilityDate: '',
    image: '',
    ownerName: '',
    address: '',
    contactNumber: '',
  })
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      const result = await addEquipment(formData);
      console.log('Equipment added successfully:', result);
      router.push('/dashboard')
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      setError(error.message);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Add New Equipment</h1>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Equipment Name"
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="condition"
          value={formData.condition}
          onChange={handleChange}
          placeholder="Condition"
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="rentalPrice"
          type="number"
          value={formData.rentalPrice}
          onChange={handleChange}
          placeholder="Rental Price"
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="availabilityDate"
          type="date"
          value={formData.availabilityDate}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-2 border rounded"
        />
        <input
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
          placeholder="Owner Name"
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          placeholder="Contact Number"
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded disabled:opacity-50"
          disabled={isLoading}
        >
          {isLoading ? 'Adding...' : 'Add Equipment'}
        </button>
      </form>
    </div>
  )
}