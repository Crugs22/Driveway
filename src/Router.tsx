import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Payment } from './Pages/Payment'
import { Products } from './Pages/Products'
import { Login } from './Pages/Users/Login'
import { Register } from './Pages/Users/Register'
import { About } from './Pages/About'


export function Router(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/products" element={<Products />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/register" element={<Register />} />
            <Route path="/About" element={<About />} />
        </Routes>
    )
} 