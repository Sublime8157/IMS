// App.js
import React from "react";
import Nav from "./views/components/nav";
import Dashboard from "./views/dashboard";
import Order from "./views/orders";
import Inventory from "./views/inventory"; 
import Report from "./views/report";
import Setting from "./views/setting";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<Nav><Dashboard /></Nav>} />
                <Route path="/orders" element={<Nav><Order /></Nav>} />
                <Route path="/inventory" element={<Nav><Inventory /></Nav>} />
                <Route path="/report" element={<Nav><Report /></Nav>} />
                <Route path="/settings" element={<Nav><Setting /></Nav>} />
            </Routes>
        </Router>
    );
}

export default App;