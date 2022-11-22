import '../styles/globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Suspense } from 'react';
import Loading from './loading';

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className='flex flex-col justify-between min-h-screen'>
        <navbar className='mb-auto'>
          <Navbar />
          <hr />
        </navbar>
        <main className='flex-grow bg-[#1b322c] relative'>
            {children}
        </main>
        <footer className='mt-auto'>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
