import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { About, Contact, Home, Projects } from './pages';
import Navbar from './components/Navbar';

const App = () => {
  return(
    <main className="bg-slate-300/20">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/portfolio/" element={<Home />} />
                <Route path="/portfolio/about" element={<About />} />
                <Route path='/portfolio/projects' element={<Projects />} />
                <Route path="/portfolio/contact" element={<Contact />} />
            </Routes>
        </Router>
    </main>
  )
}

export default App