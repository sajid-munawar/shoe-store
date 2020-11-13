import React from 'react';
import { Home, About, Products, ProductItems, NotFound } from "./Components"
import { Routes, Route, Link, } from 'react-router-dom';

function App() {
    return (
        <div>
            <h1>Welcome</h1>
            <Link to="/">Home</Link>{" | "}
            <Link to="about">About</Link>{" | "}
            <Link to="products">product</Link>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="products" element={<Products />} />
                <Route path="/Products/:id" element={<ProductItems />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </div>
    );
}
export default App;