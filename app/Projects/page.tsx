"use client"
import chatApp from '../../public/chat-app.png'
import portfolioDark from '../../public/portfolioDark.png'
import portfolioWhite from '../../public/portfolioWhite.png'
import EsiCalculator from '../../public/Esi-calculator.png'
import MainTitle from '../components/MainTitle'
import ProjectCard from '../components/ProjectCard'
import { useTheme } from 'next-themes'

function Projects() {

    const { resolvedTheme } = useTheme()
    return (
        <div>
            <MainTitle title={'See My Latest Work'} />
            <div className='container p-10 m-auto flex gap-20 flex-wrap justify-center lg:justify-start'>
                <ProjectCard title={'Real Time Chat App'} image={chatApp} desc={'real time chat app'} link={'https://github.com/fodhil-ben/chat-app'}
                    stack={['React js', 'Node js', 'Express js', 'Tailwind Css', 'Socket.io', 'PostgreSQL']} />
                <ProjectCard title={'Esi Calculator'} image={EsiCalculator} desc={'App to help esi students calculate thier averages'} link={'https://fodhil-ben.github.io/Esi-calculator/'}
                    stack={['React js', 'Tailwind Css']} />
                <ProjectCard title={'Portfolio'} image={resolvedTheme === 'dark' ? portfolioWhite : portfolioDark} desc={'Portfolio yo show my work'} link={'/'}
                    stack={['Next js', 'Tailwind Css', 'Typescript']} />
            </div>
        </div>
    )

}

export default Projects