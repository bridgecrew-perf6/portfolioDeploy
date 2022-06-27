import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
// import About from './components/About'
import Portfolio from './components/Portfolio'
import Portfolio1 from './components/Portfolio1'
import Updates from './components/Updates'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Portfolio />
      <Portfolio1 />
      <Updates />
      <Footer />
    </div>
  );
}

export default App;
