import React, { useEffect } from 'react'
import { portfolio } from './utils';
import PortfolioList from './PortfolioList';

const Portfolio = () => {
    useEffect(() => {
        //changing the page title.
        document.title = 'Devwithtobi - Portfolio';
        //scroll to the top every time this page is opened.
        window.scrollTo(0, 0)
    }, []);
    



    return (
        <div className='ref={mySectionRef} w-full flex flex-col items-center justify-center lg:mt-8 mt-0 '>

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