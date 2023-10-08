import React from 'react'
import { createBrowserRouter, RouterProvider, Route, BrowserRouter, Outlet } from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Footer from './components/Footer'
import Single from './Pages/Single'
import Write from './Pages/Write'

const Layout = () => {
    return (
        <>
          <Navbar/>
          <Outlet/>
          <Footer/>
        </>
    )
}


const router = createBrowserRouter(
  [{
      path: `/`,
      element: <Layout/>,
      children: [
        {
            path: `/`,
            element: <Home/>
        },
        {
            path: `/post/:id`,
            element: <Single/>
        },
        {
            path: `/write`,
            element: <Write/>
        }
      ]
  },
  {
      path: `/register`,
      element: <Register/>
  },
  {
      path: `/login`,
      element: <Login/>
  }]
)

function App() {
  return (
    <section className='main'>
        <div className="container">
          <RouterProvider router={router} />
        </div>
    </section>
  )
}

export default App
