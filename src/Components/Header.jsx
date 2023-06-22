import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx"
import { RxCross1 } from "react-icons/rx";


const Header = () => {
    const links = [
        {
            id: 1,
            path: '/',
            text: 'Home'
        },
        {
            id: 2,
            path: '/about',
            text: 'About'
        },
        
        {
            id: 3,
            path: '/menu',
            text: 'Menu'
        }
        ,
        {
            id:4,
            path: "/gallery",
            text:'Gallery'
        }
    ]

    const [nav_mb, setNav] = useState(false);

    return (
        <>
            <nav className='flex justify-between  bg-indigo-400 px-5 py-2   text-white '>


                <h1 className='text-3xl'>Deepika Restaurant</h1>

                {
                    nav_mb ?
                        <RxCross1 size={35} className='sm:hidden' onClick={() => {
                            setNav(!nav_mb);
                        }} /> :
                        < RxHamburgerMenu size={35} className='sm:hidden' onClick={() => {
                            setNav(!nav_mb);
                        }} />



                }



                <ul className='sm:flex hidden  text-xl  items-center  space-x-10     '>

                    {
                        links.map(link => (
                            <li key={link.id}>
                                <Link className=' hover:text-gray-200 ' to={link.path}>{link.text}</Link>
                            </li>
                        ))
                    }
                </ul>


            
            </nav >

            {nav_mb && (

                <div className='h-full w-full absolute     text-white  sm:hidden  z-10 p-2 '>
                    <div className='flex flex-col items-center  bg-indigo-300 pb-10 rounded-xl ' >

                        <ul className='flex flex-col p-10'>
                            {
                                links.map(link => (
                                    <li key={link.id} className='pt-5 text-center'>
                                        <Link className='text-2xl focus:text-red-700 focus:bg-indigo-500 hover:bg-indigo-400 ' to={link.path}>{link.text}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>)

            }







        </>
    )
}

export default Header





