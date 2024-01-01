import React from 'react'
import Logo from "../static/images/logo_devwithtobi_removebg-white.png"
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";



const Footer = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className='lg:w-9/12 w-10/12 flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:my-16 mb-16 gap-8'>
            <h1 className='w-11/12 lg:w-4/12 lg:text-4xl text-3xl lg:text-left text-center title_text font-bold'>Interested in doing a project together?</h1>
            <div className='hLine w-4/12 hidden lg:flex'></div>
            <a href="/contact" className='portfolioBtn inline-block my-2 mb-2 py-3 px-16 text-sm' >CONTACT ME</a>
            </div>

            <div className='w-full bg-slate-800 flex items-center justify-center'>
                <div className='w-10/12 flex lg:flex-row flex-col items-center lg:justify-between justify-center py-4'>
                <img src={Logo} alt="logo" width={200}/>
                <ul className='flex lg:flex-row flex-col  items-center lg:justify-between justify-center gap-5 text-white text-xs lg:pb-0 pb-8 '>
                    <li className='list-item text-sm' ><a className='mx-4 px-2 inline-block' href='/'>HOME</a></li>
                    <li className=' text-sm' ><a className=' mx-4 px-2 inline-block' href='/'>PORTFOLIO</a></li>
                    <li className=' text-sm' ><a className=' mx-4 px-2 inline-block' href='/'>CONTACT</a></li>
                </ul>
                <div className='flex item-center justify-center gap-8 text-white lg:pb-0 pb-8 '>
                    <a href='https://www.linkedin.com/in/tobiloba-lawal-1097a6132/' target='_blank' className='p-2 rounded-full border hover:border-white  border-slate-800 ' rel='noreferrer'> <FaLinkedinIn/> </a>
                    
                    <a href='https://wa.me/+2348120272000' target='_blank' className='p-2 rounded-full border hover:border-white  border-slate-800 ' rel='noreferrer'> <FaWhatsapp /> </a>
                    
                    <a href='https://twitter.com/Toseth_official' target='_blank' className='p-2 rounded-full border hover:border-white  border-slate-800 ' rel='noreferrer'> <FaXTwitter /> </a>
                    
                    <a href='https://github.com/toseth97' target='_blank' rel='noreferrer' className='p-2 rounded-full border hover:border-white  border-slate-800 '> <LuGithub /> </a>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Footer