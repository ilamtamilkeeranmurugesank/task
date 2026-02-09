import './App.css';

import Navbar from './components/Navbar';
import Stornaway from './components/Stornaway';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';

function App() {
  return (
    <>

    <Navbar />
    <Routes>
    <Route path='/Stornaway' element={<Stornaway/>}></Route>
 
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Projects' element={<Projects/>}></Route>
      <Route path='/Services' element={<Services/>}></Route>
    </Routes>
    
    <Footer/>
    
    
    
    </>
  );
}

export default App;
