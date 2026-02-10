import './App.css';

import Navbar from './components/Navbar';
import Stornaway from './components/Stornaway';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Careers from './components/Careers';
import Contact from './components/Contact Us';
import Health from './components/Health';
import Construction from './components/Construction';
import Cengineer from './components/Cengineer';


function App() {
  return (
    <>

    <Navbar />
    <Routes>
    <Route path='/Stornaway' element={<Stornaway/>}></Route>
 
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Projects' element={<Projects/>}></Route>
      <Route path='/Services' element={<Services/>}></Route>
      <Route path='/Careers' element={<Careers/>}></Route>
      <Route path='/Contact Us' element={<Contact Us />}></Route>
      <Route path='/Health' element={<Health/>}></Route>
      <Route path='/Construction' element={<Construction/>}></Route>
      <Route path='/Cengineer' element={<Cengineer/>}></Route>
    </Routes>
    
    <Footer/>
    
    
    
    </>
  );
}

export default App;
