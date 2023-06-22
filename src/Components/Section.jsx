import React from 'react'

const Section = (props) => {
    return (
        <section>
            <div className="bg-[url('../Assets/background.jpg')] bg-no-repeat bg-center bg-cover">

                <div className='flex justify-around items-center p-24 font-mono font-semibold sm:p-40  text-white text-4xl sm:text-6xl '>
                  {props.name}
                </div>

            </div>
        </section>
    )
}

export default Section