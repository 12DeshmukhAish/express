import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Agrirent
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/equipment/add">Add Equipment</Link></li>
          <li><Link href="/bookings">My Bookings</Link></li>
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/register">Register</Link></li>
        </ul>
      </nav>
    </header>
  )
}