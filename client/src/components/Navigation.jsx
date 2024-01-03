import React, { useState } from "react";
import Logo from "../static/images/logo-removebg-preview.png";
import { Link } from "react-router-dom";

const Navigation = () => {
    const [menuClick, setMenuClick] = useState(false);

    return (
        <header className="w-full flex flex-col items-center justify-center shadow-lg sticky top-0">
            <nav className="lg:w-9/12 w-11/12 flex items-center justify-between py-2 ">
                <Link to="/">
                    <img
                        src={Logo}
                        alt="logo"
                        className="logoImage"
                        width={90}
                    />
                </Link>
                <ul className="lg:flex hidden items-center justify-between gap-5 ">
                    <li className="listItem text-sm" id="home">
                        <Link className="mx-4 px-2" to="/">
                            HOME
                        </Link>
                    </li>
                    <li className="listItem text-sm" id="portfolio">
                        <Link className=" mx-4 px-2" to="/portfolio">
                            PORTFOLIO
                        </Link>
                    </li>
                    <li className="listItem text-sm" id="contact">
                        <Link className=" mx-4 px-2" to="/contact">
                            CONTACT
                        </Link>
                    </li>
                    <li className="listItem text-sm" id="blog">
                        <Link
                            className="blogBtn text-white mx-4 px-8 py-2"
                            to="/blog"
                        >
                            BLOG
                        </Link>
                    </li>
                </ul>
                <div
                    className="mobileBtn lg:hidden flex"
                    onClick={() => setMenuClick((prev) => !prev)}
                >
                    {menuClick ? (
                        <i className="bx bx-x bx_menu text-4xl"></i>
                    ) : (
                        <i className="bx bx-menu-alt-right bx_menu text-4xl"></i>
                    )}
                </div>
            </nav>

            {menuClick ? (
                <ul className="block items-center text-center w-full justify-between gap-5 mobileUl ">
                    <li className="listItem border-b">
                        <a className="my-4 py-2" href="/">
                            Home
                        </a>
                    </li>
                    <li className="listItem border-b">
                        <a className="my-4 py-2" href="/portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="listItem">
                        <a className="my-4 py-2" href="/contact">
                            Contact
                        </a>
                    </li>
                    <li className="listItem text-sm" id="blog">
                        <a className="blogBtn text-white py-4" href="/blog">
                            BLOG
                        </a>
                    </li>
                </ul>
            ) : null}
        </header>
    );
};

export default Navigation;
