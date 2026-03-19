import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Phonics from "./pages/Phonics";
import Grammar from "./pages/Grammar";
import CreativeWriting from "./pages/CreativeWriting";
import Handwriting from "./pages/Handwriting";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/phonics" element={<Phonics />} />
        <Route path="/grammar" element={<Grammar />} />
        <Route path="/creative-writing" element={<CreativeWriting />} />
        <Route path="/handwriting" element={<Handwriting />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
