import React from 'react'
import { Link } from 'react-router-dom'
import { FaLink } from "react-icons/fa";

const PortfolioList = (props) => {
    const {name, image,description, link,bg} = props.item
    return (
        <div className='w-10/12 flex lg:flex-row flex-col justify-between gap-5 my-8 my_portfolio'>
                    <div className={`lg:w-7/12 w-full flex ${bg} items-center justify-center my_portfolio`}>
                        <img src={image} alt='fund-fortress' className='w-11/12' />
                    </div>
                    <div className='lg:w-5/12 w-full border-t border-b lg:py-8 py-1 text-justify lg:text-left'>
                        <a href={link} target='_blank' rel="noreferrer" className='flex gap-5 items-center'>
                            <h1 className='title_text text-4xl font-bold my-4 lg:text-left text-center'>{name}</h1>
                            <FaLink />

                        </a>
                        <div className='opacity-80 tracking-wider lg:leading-7 leading-6 lg:text-sm text-md lg:min-h-40 '>
                        {description}<br/>
                        </div>
                        


                        <p>
                        <Link to="/portfolio" className='portfolioBtn inline-block my-4 mb-8 py-2 px-16 text-sm text-center' >More</Link>
                        </p>
                    </div>

                </div>
    )
}

export default PortfolioList