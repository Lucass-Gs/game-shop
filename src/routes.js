import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home';

const MainRoutes = () => {
    return(
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />           
        </Routes>
    )
}

export default MainRoutes;
