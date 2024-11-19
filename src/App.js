import './App.css';
import Navigation from './Section/Nav';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/HomePage';
import Footer from './Section/Footer';

const  App = () => {
   return (
    <div className="">
      <div>
        <BrowserRouter>
        <div style={{minHeight:'100vh'}} className='d-flex flex-column justify-content-between'>
            <Navigation/>
            <div>
              <Routes>
                <Route path='/pharmarcyapp/'  element={<Home/>}/>
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