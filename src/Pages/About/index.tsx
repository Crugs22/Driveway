import { NavLink } from "react-router-dom";
import { ButtonMenuToggle, DesktopBar, HeaderContainer, NavItem } from "../Home/styles";
import { MobileNav } from "../Products/styles";
import React, { useState } from "react";
import { List, X, ShieldCheck } from "@phosphor-icons/react";
import { Box, BusinessContainer, ContactChildren, ContactContainer, Content, StoryContainer, ValuesChildren, ValuesContainer } from "./styles";
import {Clock, Inbox, LucideShield, Mail, MapPin, PhoneCall, Users } from "lucide-react"
import { CellSignalFull } from "@phosphor-icons/react/dist/ssr";


export function About() {
    
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    return (
    <Box>
        <HeaderContainer>
            <DesktopBar>
                <h1>Driveway</h1>
                   <ul> 
                        <NavItem><NavLink to={'/'} title="Home">Home</NavLink></NavItem>
                        <NavItem><NavLink to={'/products'}>Cars</NavLink></NavItem>
                        <NavItem><NavLink to={'/About'}>About</NavLink></NavItem>
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

        <Content>
            <div>
                <h1>About Driveway</h1>
                <p>Providing quality car rentals since 2023. Your journey is our passion</p>
            </div>
        </Content>

        <StoryContainer>
            <div>
                <h1>Our Story</h1>
                
                <p>Founded in 2023, Driveway is a company dedicated to providing quality car rentals to our customers. We offer a wide range of cars to suit different needs and budgets.</p>
                <br />
                <p>We are committed to customer satisfaction and strive to deliver exceptional service to our valued customers.</p>
            </div>
            
            <div>
                <img src="https://plus.unsplash.com/premium_photo-1661274202754-abde708db7d0?q=80&w=472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            </div>
        </StoryContainer>

        <ValuesContainer>
            <div>
                <h1>Our Values</h1>
                    <ValuesChildren>
                        <div>
                        <LucideShield/>
                        <h2>Safety First</h2>
                        <p>We prioritize the safety of our customers with well-maintained vehicles and 24/7 roadside assistance.</p>
                    </div>
                        <div>
                            <Users/>
                            <h2>Customer-Centric</h2>
                            <p>Our customers are at the heart of everything we do. We strive to exceed expectations at every turn.</p>
                        </div>
                    <div>
                            <Clock/>
                            <h2>Reliability</h2>
                            <p>Count on us for punctual service and vehicles that are always ready when you need them.</p>
                        </div>
                    </ValuesChildren>
            </div>
        </ValuesContainer>

        <ContactContainer>
           <ContactChildren>
                <h1>Contact Us</h1>

                <p>We're here to help with any questions or concerns you may have. Feel free to reach out to us through any of the following methods:</p>

                <ul>
                    <li><PhoneCall/> 1-800-DRIVEWAY</li>
                    <li><Mail/> support@Driveway.com</li>
                    <li><MapPin/> 123 Rental Street, Car City, ST 12345</li>
                </ul>
           </ContactChildren>

           <BusinessContainer>
                <h1>Business Hours</h1>

                <div>
                    <p> Monday - Friday: 9:00 AM - 6:00 PM </p>
                    <p> Saturday: 9:00 AM - 6:00 PM </p>
                    <p> Sunday: 10:00 AM - 4:00 PM </p>
                </div>

                <NavLink to={''}><PhoneCall size={16}/> Contact Us</NavLink>
           </BusinessContainer>
        </ContactContainer>
    </Box>
    );
}