"use client";

import { useEffect, useRef } from "react";

const Hero = () => {
  const mySectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    mySectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full flex flex-col justify-center items-center mt-4 lg:mt-8 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen">
      <div className="lg:w-9/12 w-11/12 flex flex-col justify-center items-center relative">
        <div className="w-full text-center mb-8">
          <div className="text-green-400 text-sm font-mono mb-4">
            <span className="text-blue-400">$ whoami</span>
            <br />
            <span className="text-green-400">Tobiloba Lawal</span>
            <br />
            <span className="text-purple-400">$ cat /dev/motivation</span>
          </div>
        </div>
        <img src="/images/desktop-ff-new.png" alt="hero" width={2000} className="opacity-50" />

        <div className="heroIntro lg:w-7/12 w-11/12 lg:absolute relative bottom-8 left-0 mt-8 lg:p-8 p-0 lg:mt-0">
          <h1 className="lg:text-5xl tracking-wide opacity-80 text-2xl font-bold my-8 text-green-400 font-mono">
            <span className="text-blue-400">&gt;</span> Hey, I'm Tobiloba Lawal. <br />I love building secure web applications.
          </h1>
          <a href="#about" onClick={handleClick} className="aboutBtn inline-block py-4 px-16 mb-8 text-white text-sm shadow-purple-500/50">
            About Me
          </a>
        </div>
      </div>

      <div ref={mySectionRef} id="about" className="lg:w-8/12 w-10/12 flex lg:flex-row flex-col lg:justify-between justify-center my-4 pb-8 pt-16 gap-16">
        <img src="/images/passport.png" alt="portrait" className="lg:w-5/12 w-full rounded border border-green-400 shadow-lg shadow-green-400/50" />
        <div className="lg:w-5/12 w-full border-t border-b border-green-400 lg:py-8 py-1 text-justify lg:text-left bg-gray-900/50 p-4 rounded">
          <h1 className="title_text text-4xl font-bold my-4 text-green-400">About Me</h1>
          <div className="opacity-70 tracking-wider lg:leading-7 leading-6 lg:text-sm text-md text-gray-300">
            <p className="w-full">
              I am a full stack web developer with experience in both front and back end development, as well as knowledge of cybersecurity and ethical hacking. <br /> I focus on writing secure, accessible HTML, using modern CSS practices and writing clean JavaScript.
            </p>
            <p>
              When writing JavaScript code, I mostly use React, but I can adapt with whatever tools are required. I'm based in Lagos, Nigeria.
            </p>
            <p>
              When not coding, you will most-likely find me pentesting, hanging out with friends. I'd love you to check my work.
            </p>
          </div>

          <p>
            <a href="/portfolio" className="portfolioBtn lg:inline-block block my-16 mb-2 py-3 px-16 text-sm text-center shadow-green-500/50">
              CHECK MY PORTFOLIO
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
