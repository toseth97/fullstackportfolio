import React, { useEffect } from 'react'
import { portfolio } from './utils';
import PortfolioList from './PortfolioList';

const Portfolio = () => {
    //changing the page title
    useEffect(() => {
        document.title = 'Devwithtobi - Portfolio';
    }, []);

    return (
        <div className='w-full flex flex-col items-center justify-center lg:mt-8 mt-0 '>

            <div className='lg:w-11/12 w-full flex flex-col items-center justify-center'>
                {
                    portfolio.map(item=>{
                        return <PortfolioList key={item.id} item={item}/>
                    })
                }
            </div>

        </div>
    )
}

export default Portfolio