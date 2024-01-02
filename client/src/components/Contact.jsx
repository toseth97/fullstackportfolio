import React, { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";

const Contact = () => {
    const [contactMail, setContactMail] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loadState, setLoadState] = useState(false);

    useEffect(() => {
        //changing the page title.
        document.title = "Devwithtobi - Contact";
        //scroll to the top every time this page is opened.
        window.scrollTo(0, 0);

        document.getElementById("contact").style.color = "#5FB4A2";
        document.getElementById("home").style.color = "#000";
        document.getElementById("portfolio").style.color = "#000";
    }, []);

    //function to handle change for the react form
    const handleInputChanges = (event) => {
        const { name, value } = event.target;
        setContactMail((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const sendMessage = async (event) => {
        event.preventDefault();

        setLoadState(true);
        try {
            const response = await fetch("http://localhost:3300/contact-me", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contactMail),
            });
            console.log(response);
            setLoadState(false);
        } catch (err) {
            setLoadState(false);
            console.log(err);
        }
    };

    return (
        <div className=" w-full flex flex-col items-center justify-center">
            <div className="lg:w-8/12 w-10/12 py-8">
                <div className="flex flex-col lg:flex-row items-start lg:justify-between justify-center gap-5 lg:mt-16 mt-2 border-b pb-8">
                    <h1 className="text-4xl title_text font-bold lg:w-4/12 w-full">
                        Get in Touch
                    </h1>
                    <div className="lg:w-6/12 w-full text-justify">
                        <p className="opacity-80">
                            I’d love to hear about what you’re working on and
                            how I could help. I’m currently looking for a new
                            role and am open to a wide range of opportunities.
                            My preference would be to find a position in a
                            company in London, Canada and USA, but I’m also
                            happy to hear about opportunites that don’t fit that
                            description. I’m a hard-working and positive person
                            who will always approach each task with a sense of
                            purpose and attention to detail. Please do feel free
                            to check out my online profiles below and get in
                            touch using the form.
                        </p>
                        <span>
                            <div className="flex items-center gap-3 text-white lg:pb-0 my-4 ">
                                <Link
                                    to="https://www.linkedin.com/in/tobiloba-lawal-1097a6132/"
                                    target="_blank"
                                    className="bg-slate-800 hover:shadow-lg p-2 rounded border hover:border-white  border-slate-800 "
                                    rel="noreferrer"
                                >
                                    {" "}
                                    <FaLinkedinIn />{" "}
                                </Link>

                                <Link
                                    to="https://wa.me/+2348120272000"
                                    target="_blank"
                                    className="bg-slate-800 hover:shadow-lg p-2 rounded border hover:border-white  border-slate-800 "
                                    rel="noreferrer"
                                >
                                    {" "}
                                    <FaWhatsapp />{" "}
                                </Link>

                                <Link
                                    to="https://twitter.com/Toseth_official"
                                    target="_blank"
                                    className="bg-slate-800 hover:shadow-lg p-2 rounded border hover:border-white  border-slate-800 "
                                    rel="noreferrer"
                                >
                                    {" "}
                                    <FaXTwitter />{" "}
                                </Link>

                                <Link
                                    to="https://github.com/toseth97"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-slate-800 hover:shadow-lg p-2 rounded border hover:border-white  border-slate-800 "
                                >
                                    {" "}
                                    <LuGithub />{" "}
                                </Link>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-start lg:justify-between justify-center gap-5 lg:mt-16 mt-2 border-b pb-8">
                    <h1 className="text-4xl title_text font-bold lg:w-4/12 w-full">
                        Contact Me
                    </h1>
                    <div className="lg:w-6/12 w-full text-justify">
                        <form
                            onSubmit={(event) => sendMessage(event)}
                            method="post"
                        >
                            <div className="flex flex-col gap-2 my-3">
                                <label htmlFor="name" className="font-semibold">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={(event) =>
                                        handleInputChanges(event)
                                    }
                                    required
                                    className="focus:outline-none focus:border-none active:outline-none active:border-none bg-gray-200 text-sm  py-2 px-8"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="flex flex-col gap-2 my-3">
                                <label
                                    htmlFor="email"
                                    className="font-semibold"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    onChange={(event) =>
                                        handleInputChanges(event)
                                    }
                                    required
                                    className="focus:outline-none focus:border-none active:outline-none active:border-none bg-gray-200 text-sm  py-2 px-8"
                                    placeholder="email@example.com"
                                />
                            </div>
                            <div className="flex flex-col gap-2 my-3">
                                <label
                                    htmlFor="message"
                                    className="font-semibold"
                                >
                                    Message
                                </label>
                                <textarea
                                    type="text"
                                    id="message"
                                    name="message"
                                    onChange={(event) =>
                                        handleInputChanges(event)
                                    }
                                    required
                                    cols={8}
                                    rows={8}
                                    className="focus:outline-none focus:border-none active:outline-none active:border-none bg-gray-200 text-sm  py-2 px-8"
                                    placeholder="How can i help you?"
                                    style={{ resize: "none" }}
                                ></textarea>
                            </div>
                            <button className="blogBtn text-white w-5/12 flex items-center justify-center p-2">
                                {loadState ? (
                                    <div className="loadState"></div>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
