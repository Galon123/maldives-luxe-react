import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { path } from "framer-motion/client"
import { useEffect, useState } from "react"
import { Loader } from "./components/common/Loader"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
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