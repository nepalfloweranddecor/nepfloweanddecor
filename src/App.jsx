import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homepage";
import Services from "./pages/services";
import Contact from "./pages/contact"
import Desgins from "./pages/Designs";
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
      path="/services"
      element={
        <>
        {<Services/>}
        </>
      }
      />

      <Route
      path="/designs"
      element={
        <>
        {<Desgins/>}
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