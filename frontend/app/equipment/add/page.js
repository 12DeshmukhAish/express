'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

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
  const router = useRouter()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      await addEquipment(formData)
      router.push('/dashboard')
    } catch (error) {
      setError(error.message)
      console.error('Failed to add equipment:', error)
    }
  }

  return (
    <div className="add-equipment-page-container">
      {/* Left Side: Image */}
      <div className="add-equipment-image-container">
  <img
    src="/addequip.png" // Correct path, if image is in the public folder
    alt="Add Equipment"
    className="add-equipment-image"
  />
</div>

      {/* Right Side: Form */}
      <div className="add-equipment-form-container">
        <h1 className="add-equipment-title">Add New Equipment</h1>
        {error && <p className="add-equipment-error">{error}</p>}
        <form onSubmit={handleSubmit} className="add-equipment-form">
          
          {/* Row 1: Equipment Name and Condition */}
          <div className="form-row">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Equipment Name"
              required
              className="add-equipment-input half-width"
            />
            <input
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              placeholder="Condition"
              required
              className="add-equipment-input half-width"
            />
          </div>

          {/* Row 2: Rental Price and Availability Date */}
          <div className="form-row">
            <input
              name="rentalPrice"
              type="number"
              value={formData.rentalPrice}
              onChange={handleChange}
              placeholder="Rental Price"
              required
              className="add-equipment-input half-width"
            />
            <input
              name="availabilityDate"
              type="date"
              value={formData.availabilityDate}
              onChange={handleChange}
              required
              className="add-equipment-input half-width"
            />
          </div>

          {/* Row 3: Description */}
          <div className="form-row">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              required
              className="add-equipment-textarea full-width"
            />
          </div>

          {/* Row 4: Image URL and Owner Name */}
          <div className="form-row">
            <input
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
              required
              className="add-equipment-input half-width"
            />
            <input
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder="Owner Name"
              required
              className="add-equipment-input half-width"
            />
          </div>

          {/* Row 5: Address and Contact Number */}
          <div className="form-row">
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              required
              className="add-equipment-input half-width"
            />
            <input
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Contact Number"
              required
              className="add-equipment-input half-width"
            />
          </div>

          {/* <button type="submit" className="add-equipment-submit-button">
            Add Equipment/* From Uiverse.io by yaroslavas2001
          </button> */}
           
<button class="btn1">
  <div class="wrapper">
    <p class="text">Add Equipment</p>

    <div class="flower flower1">
      <div class="petal one"></div>
      <div class="petal two"></div>
      <div class="petal three"></div>
      <div class="petal four"></div>
    </div>
    <div class="flower flower2">
      <div class="petal one"></div>
      <div class="petal two"></div>
      <div class="petal three"></div>
      <div class="petal four"></div>
    </div>
    <div class="flower flower3">
      <div class="petal one"></div>
      <div class="petal two"></div>
      <div class="petal three"></div>
      <div class="petal four"></div>
    </div>
    <div class="flower flower4">
      <div class="petal one"></div>
      <div class="petal two"></div>
      <div class="petal three"></div>
      <div class="petal four"></div>
    </div>
    <div class="flower flower5">
      <div class="petal one"></div>
      <div class="petal two"></div>
      <div class="petal three"></div>
      <div class="petal four"></div>
    </div>
    <div class="flower flower6">
      <div class="petal one"></div>
      <div class="petal two"></div>
      <div class="petal three"></div>
      <div class="petal four"></div>
    </div>
  </div>
</button>

        </form>
      </div>
    </div>
  )
}
