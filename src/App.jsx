import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homepage";
import Services from "./pages/services";
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

    </Routes>
  );
}