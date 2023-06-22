import React from 'react';
import Social from './Social';
import { Link } from 'react-router-dom';
// import food from "../Assets/food-background.avif";
import menu from '../Assets/breakfast1.jpg';
import biryani from "../Assets/biryani.jpg";
import dish1 from "../Assets/chicken.jpg";
import dish2 from '../Assets/biryani.jpg'
import dish3 from '../Assets/chat.jpg';
import dish4 from '../Assets/bhidi.jpg';
// import insta from '../Assets/instalogo.png';
// import Footer from './Footer';
import Section from '../Components/Section';
import Menupdf from "../Assets/Menu .pdf";



const Home = () => {
  const dishes = [
    {
      id: 1,
      name: 'Kaju Kari',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis maiores quidem iure laborum nobis quas quod necessitatibus iusto quia corporis!',

      src: dish1
    },
    {
      id: 2,
      name: 'Biryani',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis maiores quidem iure laborum nobis quas quod necessitatibus iusto quia corporis!',
      src: dish2
    },
    {
      id: 3,
      name: 'Bhindi',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis maiores quidem iure laborum nobis quas quod necessitatibus iusto quia corporis!',
      src: dish4
    },

    {
      id: 4,
      name: 'Chat',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis maiores quidem iure laborum nobis quas quod necessitatibus iusto quia corporis!',

      src: dish3
    },
  ]

  return (
    <>
      <Section name="Deepika Restaurant" />

      <section>
        <div>
          <div className='p-10 bg-violet-600'>
            <h1 className='text-3xl'>Something More</h1>
            <p className='text-black text-xl py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reprehenderit, laborum quam maiores neque corrupti velit alias ex nisi reiciendis fuga, voluptates tempore tenetur perferendis, numquam a! Aliquid, adipisci aliquam.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aut numquam quibusdam mollitia excepturi ullam corporis illum aliquam labore porro.</p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className='h-full bg-yellow-400 text-center pt-4 p-7'>

            <div className=' xl:flex  '>
              <img src={biryani} alt="" className='p-2 ' />
              <img src={menu} alt="" className=' p-2 ' />
            </div>
            <h1 className='text-4xl mb-5 m-10 menu'>Menu</h1>
            <div className=' '>

              <button className='bg-gray-100 p-3 m-5 text-xl font-mono rounded-md'>
                <Link to="/menu" >
                  View Menu
                </Link>
              </button>

              <button className='bg-gray-100 p-3  m-5 text-xl font-mono rounded-md'  >

                <a href={Menupdf} target='_blank' rel="noreferrer">
                  Download Menu
                </a>
              </button>

            </div>
          </div>
        </div>
      </section>


      <section>
        <div>
          <div className=' p-10   '>

            <h1 className='text-3xl text-center font-bold text-red-700 '>
              Our Favourite
            </h1>
            <p className='text-center p-5 text-red-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis unde . Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, accusantium!</p>

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

      <Social />



    </>
  );
}

export default Home;
