const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
  if (!response.ok) {
    throw new Error('Registration failed')
  }
  return response.json()
}

export const loginUser = async (credentials) => {
  const response = await fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
  if (!response.ok) {
    throw new Error('Login failed')
  }
  return response.json()
}

export const getUserBookings = async () => {
  const token = localStorage.getItem('token')
  const response = await fetch(`${API_URL}/bookings/user`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })
  if (!response.ok) {
    throw new Error('Failed to fetch bookings')
  }
  return response.json()
}

export const addEquipment = async (equipmentData) => {
  const token = localStorage.getItem('token')
  const response = await fetch(`${API_URL}/equipment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(equipmentData),
  })
  if (!response.ok) {
    throw new Error('Failed to add equipment')
  }
  return response.json()
}

export const getEquipment = async () => {
  const response = await fetch(`${API_URL}/equipment`)
  if (!response.ok) {
    throw new Error('Failed to fetch equipment')
  }
  return response.json()
}

export const createBooking = async (bookingData) => {
  const token = localStorage.getItem('token')
  const response = await fetch(`${API_URL}/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(bookingData),
  })
  if (!response.ok) {
    throw new Error('Failed to create booking')
  }
  return response.json()
}