import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Flags, { loader as flagPageLoader } from "./pages/Flags";
import FlagsDetails, {loader as flagsDetailsPageLoader} from "./pages/FlagsDetails";
import PageNotFound from "./pages/PageNotFound";
import ErrorElement from "./pages/ErrorElement";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route
        path="flags"
        element={<Flags />}
        loader={flagPageLoader}
        errorElement={<ErrorElement />}
      />
      <Route
        path="flags/:id"
        element={<FlagsDetails loader={flagsDetailsPageLoader} />}
        errorElement={<ErrorElement />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return ( 
    <RouterProvider router={router} />
  );
}

export default App;
