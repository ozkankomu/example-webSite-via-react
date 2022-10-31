import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar.js";
import { Route, Routes } from "react-router-dom";
import Html from "./pages/Html.js";
import Css from "./pages/Css.js";
import JavaScript from "./pages/JavaScript.js";
import Services from "./pages/Services";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/javaScript" element={<JavaScript />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
