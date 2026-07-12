import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homepage";
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
    </Routes>
  );
}