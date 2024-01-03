import React, { useEffect } from "react";

const Blog = () => {
    useEffect(() => {
        //changing the page title.
        document.title = "Devwithtobi - Portfolio";
        //scroll to the top every time this page is opened.
        window.scrollTo(0, 0);

        document.getElementById("blog").style.color = "#5FB4A2";
        document.getElementById("home").style.color = "#000";
        document.getElementById("contact").style.color = "#000";
        document.getElementById("portfolio").style.color = "#000";
    }, []);
    return (
        <div className="h-96 py-16 text-center w-full flex items-center justify-center flex-col">
            <h1 className="title_text font-bold text-4xl">Blog Section</h1>
            <p className="py-8 font-semibold">Coming Soon!!!</p>
        </div>
    );
};

export default Blog;
