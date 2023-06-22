import React from 'react'
import Social from './Social';
import Section from '../Components/Section';
import img from "../Assets/profile.png"
const About = () => {
  return (<>

   <Section  name="About"/>

    <section className ="my-10">

      <div className=' flex justify-around   sm:h-96 p-2'>
        <div className='   sm:flex  justify-around items-center sm:p-10'>

          <img src={img} alt="" className=' px-  rounded-full sm:w-52 sm:h-44' />

          <div className='p-2   sm:p-10  text-xs sm:text-xl bg-gray-100'>

            <p className='m-2 text-red-700'>
              About Deepika Restaurant
            </p>

            <h1 className='m-2 text-gray-600 font-semibold text-3xl'>
              Our Commitment
            </h1>

            <p className='m-2 text-gray-500 text-sm'>
              “We believe in creating an unmatched experience by maintaining the highest standard of quality, hygiene, service and customer satisfaction.”
              “In a world that is increasingly coming closer, we seek to promote the harmony of Indian culture, cuisine and architecture. As a fast-growing Indian company in various countries, it is our commitment to live up to our nation’s promise to give the best to the world. We strive to set benchmarks in various aspects of our businesses in Food, Hospitality, Hoteliering and Real Estate.”
            </p>

          </div>
        </div>
      </div>
    </section>


    <section className ="my-10">
      <div className='flex  flex-col p-2  text-xs text-center'>
        <h1 className='text-red-700 m-2 text-3xl font-bold'>
          Who we are
        </h1>
        <p className='m-2 text-gray-500 text-sm'>
          Saffron was started in the year 2001 by the Sankalp Group of Restaurants. Named after the world’s most precious spice, Saffron serves freshest ingredients with the finest taste. Our chefs fuse together flavor and aroma to capture the essence of the traditional North Indian cuisine.
          Saffron has become synonymous with Authentic Vegetarian Barbecue & North Indian Cuisine. The Saffron chain epitomizes the royal experience in flavour, aroma and purity. It was first of its kind as it introduced the unique ” do it yourself ” concept in dining. Saffron’s dining experience comes complete with a grill at the centre of the table and variety of starters skewered and ready for the guests to marinate according to taste and then grill or roast to perfection. This customized dining has been getting a stupendous response from connoisseurs of good food. In fact Saffron has established a stellar customer base that speaks of its popularity.
        </p>
      </div>
    </section>

    <section className ="my-10">
      <Social />

    </section>




  </>
  )
}

export default About