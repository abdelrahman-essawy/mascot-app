import Image from 'next/image'
import React, { Suspense } from 'react'
import Link from 'next/link';
import HeroPreviewTop3 from './components/HeroPreviewTop3';
import Loading from './loading';

export default function page() {
  return (
    <>
      <section className='px-3 py-4 sm:flex sm:flex-row-reverse sm:justify-evenly w-full sm:max-w-7xl sm:m-auto sm:mb-12'>
        <div className='sm:w-1/2'>
          <Image className='mx-auto mb-4 sm:hidden' src={'/hero-image.png'} width={350} height={350} priority={true} />
          <Image className='hidden mx-auto mb-4 sm:block' src={'/hero-image.png'} width={500} height={500} priority={true} />
          <h1 className='text-4xl text-white font-semibold text-center sm:hidden'>Stay up to date with <span className='text-amber-200 font-bold' > Financial State</span></h1>
          <h2 className='text-lg text-gray-300 font-light tracking-wide text-center my-4 sm:hidden'>Track all cryptocurrencies, gold and Currencies latest prices
            and news.</h2>
        </div>

        <div className='w-full sm:w-1/2 flex flex-col justify-center items-center my-2 space-y-2 self-start '>
          <div className='hidden sm:block '>
            <h1 className='text-5xl text-white font-medium leading-tight text-start'>Stay up to date with <span className='text-amber-200 font-bold' ><br /> Financial State</span></h1>

            <p className='text-xl text-gray-300 font-light tracking-wide mt-4 text-start'>Track all cryptocurrencies, gold and Currencies latest prices
              and news.</p>
            <p className='text-xl text-gray-300 font-light tracking-wide text-start'>For Investors who seeks detailed and UpToDate informations.</p>
            <p className='text-xl text-gray-300 font-light tracking-wide mb-4 text-start'>For Amateurs who wants to invest their savings.</p>
            <div className='w-full flex space-x-4'>

              <Link href='/preview' className='text-white text-center px-6 py-2 w-1/2 bg-slate-600 rounded-md font-medium tracking-wide text-lg animate-pulse  hover:bg-slate-700 active:bg-slate-800 ease-in-out duration-100' >Preview</Link>
              <Link href='/login' className='text-white text-center px-6 py-2 w-1/2 bg-teal-700 rounded-md font-medium tracking-wide text-lg hover:bg-teal-800 active:bg-teal-900 ease-in-out duration-100' >Login</Link>
            </div>

          </div>
          <Link href='/preview' className='sm:hidden text-white text-center px-6 py-2 w-full bg-slate-600 rounded-md font-medium tracking-wide text-lg animate-pulse hover:bg-slate-700 active:bg-slate-800 ease-in-out duration-100' >Preview</Link>
          <Link href='/login' className='sm:hidden text-white text-center px-6 py-2 w-full bg-teal-700 rounded-md font-medium tracking-wide text-lg hover:bg-teal-800 active:bg-teal-900 ease-in-out duration-100' >Login</Link>
        </div>
      </section>
      <hr className="sm:mx-6 border-gray-200  dark:border-gray-600 lg:my-8" />
      <Suspense fallback={<Loading />}>
        <HeroPreviewTop3 />
      </Suspense>
    </>

  )
}
