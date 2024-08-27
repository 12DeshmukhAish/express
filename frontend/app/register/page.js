'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    address: '',
    password: '',
    confirmPassword: '',
  })
  const router = useRouter()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration successful
        router.push('/login') // Redirect to login page
      } else {
        // Registration failed
        const errorData = await response.json()
        console.error('Registration failed:', errorData.error)
        // Handle error (e.g., show error message to user)
      }
    } catch (error) {
      console.error('Error during registration:', error)
      // Handle network errors
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />
      <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" required />
      <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
      <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
      <input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" required />
      <button type="submit">Register</button>
    </form>
  )
}