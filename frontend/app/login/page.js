'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { loginUser } from '../../lib/api'
import { toast, Toaster } from 'react-hot-toast' // Import Toaster

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const router = useRouter()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { token } = await loginUser(formData)
      localStorage.setItem('token', token)
      
      // Display success toast message
      toast.success('Login successful!')

      // Clear form after submission
      setFormData({
        email: '',
        password: '',
      })

      // Redirect to dashboard
      router.push('/dashboard')
    } catch (error) {
      console.error('Login failed:', error)

      // Display error toast message
      toast.error('Login failed. Please try again.')
    }
  }

  return (
    <div className="login-container">
      <div className="login-image">
        <img src="/path/to/your/image.jpg" alt="Login" />
      </div>
      <div className="login-form-container">
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form__group field">
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="form__field"
            />
            <label htmlFor="email" className="form__label">Email</label>
          </div>
          <div className="form__group field">
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="form__field"
            />
            <label htmlFor="password" className="form__label">Password</label>
          </div>
          <button type="submit" className="login-submit-button">
            Login
          </button>
        </form>
      </div>
      
      {/* Add the Toaster component to display toast notifications */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  )
}
