
import './App.css'
import Navbar from './components/header/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './Pages/Services'
import Footer from './components/footer/Footer'
import Products from './Pages/Products'
import Carts from './Pages/Carts'
import Favourite from './Pages/Favourite'
import SignIn from './Pages/SignIn'
import Feedback from './Pages/Feedback'
 
import ProductDetail from './Pages/ProductDetail'
import Home from './Pages/Home'

import Aboutus from './Pages/Aboutus'

import Login from './Pages/Login'

function App() {
 

  return (
    <>

      

      <BrowserRouter>
        <Navbar />

        <Routes>
feature/home
          <Route path='/' element={<Home/>} />  
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products/>} />

      {/* <Route path='/' element={<Home/>} />  */}
                   
          <Route path='/services' element={<Services />} />
 feature/Products
         <Route path='/products' element={<Products/>} />
         <Route path='/aboutus' element={<Aboutus/>} />

     main
 main
          <Route path='/cart' element={<Carts/>} />
          <Route path='/favourite' element= {<Favourite/>}/>
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/feedback' element={<Feedback/>} /> 
          <Route path='/productDetail/:id' element = {<ProductDetail/>}  />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </>
  )
}

export default App
