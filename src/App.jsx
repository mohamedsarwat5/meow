import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Faq from './components/FAQ/FAQ'
import Reviews from './components/Reviews/Reviews'
import Features from './components/Features/Features'


export default function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/faq', element: <Faq /> },
        { path: '/reviews', element: <Reviews /> },
        { path: '/features', element: <Features /> }

      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
