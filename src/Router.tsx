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
            <Route path="https://crugs22.github.io/Driveway/" element={<Home />} />
            <Route path="https://crugs22.github.io/Driveway/payment" element={<Payment />} />
            <Route path="https://crugs22.github.io/Driveway/products" element={<Products />} />
            <Route path="https://crugs22.github.io/Driveway/location" element={<Location />} />
            <Route path="https://crugs22.github.io/Driveway/user/Login" element={<Login />} />
        </Routes>
    )
} 