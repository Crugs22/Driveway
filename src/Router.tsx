import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Payment } from './Pages/Payment'
import { Products } from './Pages/Products'
import { Location } from './Pages/Locations'
import { Login } from './Pages/Users/Login'


export function Router(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/products" element={<Products />} />
            <Route path="/location" element={<Location />} />
            <Route path="/user/Login" element={<Login />} />
        </Routes>
    )
} 