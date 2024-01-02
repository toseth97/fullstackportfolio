import React, { useState } from 'react'
import Logo from "../static/images/logo-removebg-preview.png"

const Navigation = () => {
    const [menuClick, setMenuClick] = useState(false)


    return (
        <header className='w-full flex flex-col items-center justify-center shadow-lg sticky top-0'>
            <nav className='lg:w-9/12 w-11/12 flex items-center justify-between py-2 '>
                <img src={Logo} alt='logo' className='logoImage' width={90}/>
                <ul className='lg:flex hidden items-center justify-between gap-5 '>
                    <li className='listItem text-sm' ><a className='mx-4 px-2' href='/'>HOME</a></li>
                    <li className='listItem text-sm' ><a className=' mx-4 px-2' href='/portfolio'>PORTFOLIO</a></li>
                    <li className='listItem text-sm' ><a className=' mx-4 px-2' href='/contact'>CONTACT</a></li>
                </ul>
                <div className='mobileBtn lg:hidden flex' onClick={()=>setMenuClick(prev=>!prev)}>
                    {
                        menuClick? <i className='bx bx-x bx_menu text-4xl'></i>:<i className='bx bx-menu-alt-right bx_menu text-4xl'></i>
                    }
                </div>
            </nav>
            
            {
                menuClick?<ul className='block items-center text-center w-full justify-between gap-5 mobileUl '>
                <li className='listItem border-b' ><a className='my-4 py-2' href='/'>Home</a></li>
                <li className='listItem border-b' ><a className='my-4 py-2' href='/portfolio'>Portfolio</a></li>
                <li className='listItem' ><a className='my-4 py-2' href='/contact'>Contact</a></li>
            </ul>:null
            }
        </header>
    )
}

export default Navigation