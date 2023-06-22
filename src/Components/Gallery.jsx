import React from 'react'

import dish1 from "../Assets/deepika web/1.jpg"
import dish2 from "../Assets/deepika web/2.jpg";
import dish3 from "../Assets/deepika web/3.jpg"
import dish4 from "../Assets/deepika web/4.jpg";

import dish5 from "../Assets/deepika web/5.jpg";
import dish6 from "../Assets/deepika web/6.jpg";
import dish7 from "../Assets/deepika web/7.jpg";
import dish8 from "../Assets/deepika web/9.jpg";
import dish9 from "../Assets/deepika web/10.jpg";


const Gallery = () => {
  const dishes = [

    {
      id: 1,
      src: dish1
    },
    {
      id: 2,
      src: dish2
    },
    {
      id: 3,
      src: dish3
    },

    {
      id: 4,
      src: dish4
    },
    {
      id: 5,
      src: dish5
    },
    {
      id: 6,
      src: dish6
    },
    {
      id: 7,
      src: dish7
    },
    {
      id: 8,
      src: dish8
    },
    {
      id: 9,
      src: dish9
    },

  ]

  return (
    <>
      <div>
        <section>
          <div>
            <h1 className='text-center p-10 text-4xl sm:text-7xl font-semibold text-red-700'>Gallery</h1>
            <div className='  '>
              <div>
                <div className='flex  flex-col sm:grid sm:grid-cols-3    '>
                  {
                    dishes.map(({ id, src }) => {
                      return (<>
                        <div key={id} className='flex justify-center my-3 shadow-2xl p-3 '>
                          <img src={src} alt="dishimg" className='   rounded-t-sm ' />
                        </div>
                      </>)
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default Gallery