import '../styles/globals.css'
import Navbar from "../pages/components/Navbar";
import Footer from '../pages/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className='flex flex-col justify-between min-h-screen'>
        <navbar className='mb-auto'>
          <Navbar />
          <hr />
        </navbar>
        <main className='flex-grow bg-[#1b322c]'>
          {children}
        </main>
        <footer className='mt-auto'>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
