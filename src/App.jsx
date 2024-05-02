import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";

function App() {
    return (
        <>
            {/* project routes */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
