import Image from 'next/image'
import React from 'react'
import  Link  from 'next/link';

export default function page() {
  return (
    <section className='px-3 py-4'>
      <div>
        <Image className='mx-auto mb-4' src={'/hero-image.png'} width={350} height={350} priority={true} />
        <h1 className='text-4xl text-white font-semibold text-center'>Stay up to date with <span className='text-amber-200' > Financial State</span></h1>
        <h2 className='text-lg text-gray-300 font-light tracking-wide text-center my-4'>Track all cryptocurrencies  and gold latest prices
          and news.</h2>
      </div>

      <div className='w-full flex flex-col justify-center items-center my-2 space-y-2'>
        <Link href='/preview' className='text-white text-center px-6 py-2 w-full bg-slate-600 rounded-md font-medium tracking-wide text-lg animate-pulse' >Preview</Link>

        <Link href='/login' className='text-white text-center px-6 py-2 w-full bg-teal-700 rounded-md font-medium tracking-wide text-lg' >Login</Link>
      </div>
    </section>
  )
}
