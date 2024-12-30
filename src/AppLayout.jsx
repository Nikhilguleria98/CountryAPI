import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './UI/Header'
import Footer from './UI/Footer'

const AppLayout = () => {
  return (
    <>
    <div className='flex flex-col min-h-screen justify-between'>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
      
    </>
  )
}

export default AppLayout
