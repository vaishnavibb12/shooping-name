import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Component/Navbar'
import Product from './Pages/Products'
import Cart from './Pages/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
    <Navbar />
   

      <Routes>
        
        <Route path="/" element={<Product/>}></Route>
         <Route path="/cart" element={<Cart/>}></Route>
  
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
