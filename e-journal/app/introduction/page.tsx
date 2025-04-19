import React from 'react'

export default function introduction() {
  return (
    <div
      className=''
    >

      <h1 className='text-2xl font-bold mb-10'>Introduction</h1>
      <div className=''>
        <h2 className='font-semibold'>Overview</h2>
        <div className='flex flex-col space-y-4'>
          <p className='font-normal'>
            Welcome to my e-journal for the ELEC014 Educational / Industry Tour — an exciting, immersive learning experience designed for students enrolled in ELEC014 at University of the Immaculate Conception!
          </p>
          <p className='font-normal'>
            This year’s tour took place last April 18 - 21, 2025, covering key locations such as Cebu IT Park, Alliance Software. The tour provides students the opportunity to explore the inner workings of leading companies and institutions in the fields of electronics, electrical systems, automation, and manufacturing technologies.
          </p>
        </div>

        <h2 className='font-semibold mt-10'>Purpose</h2>
        <p>
          <ul className='list-disc list-inside'>
            <li>
              Bridge classroom theories with real-world applications.
            </li>
            <li>
              Expose students to current technologies and industry practices.
            </li>
            <li>
              Provide insights into future career opportunities and trends in the electronics and electrical engineering sectors.
            </li>
            <li>
              Foster professional development and networking opportunities.
            </li>
          </ul>
        </p>
      </div>

    </div>
  )
}
