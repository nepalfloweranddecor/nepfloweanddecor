import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homepage";
import Contact from "./pages/contact"
import Gallery from "./pages/Gallery"
export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            {<Home/>}
          </>
        }
      />
      <Route
      path="/gallery"
      element={
        <>
        {<Gallery/>}
        </>
      }
      />

      <Route
      path="/contact"
      element={
        <>
        {<Contact/>}
        </>
      }
      />

    </Routes>
  );
}