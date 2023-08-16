import React, { FC } from 'react'

interface MainTitleProps {
    title: string
}

const MainTitle: FC<MainTitleProps> = ({ title }) => {
    return (
        <div className='text-xl px-5 py-3 shadow-2xl dark:shadow-gray-800 md:px-14 md:py-8 dark:after:bg-white dark:before:bg-white rounded-2xl main-title relative hover:bg-black hover:text-white dark:hover:text-black duration-500 dark:hover:bg-white  font-bold md:text-3xl text-center mb-10 border-2 mt-16 w-2/3 md:w-fit m-auto'>{title}</div>
    )
}

export default MainTitle