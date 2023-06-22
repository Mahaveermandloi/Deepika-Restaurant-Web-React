import React from 'react'
import { Link } from "react-router-dom";

const Category = () => {
    const type = [
        {
            id: 1,
            path: '/menu/allitems',
            text: 'All Items'
        },
        {
            id: 2,
            path: '/menu/veg',
            text: 'Veg'
        },
        {
            id: 3,
            path: '/menu/nonveg',
            text: 'Non Veg'
        }
    ]
    return (
        <div>
            <section>
                <h1 className='text-center mt-10 text-4xl text-red-700 font-semibold'> Categories</h1>
                <div className=' p-5    mt-10 '>
                    <div>
                        <ul className='flex justify-evenly ' >
                            {
                                type.map(({ id, path, text }) => {
                                    return <>

                                        <button key={id} className='bg-red-700 p-1 sm:p-2 rounded' >
                                            <Link to={path} className='sm:text-2xl font-semibold text-white font-mono ' >
                                                {text}
                                            </Link>
                                        </button>

                                    </>
                                })
                            }
                        </ul>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default Category