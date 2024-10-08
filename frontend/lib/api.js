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

// frontend/lib/api.js

export async function loginUser(credentials) {
  const response = await fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Login failed');
  }

  return response.json();
}
// const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const getUserBookings = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No authentication token found');
  }

  try {
    const response = await fetch(`${API_URL}/bookings/user`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch bookings');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }
};
// lib/api.js

// lib/api.js

export const addEquipment = async (equipmentData) => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No authentication token found');
  }

  try {
    const response = await fetch('/api/equipment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(equipmentData),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Error response:', data);
      throw new Error(data.error || 'Failed to add equipment');
    }

    return data;
  } catch (error) {
    console.error('Error adding equipment:', error);
    throw error;
  }
};

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