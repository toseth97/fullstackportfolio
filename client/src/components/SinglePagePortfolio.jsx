import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { portfolio } from "./utils";

const SinglePagePortfolio = () => {
    useEffect(() => {
        window.scroll(0, 0);
        document.title = "Devwithtobi - Portfolio";
    });

    const { id } = useParams();
    const content = portfolio.find((item) => item.id === Number(id));
    const {
        bg,
        image,
        image_2,
        info,
        description,
        sm_1,
        sm_2,
        link,
        name,
        tools,
    } = content;
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className={`${bg} relative w-10/12 mt-8 lg:h-screen h-60`}>
                <img
                    src={image}
                    alt="banner_1"
                    className=" absolute w-8/12 lg:top-10 lg:right-10 top-2 right-2"
                />
                <img
                    src={image_2}
                    alt="banner_2"
                    className="absolute w-8/12 lg:left-10 lg:bottom-10 bottom-2 left-2"
                />
            </div>

            <div className="lg:w-8/12 w-10/12 flex lg:flex-row flex-col justify-between py-16 gap-16 ">
                <div className="border-b border-t lg:w-5/12 w-full py-8">
                    <h1 className="font-bold text-4xl pb-8 title_text">
                        {name}
                    </h1>
                    <p className="text-sm opacity-80 py-8">{description}</p>
                    <p className="text-sm text-green-800">{tools}</p>

                    <Link
                        to={link}
                        target="_blank"
                        className="portfolioBtn inline-block my-4 mb-8 py-2 px-16 text-sm text-center"
                    >
                        Visit Site
                    </Link>
                </div>
                <div className="lg:w-7/12 w-full">
                    <h1 className="title_text lg:pb-16 pb-4 text-4xl">
                        Project Background
                    </h1>
                    <p className="text-sm opacity-80 lg:text-left text-justify">
                        {info}
                    </p>
                    <h1 className="title_text lg:text-3xl text-2xl py-4">
                        Static Image
                    </h1>
                    <div
                        className={`${bg} relative w-full lg:min-h-60 h-36 overflow-hidden`}
                    >
                        <img
                            src={image_2}
                            alt="banner_2"
                            className="absolute w-8/12 lg:left-5 lg:top-5 top-2 left-2"
                        />
                        <img
                            src={sm_1}
                            alt="banner_2"
                            className="absolute w-3/12 lg:right-5 lg:top-5 top-2 right-2"
                        />
                    </div>
                </div>

                <div></div>
            </div>
        </div>
    );
};

export default SinglePagePortfolio;
