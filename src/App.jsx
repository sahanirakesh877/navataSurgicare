import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Endovision from "./pages/Endovision";
import Dental from "./pages/Dental";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/endo" element={<Endovision />} />
        <Route path="/dental" element={<Dental />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
