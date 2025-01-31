import { Routes, Route } from "react-router-dom";
import { useRef } from "react";
import Header from "../../components/Header/Header";
import Home from "../Home/Home";
import Gallery from "../Gallery/Gallery";
import Flavors from "../Flavors/Flavors";
import Order from "../Order/Order";
import Contact from "../Contact/Contact";
import Resources from "../Resources/Resources";
import Footer from "../../components/Footer/Footer";
import './App.css';

export default function App() {
  const footerRef = useRef(null);

  return (
    <main className="flex flex-col min-h-screen">
      <Header footerRef={footerRef} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/flavors" element={<Flavors />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer footerRef={footerRef} />
    </main>
  );
}
