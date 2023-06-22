import React from 'react'
import Section from './Section';
import Category from './Category';

import dish5 from "../Assets/nonveg1.jpg";
import dish6 from "../Assets/nonveg2.jpg";
import dish7 from "../Assets/nonveg3.avif";
import dish8 from "../Assets/nonveg4.avif";

const NonVeg = () => {

  const dishes = [

    {
      id: 5,
      name: 'Chicken',
      src: dish5
    },
    {
      id: 6,
      name: 'Mutton',
      src: dish6
    },
    {
      id: 7,
      name: 'Anda Curry',
      src: dish8
    },
    {
      id: 8,
      name: 'Fish Curry',
      src: dish7
    },
  ]
  return (<>
    <Section name="Menu" />
    <Category />

    <section>
      <div>
        <div className=' p-10   '>


          <div>
            <div className='flex flex-col sm:flex-row justify-between   '>
              {
                dishes.map(({ id, src, name, desc }) => {
                  return (<>
                    <div key={id} className='bg-white rounded  sm:w-1/4 shadow-2xl m-3 '>
                      <img src={src} alt="dishimg" className='rounded-t-sm ' />
                      <div className='p-4'>
                        <h1 className='mb-2'>{name}</h1>
                        
                      </div>

                    </div>
                  </>)
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default NonVeg
