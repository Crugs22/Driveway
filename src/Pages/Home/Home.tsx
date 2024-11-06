import React, { useState } from 'react'
import { CheckCircle, List, PhoneCall, X } from '@phosphor-icons/react'
import { AsideCarModel, 
        Box, 
        ButtonMenuToggle, 
        DescriptionCarsSelect, 
        DesktopBar, 
        Footer, 
        FooterTerms, 
        FormContainer, 
        HeaderContainer, 
        ImagesWrapper, 
        InformartionWhyCHooseUS, 
        NavItem, 
        SecondaryMainContainer, 
        SelectCarContainer, 
        TextTitleMain, 
        WhyChooseUs } from './styles'
import { MainContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { MobileNav, MobileNavToggle } from '../Products/styles'

export function Home() {
        const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    return (
        <Box>
            <HeaderContainer>
            <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
                {isMobileNavOpen ? 'Close' : 'Menu'}
            </MobileNavToggle>
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
                    <NavItem><a href="/">Home</a></NavItem>
                    <NavItem><a href="/">About</a></NavItem>
                    <NavItem><a href="/">Services</a></NavItem>
                    <NavItem><a href="/">Contact</a></NavItem>
                </MobileNav>
                <ButtonMenuToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
                    {isMobileNavOpen ? <X size={24}/> :  <List size={24}/> }
                </ButtonMenuToggle>
            </HeaderContainer>
                   
            <MainContainer>
                <TextTitleMain>
                    <h1>Rent Your Dream Car <br />Today</h1>
                    <p>Experience the freedom of the open road with our premium car rental service. Choose from a wibe range pf vehicles to suit your needs.</p>
                <FormContainer>
                    <select name="city" id="city" >
                    <option value="Imperatriz">Imperatriz</option>
                        <option value="São Paulo">São Paulo</option>
                        <option value="Rio de Janeiro">Rio de Janeiro</option>
                        <option value="Gramados">Gramados</option>
                    </select>
                        <button type="submit">Search city</button>
                    </FormContainer>
                </TextTitleMain>
               
                <div>
                    <img src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </div>
            </MainContainer>

            <AsideCarModel>
                <div>
                    <h1>Featured Cars</h1>
                </div>
                    <SelectCarContainer>
                        <ImagesWrapper>
                            <img src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <DescriptionCarsSelect>
                                    <h1>Car model 1</h1>
                                    <p>Comfortable and efficient for city driving</p>
                                    <NavLink to={'/payment'}>Rent Now</NavLink>
                                </DescriptionCarsSelect>
                        </ImagesWrapper>
                        <ImagesWrapper>
                            <img src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <DescriptionCarsSelect>
                                    <h1>Car model 2</h1>
                                        <p>Comfortable and efficient for city driving</p>
                                        <NavLink to={'/payment'}>Rent Now</NavLink>
                                    </DescriptionCarsSelect>
                        </ImagesWrapper>
                        <ImagesWrapper>
                            <img src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <DescriptionCarsSelect>
                                        <h1>Car model 3</h1>
                                        <p>Comfortable and efficient for city driving</p>
                                        <NavLink to={'/payment'}>Rent Now</NavLink>
                                    </DescriptionCarsSelect>
                        </ImagesWrapper>
                    </SelectCarContainer>

                    <SecondaryMainContainer>
                        <section>
                            <div>
                                <h1>Why choose Us?</h1>
                            </div>
                            
                            <WhyChooseUs>
                                    <InformartionWhyCHooseUS>
                                        <h1><CheckCircle size={24} color='lightgreen'/> Wide Selection</h1>
                                        <p>Choose from a variety of cars to suit your needs</p>
                                    </InformartionWhyCHooseUS>
                                    <InformartionWhyCHooseUS>
                                        <h1><CheckCircle size={24} color='lightgreen'/> Competitive Prices</h1>
                                        <p>Get the best deals on car rentals</p>
                                    </InformartionWhyCHooseUS>
                                    <InformartionWhyCHooseUS>
                                        <h1><CheckCircle size={24} color='lightgreen'/> 24/7 Support</h1>
                                        <p>Our customer service team is always here to help</p>
                                    </InformartionWhyCHooseUS>
                                    <InformartionWhyCHooseUS>
                                        <h1><CheckCircle size={24} color='lightgreen'/> Flexible Rental Options</h1>
                                        <p>Daily, weekly, and monthly rental plans available</p>
                                    </InformartionWhyCHooseUS>
                                    <InformartionWhyCHooseUS>
                                        <h1><CheckCircle size={24} color='lightgreen'/> Clean & Well-Maintained</h1>
                                        <p>All our cars are regularly serviced and sanitized</p>
                                    </InformartionWhyCHooseUS>
                                    <InformartionWhyCHooseUS>
                                        <h1><CheckCircle size={24} color='lightgreen'/> Easy Booking Process</h1>
                                        <p>Book your car in just a few clicks</p>
                                    </InformartionWhyCHooseUS>
                                </WhyChooseUs>
                        </section>
                </SecondaryMainContainer>
            </AsideCarModel>

            <Footer>
                    <h1>Ready to Hit Roat?</h1>
                    <p>Book your car now and start your journey. Our team is ready to assist you with any questions.</p>
                        <div>
                            <NavLink to={"/"}><PhoneCall size={20}/> Call Us now</NavLink>
                            <NavLink to={"/products"}>View All Cars</NavLink>
                        </div>
                </Footer>
                <FooterTerms>
                    <p> &copy; 2024 Driveway. All rights reserved</p>
                        <div>
                            <ul>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Privacy</a></li>
                            </ul>
                        </div>    
                </FooterTerms>
    </Box>
    )
}