import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

import HomeScreen from "./Components/HomeScreen";
import ProfileScreen from "./Components/ProfileScreen";
import ShopScreen from "./Components/ShopScreen";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  return (
    <BrowserRouter>


      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <NavLink className="navbar-brand" to="/">Accueil</NavLink>
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/profile">Profil</NavLink>
          <NavLink className="nav-link" to="/shop">Boutique</NavLink>
        </div>
      </nav>
      

      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <HomeScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/profile"
            element={
              <ErrorBoundary>
                <ProfileScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/shop"
            element={
              <ErrorBoundary>
                <ShopScreen />
              </ErrorBoundary>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
