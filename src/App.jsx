// import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AudioPlayer from './components/skybox/AudioPlayer';

function App() {
  return (
    <Router>
      {/* <AudioPlayer src="Dune.mp3" autoplay={true} /> */}

      <div>
        {/* Links pour la navigation */}
        {/* <Navbar/> */}
        <nav >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* Routes pour les différents composants de page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
