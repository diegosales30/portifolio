import { Route, Routes } from "react-router-dom";
import AboutMe from "../Pages/AboutMe";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import LandingPage from "../Pages/LandingPage";
import Tecnologies from "../Pages/Tecnologies";

const Routers = () => {
  return (
    <Routes>
      <Route exct path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/tecnologies" element={<Tecnologies />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
export default Routers;
