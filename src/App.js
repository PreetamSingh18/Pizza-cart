import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import ProductsPage from './pages/ProductsPage';
import { CartContext } from './CartContext';
import { useEffect, useState } from 'react'; 
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
// import { CartContext } from './CartContext';
import { getCart , storeCart } from './helpers';

const App = () => {
    const [cart, setCart] = useState({});
    useEffect(() => {
        getCart().then(cart =>{
            setCart(JSON.parse(cart));
        });

    }, []);

    useEffect(() => {
        storeCart(JSON.stringify(cart));

    }, [cart]);






    return (
        <>
            <Router>
                <CartContext.Provider value={{ cart, setCart }}>
                    <Navigation />

                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/products" element={<ProductsPage />} />
                        <Route exact path="/products/:_id" element={<SingleProduct />} />
                        <Route exact path="/cart" element={<Cart />} />
                        {/* <Route exact path="/about" element={<About/>}/> */}

                    </Routes>
                </CartContext.Provider>

            </Router>

        </>
    )
}

export default App;