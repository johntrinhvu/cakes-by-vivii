import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Home from "../Home/Home";
import './App.css';

export default function App() {
  const [navHeight, setNavHeight] = useState(72);

  return (
    <main>
      <Header setNavHeight={setNavHeight} />
      <Routes>
        <Route path="/" element={<Home navHeight={navHeight} />} />
      </Routes>
    </main>
  );
}
