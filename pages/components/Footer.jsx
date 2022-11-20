import Link from 'next/link';
import React from 'react'
import LogoSVG from './LogoSVG';

function Footer() {
    return (
        <>
            <div className="p-4 bg-neutral-900 shadow md:px-6 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between max-w-7xl mx-auto">
                    <Link href='/' className="flex mb-4 sm:mb-0 space-x-2 flex-shrink-0 items-center sm:justify-self-start sm:mx-0 mx-auto">
                        <LogoSVG />
                        <h1 className='font text-2xl' >

                            <span className='text-white text-3xl tracking-wide font-medium'>
                                Mascot
                            </span>
                        </h1>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link href="/" className="mr-4 hover:underline md:mr-6">Home</Link>
                        </li>
                        <li>
                            <Link href="about" className="mr-4 hover:underline md:mr-6">About</Link>
                        </li>
                        <li>
                            <Link href="pricing" className="mr-4 hover:underline md:mr-6">Pricing</Link>
                        </li>
                        <li>
                            <Link href="contact" className="mr-4 hover:underline md:mr-6">Contact</Link>
                        </li>
                        <li>
                            <Link href="login" className="hover:underline">Login</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8  mx-auto" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 max-w-7xl mx-auto">© 2022 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                </span>
            </div>

        </>
    )
}

export default Footer