import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/1.Home/Home";
import About from "./pages/2.About/About";
import Contact from "./pages/3.Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/TruCare-Dental" element={<Home />} />
        <Route path="/TruCare-Dental/About" element={<About />} />
        <Route path="/TruCare-Dental/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter >
  );
}

export default App;
