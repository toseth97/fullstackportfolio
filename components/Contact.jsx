"use client";

import { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
// Medium icon import removed (to avoid missing export)


const Contact = () => {
  const [contactMail, setContactMail] = useState({
    name: "",
    sender_email: "",
    message: ""
  });
  const [flashMessage, setFlashMessage] = useState(null);
  const [loadState, setLoadState] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChanges = (event) => {
    const { name, value } = event.target;
    setContactMail((prev) => ({ ...prev, [name]: value }));
  };

  const sendMessage = async (event) => {
    event.preventDefault();
    setLoadState(true);

    try {
      const response = await fetch("/api/contact-me", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactMail)
      });
      const data = await response.json();
      setFlashMessage(data);

      if (response.status === 200 && data.message) {
        setContactMail({ name: "", sender_email: "", message: "" });
        setTimeout(() => {
          setFlashMessage(null);
        }, 4000);
      } else {
        setTimeout(() => {
          setFlashMessage(null);
        }, 4000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadState(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-black/50 to-900 to-black min-h-screen py-16">
      <div className="lg:w-8/12 w-10/12 py-8">
        <div className="flex flex-col lg:flex-row items-start lg:justify-between justify-center gap-5 lg:mt-16 mt-2 border-b border-green-400 pb-8">
          <h1 className="text-4xl title_text font-bold lg:w-4/12 w-full text-green-400">
            Get in Touch
          </h1>

          <div className="lg:w-6/12 w-full text-justify">
            <div className="flex items-start gap-6">
              <div className="hidden sm:block lg:w-1/3">
                <img
                  src="/images/passport.png"
                  alt="Your profile picture"
                  className="w-44 h-44 object-cover rounded-full border border-green-400/60 shadow"
                />
              </div>

              <div className="lg:w-2/3">
                <p className="opacity-80 text-gray-300">
                  I’d love to hear about what you’re working on and how I could help.
                  I’m currently looking for a new role and am open to a wide range of
                  opportunities. My preference would be to find a position in a company
                  in Europe and America but I’m also happy to hear about opportunites
                  that don’t fit that description. I’m a hard-working and positive person
                  who will always approach each task with a sense of purpose and attention
                  to detail. Please do feel free to check out my online profiles below
                  and get in touch using the form.
                </p>

                <div className="flex items-center gap-3 text-white lg:pb-0 my-4">
                  <a
                    href="https://www.linkedin.com/in/tobiloba-lawal-1097a6132/"
                    target="_blank"
                    className="bg-gray-800 hover:shadow-lg p-2 rounded border hover:border-green-400 border-gray-600 transition-colors"
                                      rel="noreferrer"
                                      title="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://wa.me/+2348120272000"
                    target="_blank"
                    className="bg-gray-800 hover:shadow-lg p-2 rounded border hover:border-green-400 border-gray-600 transition-colors"
                                      rel="noreferrer"
                                      title="Whatsapp"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="https://twitter.com/Toseth_official"
                    target="_blank"
                    className="bg-gray-800 hover:shadow-lg p-2 rounded border hover:border-green-400 border-gray-600 transition-colors"
                                      rel="noreferrer"
                                      title="Twitter"
                  >
                    <FaXTwitter />
                                  </a>
                                  
                  <a
                    href="https://github.com/toseth_official"
                    target="_blank"
                    rel="noreferrer"
                                      className="bg-gray-800 hover:shadow-lg p-2 rounded border hover:border-green-400 border-gray-600 transition-colors"
                                      title="Github"
                  >
                    <LuGithub />
                                  </a>
                     <a
                                  href="https://medium.com/@oluwasheun9721"
                                  target="_blank"
                    rel="noreferrer"
                                      className="bg-gray-800 hover:shadow-lg p-2 rounded border hover:border-green-400 border-gray-600 transition-colors"
                                      title="Medium"
                                >
                                  <FaMedium />
                                </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:justify-between justify-center gap-5 lg:mt-16 mt-2 border-b border-green-400 pb-8">
          <h1 className="text-4xl title_text font-bold lg:w-4/12 w-full text-green-400">
            Contact Me
          </h1>

          <div className="lg:w-6/12 w-full text-justify bg-black/50 backdrop-blur-md p-6 rounded border border-green-400">
            <form onSubmit={sendMessage} method="post">
              <div className="flex flex-col gap-2 my-3">
                <label htmlFor="name" className="font-semibold text-green-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactMail.name}
                  onChange={handleInputChanges}
                  required
                  className="focus:outline-none focus:border-green-400 active:outline-none active:border-green-400 bg-gray-800 text-white text-sm py-2 px-8 border border-gray-600 rounded"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2 my-3">
                <label htmlFor="sender_email" className="font-semibold text-green-400">
                  Email Address
                </label>
                <input
                  type="email"
                  id="sender_email"
                  name="sender_email"
                  value={contactMail.sender_email}
                  onChange={handleInputChanges}
                  required
                  className="focus:outline-none focus:border-green-400 active:outline-none active:border-green-400 bg-gray-800 text-white text-sm py-2 px-8 border border-gray-600 rounded"
                  placeholder="email@example.com"
                />
              </div>

              <div className="flex flex-col gap-2 my-3">
                <label htmlFor="message" className="font-semibold text-green-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={contactMail.message}
                  onChange={handleInputChanges}
                  required
                  cols={8}
                  rows={8}
                  className="focus:outline-none focus:border-green-400 active:outline-none active:border-green-400 bg-gray-800 text-white text-sm py-2 px-8 border border-gray-600 rounded resize-none"
                  placeholder="How can i help you?"
                ></textarea>
              </div>

              <button className="blogBtn text-white w-5/12 flex items-center justify-center p-2 shadow-blue-500/50">
                {loadState ? <div className="loadState"></div> : "Send Message"}
              </button>

              {flashMessage && (
                <div
                  className={`text-center my-2 p-2 rounded flashMessage_${flashMessage.type} border`}
                >
                  {flashMessage.type === true
                    ? "Message sent"
                    : "Error, We could not send the message at the moment"}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

