"use client"

import React, { useState } from 'react'
import { ThemeButton } from './ThemeButton'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { HiMenu } from 'react-icons/hi'
import { GiCancel } from 'react-icons/gi'

export const Navbar = () => {
    const links = ['', 'Projects', 'About', 'Contact']
    const [show, setShow] = useState(false)
    let path = usePathname()
    return (
        <div className='px-5 md:px-10 shadow-md dark:shadow-gray-800 font-bold text-xl'>
            <div className='flex justify-between'>
                <h1 className='p-5'>Fodhil Benhiba</h1>
                <div className={`flex items-center`}>
                    <div className='hidden md:flex'>
                        {links.map((e, i) => {
                            return <Link key={i} href={`/${e}`} prefetch className={`p-5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black duration-300 ${path === `/${e}` && 'border-b-4 '}`}>{e === '' ? 'Home' : e}</Link>
                        })}
                    </div>
                    <ThemeButton />
                    <div className='p-5 md:hidden cursor-pointer text-2xl' onClick={() => setShow(!show)}>
                        {show
                            ?
                            <GiCancel></GiCancel>
                            :
                            <HiMenu></HiMenu>}
                    </div>
                </div>
            </div>
            <div className={`z-20 w-full md:hidden duration-300 border-t ${show ? 'grid' : 'hidden'}`}>
                {links.map((e, i) => {
                    return <Link key={i} href={`/${e}`} prefetch className='p-5 hover:px-10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black duration-300'>{e === '' ? 'Home' : e}</Link>

                })}
            </div>
        </div>

    )
}
