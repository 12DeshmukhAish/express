import Header from '../components/Header'
import Footer from '../components/Footer'
import '../Styles/globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
