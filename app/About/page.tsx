import React from 'react'
import MainTitle from '../components/MainTitle'
import { BiLogoPostgresql, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi'
import { SiSocketdotio, SiExpress, SiNextdotjs, SiPrisma, SiGraphql, SiApollographql} from 'react-icons/si'

import { DiNodejs } from 'react-icons/di'
import { BsGit } from 'react-icons/bs'
import { FaDocker, FaPython, FaLaravel } from 'react-icons/fa'


interface Technology {
    name: string
    logo: React.ReactElement
}

const Technologies: Technology[] = [
    { name: 'HTML', logo: <BiLogoHtml5 /> },
    { name: 'CSS', logo: <BiLogoCss3 /> },
    { name: 'Javascript', logo: <BiLogoJavascript /> },
    { name: 'React js', logo: <BiLogoReact /> },
    { name: 'Git', logo: <BsGit /> },
    { name: 'Node js', logo: <DiNodejs /> },
    { name: 'Tailwind Css', logo: <BiLogoTailwindCss /> },
    { name: 'socket.io', logo: <SiSocketdotio /> },
    { name: 'Express Js', logo: <SiExpress /> },
    { name: 'PostgreSQL', logo: <BiLogoPostgresql /> },
    { name: 'Next js', logo: <SiNextdotjs /> },
    { name: 'Typescript', logo: <BiLogoTypescript /> },
    { name: 'Python', logo: <FaPython /> },
    
    { name: 'Prisma', logo: <SiPrisma />    },
    // { name: 'Drizzle', logo: <SiDrizzle />    },
    { name: 'GraphQL', logo: <SiGraphql />    },
    { name: 'Appolo Server', logo: <SiApollographql />    },
    { name: 'Docker', logo:<FaDocker />    },
    { name: 'Laravel', logo: <FaLaravel />    },
];

const About = () => {

    return (
        <div className='container m-auto flex flex-col lg:flex-row items-center lg:items-start lg:gap-40 px-10'>
            <div className='md:w-1/2'>
                <MainTitle title={'About Me'} />
                <div className='text-xl mt-20 border-t dark:border-gray-800 tracking-wider line shadow-xl p-10 rounded-lg dark:shadow-gray-800'>
                    <p>Hello there! I am Fodhil, a first-year student at the Higher School of Computer Science in Sidi Bel Abbes.</p>
                    <br />
                    <p>I&apos;m an aspiring full-stack developer with a passion for cybersecurity. I enjoy solving CTF challenges and am on an exciting journey to master the art of crafting seamless web experiences while exploring the complex world of cybersecurity.</p>
                    <br />
                    <p>With a strong interest in both front-end and back-end development, I am committed to refining my skills and expanding my knowledge to create innovative solutions that merge functionality with security.</p>
                </div>
            </div>

            <div className='md:w-1/2'>
                <MainTitle title={'Technologies that i used'} />
                <div className='flex mt-20 flex-wrap justify-between gap-x-5 gap-y-3 md:gap-x-10 md:gap-y-5'>
                    {Technologies.map((e, i) => {
                        return <div key={i} className='border hover:bg-black dark:shadow-gray-800 shadow-2xl hover:text-white dark:hover:bg-white dark:hover:text-black p-3 flex rounded-lg duration-500 items-center gap-4'>
                            <div className='lg:text-xl lg:font-medium'>{e.name}</div>
                            <div className='text-2xl lg:text-6xl'>{e.logo}</div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default About