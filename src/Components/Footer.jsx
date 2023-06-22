import React from 'react'
import insta from '../Assets/instalogo.png';
import whatsapp from '../Assets/Whatsapp.webp';


const Footer = () => {
    return (<>

        <footer className='mt-40'>

            <div className='flex flex-col bg-red-700 justify-center sm:justify-between p-5'>
                <h1 className='image-container px-3 text-3xl sm:text-5xl  text-white'>Contact Us </h1>
                <div className=' sm:flex'>

                    <div className=' flex items-center p-3'>
                        <img src={insta} alt="" className='h-7 w-7 sm:h-10  sm:w-10 rounded-full' />
                        <a href="https://www.instagram.com/deepika_restaurant/" target='_blank ' rel="noreferrer" >
                            <p className=' text-sm sm:text-2xl mx-2 text-white font-semibold' >@deepika_restaurant</p>
                        </a>
                    </div>

                    <div className=' flex items-center p-3'>
                        <img src={whatsapp} alt="" className='h-7 w-7 sm:h-10  sm:w-10 rounded-xl' />
                        <a href="https://api.whatsapp.com/send/?phone=%2B919753315419&text=Hi%2C+I+visited+your+website&type=phone_number&app_absent=0" target='_blank' rel="noreferrer">
                            <p className=' text-sm sm:text-2xl mx-2 text-white font-semibold' >+919753315419</p>
                        </a>
                    </div>




                </div>


                < p className='text-sm sm:text-2xl mx-2 text-white font-semibold px-2 pt-4'>© 2022-23 Deepika Restaurant | All Rights Reserved </p>
            </div>
        </footer>
    </>
    )
}

export default Footer