import ff from "../static/images/ff-lg.png";
import ticket from "../static/images/ticket-lg-login.png";
import ecommerce from "../static/images/ecommerce-lg.png";

export const portfolio = [
    {
        id: 1,
        name: "Fund Fortress",
        image: ff,
        description:
            "This project was a result of the Hackaton made by I4G and FCMB in 2023. The project help me to put to practice what i have learnt. I used React for the frontend, NodeJS/ExpressJS for backend and Mongodb is the database used.",
        link: "https://fund-fortress-frontend.vercel.app/",
        bg: "bg-blue-700",
    },
    {
        id: 2,
        name: "IT Support Ticket",
        image: ticket,
        description:
            "This project was inspired by the condition of the work I currently do (IT SUpport Specialist). I want to reduce the stress of user calling or coming to the IT Room. I used React for the frontend, NodeJS/ExpressJS for backend and Mongodb is the database used.",
        link: "https://it-support-ticket.pages.dev/",
        bg: "bg-teal-900",
    },
    {
        id: 3,
        name: "He-Code Commerce",
        image: ecommerce,
        description:
            "This project is a frontend challenge I saw online and felt i should do something with a free api. The project was basic build with reactJS",
        link: "https://first-ecommerce-theta.vercel.app/",
        bg: "bg-lime-800",
    },
];
