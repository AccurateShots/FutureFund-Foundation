import { useEffect } from "react";
import "./App.css";
import "./styles/highlights.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Programs } from "./pages/Programs";
import { Chapters } from "./pages/Chapters";
import { Competition } from "./pages/Competition";
import { Leadership } from "./pages/Leadership";
import { GetInvolved } from "./pages/GetInvolved";
import { Contact } from "./pages/Contact";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/chapters" element={<Chapters />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
