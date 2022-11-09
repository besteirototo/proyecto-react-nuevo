import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import CustomProvider from './context/customContext';
import './App.css';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <CustomProvider>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<ItemListContainer />} />
                        <Route path='/category/:id' element={<ItemListContainer />} />
                        <Route path='/item/:id' element={<ItemDetailContainer />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='*' element={<ItemListContainer />} />
                    </Routes>
                    <Footer />
                </CustomProvider>
            </BrowserRouter>
        </>
    );
};

export default App;
