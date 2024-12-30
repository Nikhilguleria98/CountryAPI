import React from 'react'
import countryData from '../api/countryData.json'

const About = () => {
  return (
    <>

<div className='flex justify-center'>
<ul className=' md:w-9/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 p-10'>
{
countryData.map((data)=>{
  return(
    <li key={data.id} className='max-w-96  rounded-xl p-4 space-y-2 bg-gradient-to-r from-zinc-900 to-black'>
      <h1 className='text-xl font-bold'>{data.countryName}</h1>
      <p ><span className='font-bold'>Capital:</span> {data.capital}</p>
      <p><span className='font-bold'>Population:</span> {data.population}</p>
      <p className='text-sm'><span className='font-bold'>Intersting facts:</span> {data.interestingFacts}</p>

    </li>
  )
})
    }
</ul>
</div>
      
    </>
  )
}

export default About
