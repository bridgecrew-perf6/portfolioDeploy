import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
// import About from './components/About'
//import Portfolio from './components/Portfolio'
import Showcases from './components/Showcases'
import Updates from './components/Updates'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home />. */}
      <Home />
      <Showcases />
      <Updates />
      <Footer />
    </div>
  );
}

export default App;
