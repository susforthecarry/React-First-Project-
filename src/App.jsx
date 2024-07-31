import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import './index.css'
import Layout from './Components/Layout/Layout'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About/About'
import Port from './Components/Port/Port'
import Contact from './Components/Contact/Contact'
import Pagenotfound from './Components/Pagenotfound/Pagenotfound'

let routers = createBrowserRouter([
  {path:'' , element: <Layout/> , children:[
    {index:true,  element: <Home/>},
    {index:true, path:'home' , element: <Home/>},
    {path:'about',element: <About/>},
    {path:'port', element: <Port/>},
    {path: 'contact' ,element:<Contact/>},
    {path:'*' , element:<Pagenotfound/> }

  ]}


])


function App() {

  return <RouterProvider router={routers}>

  </RouterProvider>

  
}

export default App
