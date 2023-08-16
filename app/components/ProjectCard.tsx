import Image, { StaticImageData } from "next/image"
import { FC } from "react"
import { BsFillArrowRightCircleFill } from "react-icons/bs"

interface projectCardProps {
    title: string
    stack: string[]
    image: StaticImageData
    desc: string
    link: string
}

const ProjectCard: FC<projectCardProps> = ({ title, image, stack, desc, link }) => {
    return (
        <div id='projectCard' className='justify-between group/card shadow-xl relative  dark:shadow-gray-800 rounded-xl overflow-hidden'>
            <Image
                priority={true}
                src={image}
                alt={title}
                className='w-full'
            />
            <div className='p-5 flex-col flex'>
                <h1 className='font-bold text-xl border-b p-3 pt-0'>{title}</h1>
                <div className='flex gap-3 flex-wrap pt-5'>
                    {stack.map((e) => {
                        return <div className='rounded-md shadow-md dark:shadow-gray-800 p-2'>{e}</div>
                    })}
                </div>
                <div className='absolute p-5 top-full invisible text-md font-semibold group-hover/card:visible w-full left-0 duration-500  group-hover/card:top-10 h-full group-hover/card:bg-white group-hover/card:block dark:group-hover/card:bg-black opacity-95 group-hover/card:z-20'>{desc}
                    <a href={link} target="_blank">
                        <button className="flex items-center gap-3 w-fit bottom-10 absolute right-0 mr-5 mb-5 dark:bg-white shadow-md bg-black text-white rounded-xl dark:text-black p-3 font-bold"> Visit Demo
                            <BsFillArrowRightCircleFill ></BsFillArrowRightCircleFill>
                        </button>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard