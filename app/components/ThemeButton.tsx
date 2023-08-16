"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

export const ThemeButton = () => {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    return (
        <div className='p-5 cursor-pointer text-xl' onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
            {resolvedTheme === 'dark'
                ? <BsFillSunFill></BsFillSunFill>
                : <BsFillMoonFill></BsFillMoonFill>
            }
        </div>
    )
}
