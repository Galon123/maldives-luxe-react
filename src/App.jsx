import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./features/pages/Home"
import { path } from "framer-motion/client"
import { useEffect, useState } from "react"
import { Loader } from "./components/common/Loader"
import { RootLayout } from "./components/layout/RootLayout"
import { Contact } from "./features/pages/Contact"
import { About } from "./features/pages/About/About"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact/>
      }
    ]
  }
])


export default function App() {

    const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    
    const handleLoad= () => {
      setTimeout(() => setIsLoading(false), 1000)
    }

    if(document.readyState === 'complete')
      {handleLoad();}
    else{
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad)
    }

  }, [])

  if(isLoading)
  { return <Loader/> }
  return <RouterProvider router={router}/>;

}