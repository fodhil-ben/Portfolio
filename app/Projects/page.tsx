"use client"
import chatApp from '../../public/chat-app.png'
import portfolioDark from '../../public/portfolioDark.png'
import CoScapeWelcome from '../../public/Weclome.png'
import portfolioWhite from '../../public/portfolioWhite.png'
import EsiCalculator from '../../public/Esi-calculator.png'
import AlphaWebsite from '../../public/AlphaWebsite.png'
import DeliverEase from '../../public/deliverease.png'
import MainTitle from '../components/MainTitle'
import ProjectCard from '../components/ProjectCard'
import { useTheme } from 'next-themes'

function Projects() {

    const { resolvedTheme } = useTheme()
    return (
        <div>
            <MainTitle title={'See My Latest Work'} />
            <div className='container p-10 m-auto flex gap-20 flex-wrap justify-center lg:justify-start'>
                <ProjectCard title={'Real Time Chat App'} image={chatApp} desc={'A full stack chat app that give you real time connection securily '} link={'https://github.com/fodhil-ben/chat-app'}
                    stack={['React js', 'Node js', 'Express js', 'Tailwind Css', 'Socket.io', 'PostgreSQL']} />
                
                <ProjectCard title={'Esi Calculator'} image={EsiCalculator} desc={'App to help esi students calculate thier averages'} link={'https://fodhil-ben.github.io/Esi-calculator/'}
                    stack={['React js', 'Tailwind Css']} />
                
                <ProjectCard title={'Portfolio'} image={resolvedTheme === 'dark' ? portfolioWhite : portfolioDark} desc={'Portfolio to show my work'} link={'/'}
                    stack={['Next js', 'Tailwind Css', 'Typescript']} />
                
                <ProjectCard title={'DeliverEase'} image={DeliverEase} desc={`A FULL WEB/MOBILE APPLICATION FOR A TRACKING SYSTEM: 
                it was a school project i participated mainly in the backend side we developed a graph ql api using express js and postgres sql database with drizzle orm, and i helped a bit in the frontend side, it was built using react js and we implemented the map using google map api,
                also our backend server is fully dockerized so we deployed the backend server to google cloud using managed kubernetes service`} link={'/'}
                    stack={['Express js', 'Drizzle ORM', 'PostgreSQL', 'GraphQL', 'Docker','Typescript', 'React js', 'Tailwind Css']} />
                
                <ProjectCard title={'AlphaBit website'} image={AlphaWebsite} desc={`i had the honor to be part of the team that maintained the website for alphabit club (Alphabit is a scientific club based in the higher school of computer science in SIDI BEL ABBES).
                `} link={'https://www.alphabit.club/'}
                    stack={['Next js', 'Tailwind Css', 'JavaScript']} />
                    
                <ProjectCard title={'Co-Scape Hackathon Platform'} image={CoScapeWelcome} desc={`i had the honor to be part of the team that developed the platform for that hackathon, it was a great experience i helped in both backend side using next js as a backend server it was my first try with next js for backend and it did the job also using PostgreSQL and Prisma ORM, and frontend side using next js also
                `} link={'https://co-scape-hackathon-feb-2024.vercel.app'}
                    stack={['Next js', 'Tailwind Css', 'Typescript', 'PostgreSQL', 'Prisma ORM']} />
            </div>
        </div>
    )

}

export default Projects