import Link from 'next/link'
import React from 'react'
import LoginSVG from '../components/LoginSVG'
import Signup from './../signup/page';
import GmailSVG from './../components/GmailSVG';

function Login() {
  return (
    <section className="px-3 py-4">
      <div className="sm:max-w-7xl">
        <div className="sm:flex justify-center items-center text-white">
          <h2 className='text-4xl sm:text-4xl tracking-wide font-medium mb-8 text-start sm:hidden'>Welcome back, <span className='font-bold text-amber-600 text-5xl'>Investor!</span></h2>

          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 hidden sm:block">

            <h2 className='text-4xl sm:text-5xl tracking-wide font-medium mb-8 hidden'>Welcome back, <span className='font-bold text-amber-600'>Investor!</span></h2>
            <LoginSVG className='w-full fill-amber-200' />
          </div>
          <div className="md:w-8/12 lg:w-2/5 lg:ml-20">
            <hr className="hidden border-gray-200  dark:border-gray-600 lg:my-8" />

            <div className='flex justify-between items-baseline'>
              <h2 className='text-4xl sm:text-5xl tracking-wide font-medium mb-8'>Login</h2>
              <div className='flex flex-row gap-3 items-baseline'>
                <h2 className='text-amber-600 text-lg tracking-tighter'>or</h2>

                <Link href={'/signup'} className='text-white text-lg tracking-tighter hover:text-amber-600 active:text-amber-600'>Create account?</Link>
              </div>
            </div>
            {/* Email input */}
            <div className="mb-6">
              <input type="text" className="form-control block w-full px-4 py-2 text-md tracking-wide sm:text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-amber-600 focus:outline-none" placeholder="Email address" />
            </div>
            {/* Password input */}
            <div className="mb-6">
              <input type="password" className="form-control block w-full px-4 py-2 text-md tracking-wide sm:text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-amber-600 focus:outline-none" placeholder="Password" />
            </div>
            <div className="flex justify-between items-center mb-6">
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-amber-600 checked:border-amber-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" id="exampleCheck3" />
                <label className="form-check-label inline-block text-white" htmlFor="exampleCheck2">Remember me</label>
              </div>
              <Link href="#!" className="text-white hover:text-amber-600 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">Forgot password?</Link>
            </div>
            {/* Submit button */}
            <Link type="submit" href="#!" className="text-center inline-block px-7 py-3 bg-amber-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-amber-800 hover:shadow-lg focus:bg-amber-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-800 active:shadow-lg transition duration-150 ease-in-out w-full" >
              Sign in
            </Link>
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p className="text-center font-semibold mx-4 mb-0">OR</p>
            </div>
            <Link className="px-7 py-3 text-black bg-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center  mb-3" href="#" role="button">
              {/* Twitter */}
              <GmailSVG className='w-3.5 h-3.5 mr-2'/>
              Continue with Gmail
            </Link>

            <Link className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center" style={{ backgroundColor: '#3b5998' }} href="#" role="button">
              {/* Facebook */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-3.5 h-3.5 mr-2">
                {/*! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
                <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>Continue with Facebook
            </Link>



          </div>
        </div>
      </div>
    </section>
  )
}

export default Login