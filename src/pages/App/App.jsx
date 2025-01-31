import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Home from "../Home/Home";
import Footer from "../../components/Footer/Footer";
import './App.css';

export default function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </main>
  );
}
