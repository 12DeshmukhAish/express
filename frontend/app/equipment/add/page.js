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
  })
  const router = useRouter()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addEquipment(formData)
      router.push('/dashboard')
    } catch (error) {
      console.error('Failed to add equipment:', error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Add New Equipment</h1>
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
          required
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Add Equipment
        </button>
      </form>
    </div>
  )
}