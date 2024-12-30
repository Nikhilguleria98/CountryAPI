import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

const error = useRouteError()
console.log(error);

  return (
    <div className='flex flex-col items-center justify-center h-lvh'>
        <h1 className='text-2xl font-bold'>Oops ! An error occured</h1>
        {error && <p className='text-center' >{error.data}</p> }
        <img src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.gif" alt=""  className='w-96 sm:w-[550px]'/>
      
      <NavLink to ="/"><button className='p-2 bg-transparent border mt-5 rounded-lg text-white' >Go Back</button></NavLink>
    </div>
  )
}

export default ErrorPage
