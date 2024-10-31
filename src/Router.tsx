import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Payment } from './Pages/Payment'
import { Products } from './Pages/Products'


export function Router(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/products" element={<Products/>}/>
        </Routes>
    )
} 