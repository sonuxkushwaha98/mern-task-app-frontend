import './App.css';
import Nav from './component/nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './component/footer';
import SignUp from './component/signUp';
import PrivateComponent from './component/privateComponent';
import Login from "./component/login";
import AddProduct from './component/add-product';
import Products from './component/ProductsList'
import UpdateProduct from './component/Update';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes >

          <Route element={<PrivateComponent />}>
            <Route path='/' element={<Products/>} />
            <Route path='/add' element={<AddProduct/>} />
            <Route path='/update/:id' element={<UpdateProduct/>} />
            <Route path='/logout' element={<h1>log-out  component</h1>} />
          </Route>

          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
