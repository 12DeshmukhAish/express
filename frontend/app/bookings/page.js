'use client'

import { useEffect, useState } from 'react'
import { getUserBookings } from '../../lib/api'

export default function Bookings() {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const userBookings = await getUserBookings()
        setBookings(userBookings)
      } catch (error) {
        console.error('Failed to fetch bookings:', error)
      }
    }
    fetchBookings()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Bookings</h1>
      {bookings.length === 0 ? (
        <p>You have no bookings yet.</p>
      ) : (
        <ul className="space-y-4">
          {bookings.map((booking) => (
            <li key={booking._id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-semibold">{booking.equipmentId.name}</h2>
              <p>Rental Date: {new Date(booking.rentalDate).toLocaleDateString()}</p>
              <p>Price: ${booking.equipmentId.rentalPrice}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}