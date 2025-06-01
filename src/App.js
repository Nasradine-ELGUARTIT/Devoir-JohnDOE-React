import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles/style.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Services from "./views/services";
import Mentions from "./views/mentions";
import Portfolio from "./views/portfolio";
import Contact from "./views/contact";
import Home from "./views/home";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
