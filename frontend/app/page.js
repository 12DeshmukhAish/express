"use client";
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Head>
        <title>AgriRent - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
      </Head>

      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')
        }}
      >
        {/* Header */}
        <header className="bg-white bg-opacity-90 shadow-md">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="AgriRent Logo"
                className="h-10 w-10 mr-2"
              />
              <h1 className="text-2xl font-bold text-green-600">AgriRent</h1>
            </div>
            <div className="flex-grow max-w-xl mx-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for agricultural equipment..."
                  className="w-full py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-500">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              onClick={openModal}
            >
              Login / Register
            </button>
          </div>
        </header>

        {/* Sidebar */}
        <nav
          className={`fixed left-0 top-0 h-full bg-white bg-opacity-90 w-64 shadow-lg overflow-y-auto transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-5">
            <button className="text-gray-500 hover:text-gray-700" onClick={toggleSidebar}>
              <i className="fas fa-times"></i>
            </button>
            <ul className="mt-5 space-y-2">
              <li>
                <button className="w-full text-left py-2 px-4 rounded hover:bg-green-100">Home</button>
              </li>
              <li>
                <button className="w-full text-left py-2 px-4 rounded hover:bg-green-100">About</button>
              </li>
              <li>
                <button className="w-full text-left py-2 px-4 rounded hover:bg-green-100">Contact Us</button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Sidebar Toggle Button */}
        <button
          className="fixed left-4 top-4 z-50 bg-white p-2 rounded-full shadow-md hover:bg-green-100 focus:outline-none"
          onClick={toggleSidebar}
        >
          <i className="fas fa-bars text-green-600"></i>
        </button>

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-4 shadow-text">Rent Agricultural Equipment with Ease</h2>
          <p className="text-xl text-white mb-8 shadow-text">Find the right tools for your farming needs</p>
          <a
            href="#"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Login Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Login / Register</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-center">
              Don't have an account? <a href="#" className="text-green-500 hover:underline">Register here</a>
            </p>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </>
  )
}