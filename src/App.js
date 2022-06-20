import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Cart from './pages/Cart';
 
 const App =()=>{
   return (
    <>
        <Router>
            <Navigation/>

            <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/products" element={<Products/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            {/* <Route exact path="/about" element={<About/>}/> */}
             
            </Routes>
        </Router>
        
    </>
    )
 }

 export default App;