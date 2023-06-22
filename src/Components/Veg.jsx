import React from 'react'
import Section from './Section';
import Category from './Category';
import dish1 from "../Assets/veg4.jpg"
import dish2 from "../Assets/veg3.avif";
import dish3 from "../Assets/veg1.avif"
import dish4 from "../Assets/veg2.avif";

const Veg = () => {
  const dishes = [
    {
      id: 1,
      name: 'Kaju Kari',
      src: dish1
  },
  {
      id: 2,
      name: 'Sev Tamatar',
      src: dish2
  },
  {
      id: 3,
      name: 'Paneer',
      src: dish3
  },

  {
      id: 4,
      name: 'Daal',
      src: dish4
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
                        <p>{desc}</p>
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

export default Veg