import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-black border-t border-green-400">
      <div className="lg:w-9/12 w-10/12 flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:my-16 mb-16 gap-8">
        <h1 className="w-11/12 lg:w-4/12 lg:text-4xl text-3xl lg:text-left text-center title_text font-bold text-green-400">
          Interested in doing a project together?
        </h1>
        <div className="hLine w-4/12 hidden lg:flex"></div>
        <Link href="/contact" className="portfolioBtn inline-block my-2 mb-2 py-3 px-16 text-sm shadow-green-500/50">
          CONTACT ME
        </Link>
      </div>

      <div className="w-full bg-gray-900 flex items-center justify-center border-t border-green-400">
        <div className="w-10/12 flex lg:flex-row flex-col items-center lg:justify-between justify-center py-2">
          <img src="/images/logo_devwithtobi_removebg-white.png" alt="logo" width={120} />
          <ul className="flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-5 text-white text-xs lg:pb-0 pb-8">
            <li className="list-item text-sm">
              <Link className="mx-4 px-2 inline-block hover:text-green-400 transition-colors" href="/">
                HOME
              </Link>
            </li>
            <li className="text-sm">
              <Link className="mx-4 px-2 inline-block hover:text-green-400 transition-colors" href="/portfolio">
                PORTFOLIO
              </Link>
            </li>
            <li className="text-sm">
              <Link className="mx-4 px-2 inline-block hover:text-green-400 transition-colors" href="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
          <div className="flex item-center justify-center gap-8 text-white lg:pb-0 pb-8">
            <a href="https://www.linkedin.com/in/tobiloba-lawal-1097a6132/" target="_blank" className="p-2 rounded-full border hover:border-green-400 border-gray-600 transition-colors" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://wa.me/+2348120272000" target="_blank" className="p-2 rounded-full border hover:border-green-400 border-gray-600 transition-colors" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://twitter.com/Toseth_official" target="_blank" className="p-2 rounded-full border hover:border-green-400 border-gray-600 transition-colors" rel="noreferrer">
              <FaXTwitter />
            </a>
            <a href="https://github.com/toseth97" target="_blank" rel="noreferrer" className="p-2 rounded-full border hover:border-green-400 border-gray-600 transition-colors">
              <LuGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
