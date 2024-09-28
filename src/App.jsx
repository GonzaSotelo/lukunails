import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Body from './components/body/Body.jsx';
import About from './components/body/about/About.jsx';
import Footer from './components/footer/Footer.jsx';
import Services from './components/body/services/Services.jsx';
import Contact from './components/body/contact/Contact.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
