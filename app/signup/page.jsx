"use client";
import Link from "next/link";
import React, { useState } from "react";
import LoginSVG from "../components/LoginSVG";
import GmailSVG from "./../components/GmailSVG";

function Signup() {
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmail = () => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setIsEmailValid(regex.test(String(email).toLowerCase()));
  };

  return (
    <section className="px-3 py-4 ">
      <div className="sm:max-w-7xl">
        <div className="sm:flex justify-center items-center text-white ">
          <h2 className="text-4xl sm:text-4xl tracking-wide font-medium mb-8 text-start sm:hidden">
            Ready For Wealth,{" "}
            <span className="font-bold text-amber-600 text-5xl">Investor?</span>
          </h2>

          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 hidden sm:block">
            <h2 className="text-4xl sm:text-5xl tracking-wide font-medium mb-8 hidden">
              Ready For Wealth,{" "}
              <span className="font-bold text-amber-600">Investor?</span>
            </h2>
            <LoginSVG className="w-full fill-amber-200" />
          </div>
          <div className="md:w-8/12 lg:w-2/5 lg:ml-20 ">
            <hr className="hidden border-gray-200  dark:border-gray-600 lg:my-8" />

            <div className="flex justify-between items-baseline">
              <h2 className="text-4xl sm:text-5xl tracking-wide font-medium mb-8">
                Signup
              </h2>
              <div className="flex flex-row gap-3 items-baseline">
                <h2 className="text-amber-600 text-lg tracking-tighter">or</h2>

                <Link
                  href={"/login"}
                  className="text-white  hover:text-amber-600 active:text-amber-600 duration-200 transition ease-in-out"
                >
                  Login?
                </Link>
              </div>
            </div>
            {/* Email input */}
            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 sm:text-lg tracking-normal text-sm  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-amber-600 focus:outline-none"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                className="form-control block w-full px-4 py-2 sm:text-lg tracking-normal text-sm  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-amber-600 focus:outline-none"
                placeholder="Email address"
                onClick={() => handleEmail(e)}
              />
            </div>
            {isEmailValid ? "" : "email is not valid"}
            {/* Password input */}
            <div className="mb-6">
              <input
                type="password"
                className="form-control block w-full px-4 py-2 sm:text-lg tracking-normal text-sm text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-amber-600 focus:outline-none"
                placeholder="Password"
                validations={[required]}
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                className="form-control block w-full px-4 py-2 sm:text-lg tracking-normal text-sm text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-amber-600 focus:outline-none"
                placeholder="Password Again"
                validations={[required]}
              />
            </div>
            {/* Submit button */}
            <Link
              type="submit"
              href="#!"
              className="text-center inline-block px-7 py-3 bg-amber-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-amber-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-800 active:shadow-lg transition duration-150 ease-in-out w-full"
            >
              Sign Up
            </Link>
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p className="text-center font-semibold mx-4 mb-0">OR</p>
            </div>
            <Link
              className="px-7 py-3 text-black hover:bg-[#f2f2f2] active:bg-gray-300 bg-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center  mb-3"
              href="#"
              role="button"
            >
              {/* Google */}
              <svg
                className="w-3.5 h-3.5 mr-2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  fill="#EA4335 "
                  d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                />
                <path
                  fill="#34A853"
                  d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
                />
                <path
                  fill="#4A90E2"
                  d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
                />
              </svg>
              Continue with Google
            </Link>

            <Link
              className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center bg-[#3b5998] hover:bg-[#34518b]"
              href="#"
              role="button"
            >
              {/* Facebook */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="w-3.5 h-3.5 mr-2"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>
              Continue with Facebook
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
