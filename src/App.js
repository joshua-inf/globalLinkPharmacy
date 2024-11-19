import './App.css';
import Navigation from './Section/Nav';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/HomePage';
import Footer from './Section/Footer';
import AboutUS from './Pages/AboutUS';

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