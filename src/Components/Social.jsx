import React from 'react';
import insta  from "../Assets/instalogo.png";

const Social = () => {
    return (

        <section>
            <div className='p-3'>
                <h1 className="text-center text-red-700 text-2xl sm:text-4xl  font-bold ">Follows us on Instagram</h1>
                <div className='flex justify-center  p-3'>
                    <div className='flex  flex-col items-center  '>

                        <img src={insta} alt="" className=" w-12 sm:w-1/4   cursor-pointer" />
                        <a href="https://www.instagram.com/deepika_restaurant/" target='_blank'  rel="noreferrer" className='mt-0 sm:text-3xl text-red-700 font-bold hover:text-red-600 hover:bg-gray-100  '>
                            <p>@deepika_restaurant</p>
                        </a>

                    </div>
                </div>
            </div>
        </section >


    )
}

export default Social