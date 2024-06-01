import { createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider,
  Route 
} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Flags, {loader as flagPageLoader}from "./pages/Flags"
import FlagsDetails from "./pages/FlagsDetails"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element = {<Layout />}>
      <Route path="home" index element = {<Home />}/>
      <Route path="about" element = {<About />}/>
      <Route path="contact" element = {<Contact />}/>
      <Route path="flags" element = {<Flags />} loader= {flagPageLoader}/>
      <Route path = "/flags/:id" element ={<FlagsDetails />} />
      </Route>
  ))

  return (

  <RouterProvider router={router}/>
  )
}

export default App
