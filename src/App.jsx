import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Endovision from "./pages/Endovision";
import Dental from "./pages/Dental";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import MedicalSetup from "./pages/MedicalSetup";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/endo" element={<Endovision />} />
        <Route path="/dental" element={<Dental />} />
        <Route path="/medical" element={<MedicalSetup/>} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
