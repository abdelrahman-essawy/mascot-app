"use client"

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import LogoSVG from './LogoSVG'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'About', href: 'about', current: false },
    { name: 'Pricing', href: 'pricing', current: false },
    { name: 'Contact', href: 'contact', current: false },
    { name: 'Login', href: 'login', current: false }
]

export default function Navbar() {

    // function handleNavbarClick(clickedPage) {
    //     navigation.forEach((pageName) => {
    //         if (pageName.name == clickedPage) {
    //             pageName.current = true
    //             navigation.forEach((nonClickedPageName) => {
    //                 if (nonClickedPageName.name != pageName.name) {
    //                     nonClickedPageName.current = false
    //                 }
    //             })
    //         }
    //     })
    // }

    return (
        <>

            <Disclosure as="nav" className="bg-[#1b322c]">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
                            <div className="relative  flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="text-white inline-flex items-center justify-center rounded-md p-2  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <Link href='/' className="flex space-x-2 flex-shrink-0 items-center sm:justify-self-start sm:mx-0 mx-auto">
                                    <LogoSVG />
                                    <h1 className='font text-2xl' >

                                        <span className='text-white text-3xl tracking-wide font-medium'>
                                            Mascot
                                        </span>
                                    </h1>
                                </Link>
                                <div className="hidden sm:ml-6 sm:block justify-self-center">
                                    <div className="flex space-x-4">
                                        {navigation.map((page, index) => (
                                            <Link
                                                key={index}
                                                href={page.href}
                                                className={'focus:bg-teal-900 text-white hover:bg-teal-900 px-3 py-2 rounded-md text-sm font-medium'}
                                            >
                                                {page.name}

                                            </Link>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="text-center space-y-1 px-2 pt-2 pb-3">
                                {navigation.map((item) => (
                                    <Link href={item.href}
                                        key={item.name}
                                        className={'focus:bg-teal-900 text-white hover:bg-teal-900 hover:text-hite block px-3 py-2 rounded-md text-base font-medium'}>

                                        <Disclosure.Button
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    </Link>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    )
}