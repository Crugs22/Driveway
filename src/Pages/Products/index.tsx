import React, { HTMLAttributes, InputHTMLAttributes, useState } from "react";
import {  Body, FilterContainer, InfoRentNow, MainContainer, ProductsContainer, MobileNavToggle, TextAllCars, MobileNav } from "./styles";
import { CurrencyDollar, Funnel, List, X } from "@phosphor-icons/react";
import { ButtonMenuToggle, DesktopBar, HeaderContainer, NavItem } from "../Home/styles";
import { NavLink } from "react-router-dom";
import { TextInput }   from '../../components/TextInput'

type Props = HTMLAttributes<HTMLDivElement> & {
    optional?:boolean
    containerProps?:HTMLAttributes<HTMLDivElement>
}


export function Products(){
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    
    return(
        <Body>
         <HeaderContainer>
         <DesktopBar>
                <h1>Driveway</h1>
                   <ul> 
                        <NavItem><NavLink to={'/'} title="Home">Home</NavLink></NavItem>
                        <NavItem><NavLink to={'/products'}>Cars</NavLink></NavItem>
                        <NavItem><a href="">About</a></NavItem>
                    </ul>
                    <div id="userContainer">
                        <NavLink to={'/user/login'}>Sign in</NavLink>
                        <NavLink to={'/user/register'} id="register">Sign up</NavLink>
                    </div>
                </DesktopBar>
                <MobileNav style={{ display: isMobileNavOpen ? 'flex' : 'none' }}>
                    <NavItem><NavLink to={'/'}>Home</NavLink></NavItem>
                    <NavItem><NavLink to={'/products'}>Products</NavLink></NavItem>
                    <NavItem><a href="/">About</a></NavItem>
                </MobileNav>

                <ButtonMenuToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
                        {isMobileNavOpen ? <X size={24}/> :  <List size={24}/> }
                    </ButtonMenuToggle>
            </HeaderContainer>
        <MainContainer>
            <div>
                <TextAllCars>
                    <h1>All Cars</h1>
                </TextAllCars>
                <section>
                    <FilterContainer
                    id="Filter">
                        <h5>Filter by Type</h5>
                        <ul>
                            <li><input type="checkbox" /><span>Sedan</span></li>
                            <li><input type="checkbox" /><span>Suv</span></li>
                            <li><input type="checkbox" /><span>Sports Car</span></li>
                            <li><input type="checkbox" /><span>Van</span></li>
                        </ul>

                        <div>
                            <h2>Price Range</h2>
                            <form action="">
                                <TextInput type="number" placeholder="Min Price" />
                                <TextInput type="number" placeholder="Max Price" />
                                <button><Funnel/> Apply Filter</button>
                            </form>
                                
                        </div>
                    </FilterContainer>

                    <div>
                        <ProductsContainer
                        id="Products">
                <div>
                    <img src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=295&h=750&dpr=1" alt="" />
                    <InfoRentNow>
                            <h1>Car Model 1</h1>
                            <p>Comfortable and efficient for city driving</p>
                                <div id="Price">
                                    <CurrencyDollar size={20}/><span>55</span>
                                    <span>/</span>
                                    <span>day</span>
                                </div>
                            <div>
                                <NavLink to={'/payment'}>Rent Now</NavLink>
                            </div>
                        </InfoRentNow>
                 </div>
                 <div>
                    <img src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=295&h=750&dpr=1" alt="" />
                    <InfoRentNow>
                            <h1>Car Model 2</h1>
                            <p>Comfortable and efficient for city driving</p>
                            <div id="Price">
                                <CurrencyDollar size={20}/><span>119</span>
                                <span>/</span>
                                <span>day</span>
                            </div>
                            <div>
                                <NavLink to={'/payment'}>Rent Now</NavLink>
                            </div>
                        </InfoRentNow>
                    </div>
            <div>
                    <img src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=295&h=750&dpr=1" alt="" />
                    <InfoRentNow>
                            <h1>Car Model 6</h1>
                            <p>Comfortable and efficient for city driving</p>
                            <div id="Price">
                                <CurrencyDollar size={20}/><span>100</span>
                                <span>/</span>
                                <span>day</span>
                            </div>
                            <div>
                                <NavLink to={'/payment'}>Rent Now</NavLink>
                            </div>
                        </InfoRentNow>
                </div>
            <div>
                    <img src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=295&h=750&dpr=1" alt="" />
                    <InfoRentNow>
                            <h1>Car Model 6</h1>
                            <p>Comfortable and efficient for city driving</p>
                            <div id="Price">
                                <CurrencyDollar size={20}/><span>118</span>
                                <span>/</span>
                                <span>day</span>
                            </div>
                            <div>
                                <NavLink to={'/payment'}>Rent Now</NavLink>
                            </div>
                        </InfoRentNow>
                </div>
            <div>
                    <img src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=295&h=750&dpr=1" alt="" />
                    <InfoRentNow>
                            <h1>Car Model 6</h1>
                            <p>Comfortable and efficient for city driving</p>
                            <div id="Price">
                                <CurrencyDollar size={20}/><span>90</span>
                                <span>/</span>
                                <span>day</span>
                            </div>
                            <div>
                                <NavLink to={'/payment'}>Rent Now</NavLink>
                            </div>
                        </InfoRentNow>
                </div>
            <div>
                <img src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=295&h=750&dpr=1" alt="" />
                    <InfoRentNow>
                        <h1>Car Model 6</h1>
                        <p>Comfortable and efficient for city driving</p>
                        <div id="Price">
                                <CurrencyDollar weight={"bold"} size={20}/><span>210</span>
                                <span>/</span>
                                <span>day</span>
                            </div>
                        <div>
                            <NavLink to={'/payment'}>Rent Now</NavLink>
                        </div>
                    </InfoRentNow>
                </div>
                        </ProductsContainer>
                    </div>
                </section>
            </div>
        </MainContainer>
    </Body>
    )
}