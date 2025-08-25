// new-etsec/src/App.js
import React from 'react';
import Footer from './components/Footer';
// Import Outlet and ScrollRestoration (these are correctly imported here)
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Nabar'; // Note: The typo in Nabar.js still exists, but functional.

// Individual page imports are NOT needed here anymore as they are in index.js
// import Home from './pages/Home';
// import Services from './pages/Services';
// ... etc.

function App() {
  return (
    <> {/* Use a Fragment or div if you need a wrapper element */}
      <ScrollRestoration /> {/* This will now work correctly */}
      <Navbar />
      <Outlet /> {/* This is where your nested route components will render */}
      <Footer />
    </>
  );
}

export default App;