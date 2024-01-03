import ff from "../static/images/ff-lg.png";
import ticket from "../static/images/ticket-lg-login.png";
import ecommerce from "../static/images/ecommerce-lg.png";
import ecommerce_sm_1 from "../static/images/ecommerce-sm-bottom.png";
import ecommerce_sm_2 from "../static/images/ecommerce-sm-top.png";
import ticket_sm_1 from "../static/images/ticket-details-sm.png";
import ticket_sm_2 from "../static/images/ticket-sm-2.png";
import ff_sm_1 from "../static/images/ff-sm-1.png";
import ff_sm_2 from "../static/images/ff-card-sm.png";
import ecommerce_2 from "../static/images/ecommerce-lg-2.png";
import ff_2 from "../static/images/ff-lg-2.png";
import ticket_2 from "../static/images/ticket-lg-2.png";

export const portfolio = [
    {
        id: 1,
        name: "Fund Fortress",
        image: ff,
        description:
            "This project was a result of the Hackathon organized by I4G and FCMB in 2023. The project helped me to put to practice things I have learnt. I used ReactJS for the frontend, NodeJS, ExpressJS for backend and Mongodb handles the database.",
        link: "https://fund-fortress-frontend.vercel.app/",
        bg: "bg-blue-900",
        image_2: ff_2,
        sm_1: ff_sm_1,
        sm_2: ff_sm_2,
        info: "This project was a challenge from 14G & FCMB. It’s an online banking platform. This base version enables you to deposit and make transfer to the same Fund Fortress bank as the app is not licensed. Later version will allow user to loan to their beneficiaries (P2P Loan), asset monetization. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
        tools: "HTML, CSS3, TAILWINDCSS, REACT, NODEJS, EXPRESSJS, MONGODB",
    },
    {
        id: 2,
        name: "IT Support Ticket",
        image: ticket,
        description:
            "This project was inspired by the condition of the work I currently do (IT Support Specialist). I wanted to reduce the stress of user calling or coming to the IT Room. I used ReactJS for the frontend, NodeJS ExpressJS for backend and Mongodb for database.",
        link: "https://it-support-ticket.pages.dev/",
        bg: "bg-teal-900",
        image_2: ticket_2,
        sm_1: ticket_sm_1,
        sm_2: ticket_sm_2,
        info: "This project was an inspiration from my work environment. It is basically an IT help desk application where users create tickets for the challenges theuy face and this tickets get attend to by the IT team. This base version allow user to log-in, create ticket, view ticket. In later version, automatic ticket escalation will be provided once the ticket has been opened for 24hrs till it get resolved. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
        tools: "HTML, CSS3, TAILWINDCSS, REACT, NODEJS, EXPRESSJS, MONGODB",
    },
    {
        id: 3,
        name: "He-Commerce",
        image: ecommerce,
        description:
            "This project is a frontend challenge I saw online and felt I should do something with it, leveraging a free api that provides me with the products. The project was built with ReactJS",
        link: "https://first-ecommerce-theta.vercel.app/",
        bg: "bg-green-900",
        image_2: ecommerce_2,
        sm_1: ecommerce_sm_1,
        sm_2: ecommerce_sm_2,
        info: "This project was a front-end  challenge that I saw online. It’s an ecommerce platform where user can place order on product from the comfort of their room. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
        tools: "HTML, CSS3, TAILWINDCSS, REACT",
    },
];
