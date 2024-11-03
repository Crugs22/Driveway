import { Outlet } from 'react-router-dom'
import { Home } from '../../Pages/Home/Home'
import { LayoutContainer } from './styles'
import React from 'react'


export function DefaultLayout(){
    return(
        <LayoutContainer>
            <Home/>
            <Outlet/>
        </LayoutContainer>
    )

}