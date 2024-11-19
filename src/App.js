import './App.css';
import Navigation from './Section/Nav';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/HomePage';
import Footer from './Section/Footer';
import AboutUS from './Pages/AboutUS';
import Services from './Pages/services';
import Clients from './Pages/Clients';
import ContactUs from './Pages/ContactUs';

const  App = () => {
   return (
    <div className="">
      <div>
        <BrowserRouter>
            <Navigation/>
        <div style={{minHeight:'100vh'}} className='d-flex flex-column justify-content-between'>
            <div>
              <Routes>
                <Route path='/'  element={<Home/>}/>
                <Route path='/About'  element={<AboutUS/>}/>
                <Route path='/OurServices'  element={<Services/>}/>
                <Route path='/OurPartners'  element={<Clients/>}/>
                <Route path='/ContactUs'  element={<ContactUs/>}/>

              </Routes>
            </div>
            <Footer/>
        </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;