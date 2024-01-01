import React from 'react'
import HeroImg from "../static/images/desktop-ff-new.png"
import AboutImg from "../static/images/passport.jpeg"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='w-full flex flex-col justify-center items-center mt-4 lg:mt-8  '>
        <div className='lg:w-9/12 w-11/12 flex flex-col justify-center items-center relative pb-8 '>
            <img src={HeroImg} alt='hero' width={2000} />

            <div className='heroIntro lg:w-7/12 w-11/12 lg:absolute relative bottom-8  lg:left-0 left:0 mt-8 lg:p-8 p-0 lg:mt-0'>
                <h1 className='lg:text-5xl tracking-wide opacity-80 text-2xl font-bold my-8'>Hey, I'm Tobiloba Lawal. <br/>I love building wonderful web applications.</h1>
                <Link to="/"  className='aboutBtn inline-block py-4 px-16 mb-8 text-white text-sm'>About Me</Link>
            </div>
        </div>
        
        <div id='about' className=' lg:w-8/12 w-10/12 flex lg:flex-row flex-col lg:justify-between justify-center my-16 gap-16'>
          <img src={AboutImg} alt='portrait' className='lg:w-6/12 w-full' />
          <div className='lg:w-5/12 w-full border-t border-b lg:py-8 py-1 text-justify lg:text-left'>
            <h1 className='title_text text-4xl font-bold my-4'>About Me</h1>
            <div className='opacity-70 tracking-wider lg:leading-7 leading-6 lg:text-sm text-md '>
            <p className='w-full'>
              I am a full stack web developer with experience in both front and back end development, as well as knowledge of databases, server management, and digital. <br/> I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript.
            </p>
            <p>
            When writing JavaScript code, I mostly use React, but I can adapt with whatever tools are required. I'm based in Lagos, Nigeria.
            </p>
            <p>
            When not coding, you will most-likely find me playing games, hanging out with friends. I'd love you to check my work.
            </p>
            </div>


            <p>
            <Link to="/portfolio" className='portfolioBtn lg:inline-block block my-16 mb-2 py-3 px-16 text-sm text-center' >GO TO PORTFOLIO</Link>
            </p>
          </div>

        </div>
        

    </section>
  )
}

export default Hero