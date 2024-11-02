import React from "react";
import { HeaderContainer, LoginContainer, MainContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { TextInput } from "../../../components/TextInput"
import { ArrowArcLeft, ArrowRight } from "@phosphor-icons/react";

export function Login(){
    return(
        <MainContainer>
            <HeaderContainer>
                <nav>
                    <h1>Driveway</h1>
                        <ul> 
                            <li><NavLink to={'/'} title="Home">Home</NavLink></li>
                            <li><NavLink to={'/products'}>Cars</NavLink></li>
                            <li><NavLink to={'/location'}>Locations</NavLink></li>
                            <li><a href="">About</a></li>
                        </ul>
                </nav>
            </HeaderContainer>

            
                <LoginContainer>
                    <h1>Login to Your Account</h1>
                        <form action="">
                            <label htmlFor="email">E-mail</label>
                            <TextInput type="email" id="email"/>
                            <label htmlFor="password">Password</label>
                            <TextInput type="password" id="password"/>
                            <input type="checkbox" /><span>Remember me</span>

                           <div>
                                <button type="submit">Log in</button>
                           </div>
                        </form>
                        <div>
                            <a href="">Forgot password?</a>
                            <p> Don't have an account</p>
                            <a href="">Sign up now <ArrowRight/></a>
                        </div>
                </LoginContainer>
            </MainContainer>
    )
}