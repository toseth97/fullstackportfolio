import ff from "../static/images/ff-lg.png";
import ticket from "../static/images/ticket-lg-login.png";
import ecommerce from "../static/images/ecommerce-lg.png";

export const portfolio = [
    {
        id: 1,
        name: "Fund Fortress",
        image: ff,
        description:
            "This project was a result of the Hackathon organized by I4G and FCMB in 2023. The project helped me to put to practice things I have learnt. I used ReactJS for the frontend, NodeJS/ExpressJS for backend and Mongodb handles the database.",
        link: "https://fund-fortress-frontend.vercel.app/",
        bg: "bg-blue-700",
    },
    {
        id: 2,
        name: "IT Support Ticket",
        image: ticket,
        description:
            "This project was inspired by the condition of the work I currently do (IT Support Specialist). I wanted to reduce the stress of user calling or coming to the IT Room. I used ReactJS for the frontend, NodeJS/ExpressJS for backend and Mongodb for database.",
        link: "https://it-support-ticket.pages.dev/",
        bg: "bg-teal-900",
    },
    {
        id: 3,
        name: "He-Commerce",
        image: ecommerce,
        description:
            "This project is a frontend challenge I saw online and felt I should do something with it, leveraging a free api that provides me with the products. The project was built with ReactJS",
        link: "https://first-ecommerce-theta.vercel.app/",
        bg: "bg-lime-800",
    },
];
