import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar/Navbar'
import Routing from './Routing';
import Loading from './component/Loader/Loading';
import Footer from './component/Detail/Footer';
function App() {

  return (
    <>
      <Navbar />
      <div>
        <Routing />
      </div>
        <Footer />
    </>
  );
}

export default App
