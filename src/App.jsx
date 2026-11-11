import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmoothScrollProvider from './components/SmoothScrollProvider';

import Home from './pages/Home';
import Activities from './pages/Activities';
import KhandeshHouse from './pages/KhandeshHouse';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Donate from './pages/Donate';

export default function App() {
  return (
    <Router>
      <SmoothScrollProvider>
        <div className="min-h-screen flex flex-col bg-ivory text-navy-900 font-sans selection:bg-coral-500 selection:text-white overflow-x-hidden">
          <Navbar />
          <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/activities/khandesh-house" element={<KhandeshHouse />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </SmoothScrollProvider>
    </Router>
  );
}
