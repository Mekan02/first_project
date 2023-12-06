import React from 'react'
import Header from './Components/Header/Header'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import MainPage from './Components/Main/MainPage';
import DrugsMain from './Components/Drugs/DrugsMain';
import Favourites from './Components/Favourites/Favourites';
import Contact from './Components/ContactUs/Contact';
import AboutUs from './Components/AboutUs/AboutUs';
import SignUp from './Components/SignUp/SignUp';
import Product from './Components/Common/Product/Product';
import Login from './Components/SignUp/Login';


function App() {

  return (
    <BrowserRouter>
      <div className="flex-col">
        <Header />
        {/* <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/products' element={<DrugsMain />} />
          <Route path='/favourite' element={<Favourites />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/log-in' element={ <Login /> } />
          
          <Route path='/products/:id' element={<Product />} />

          <Route path="*" element={<h3>Error..</h3>} />
        </Routes>
        <Footer /> */}
      </div>
    </BrowserRouter>
  )
}

export default App



// '/favourite'
// '/contact'
// '/aboutUs'