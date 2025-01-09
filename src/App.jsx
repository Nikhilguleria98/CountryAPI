import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Country from './pages/Country'
import About from './pages/About'
import Contact from './pages/Contact'
import AppLayout from './AppLayout'
import ErrorPage from './pages/ErrorPage'
import CountryDetails from './pages/CountryDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/country",
        element: <Country />
      },
      {
        path: "/country/:id",
        element: <CountryDetails />
      },
      {
        path: "/about",
        element: <About />
      },
    
    ]
  }
])

const App = () => {
  return (
    <div className=' '>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
