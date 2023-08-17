import MainTitle from "../components/MainTitle"
import { MdEmail, MdLocationPin } from 'react-icons/md'
import { FiPhoneCall } from 'react-icons/fi'
import { AiFillGithub } from "react-icons/ai"
import { BsInstagram, BsLinkedin } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import MessageForm from "../components/MessageForm"

const Contact = () => {
    return (
        <div>
            <MainTitle title={'Contact Me'} />
            <div className="tracking-wider px-10 container m-auto gap-14 flex justify-center lg:justify-between flex-col lg:flex-row">
                <div className="lg:w-1/3 h-fit grid gap-10 shadow-xl border-t dark:border-gray-800 rounded-xl p-10">
                    <div className="grid gap-5 md:text-2xl">
                        <div className="flex justify-start  items-center gap-5">
                            <MdEmail></MdEmail>
                            <h1>f.benhiba@esi-sba.dz</h1>
                        </div>
                        <div className="flex justify-start  items-center gap-5">
                            <FiPhoneCall></FiPhoneCall>
                            <h1>+213797530466</h1>
                        </div>
                        <div className="flex justify-start  items-center gap-5">
                            <MdLocationPin></MdLocationPin>
                            <h1>Algeria / Chlef | Sidi-Bel-Abbes</h1>
                        </div>
                    </div>
                    <div className="flex justify-center gap-5 text-2xl">
                        <div className="cursor-pointer  box-border">
                            <AiFillGithub ><a href="https://github.com/fodhil-ben" target="_blank"></a></AiFillGithub>
                        </div>
                        <div className="cursor-pointer  box-border">
                            <BsLinkedin ><a href="https://www.linkedin.com/in/fodhil-benhiba-446623276/" target="_blank"></a></BsLinkedin>
                        </div>
                        <div className="cursor-pointer  box-border">
                            <FaFacebook ><a href="https://www.facebook.com/foudil.benhiba.3" target="_blank"></a></FaFacebook>
                        </div>
                        <div className="cursor-pointer  box-border">
                            <BsInstagram ><a href="https://www.instagram.com/fodhil_benhiba" target="_blank"></a></BsInstagram></div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <MessageForm />
                </div>
            </div>
        </div>
    )
}

export default Contact