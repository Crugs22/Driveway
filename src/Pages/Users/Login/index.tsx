import React from "react";
import { ButtonContainer, CheckBoxContainer, ForgotPasswordContainer, HeaderContainer, LoginContainer, MainContainer, SignUpContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { TextInput } from "../../../components/TextInput"
import { ArrowArcLeft, ArrowRight } from "@phosphor-icons/react";
import { useState } from "react";

export function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log("Envio")
    }

    return(
        <MainContainer>
            <HeaderContainer>
                <nav>
                    <h1>Driveway</h1>
                        <ul> 
                            <li><NavLink to={'/'} title="Home">Home</NavLink></li>
                            <li><NavLink to={'/products'}>Cars</NavLink></li>
                            <li><a href="">About</a></li>
                        </ul>
                </nav>
            </HeaderContainer>

            
                <LoginContainer>
                    <h1>Login to Your Account</h1>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email">E-mail</label>
                            <TextInput 
                            type="email"
                            id="email" 
                            placeholder="you@example.com"
                            onChange={(e) => setUsername(e.target.value)}/>
                            
                            <label htmlFor="password">Password</label>
                            <TextInput 
                            type="password" 
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}/>

                            <CheckBoxContainer>
                                <input type="checkbox" /><span>Remember me</span>
                            </CheckBoxContainer>

                           <ButtonContainer>
                                <button type="submit">Log in</button>
                           </ButtonContainer>
                        </form>
                        
                        <ForgotPasswordContainer>
                            <a href="">Forgot password?</a>
                            
                            <SignUpContainer>
                                <p> Don't have an account</p>
                                <NavLink to={'/user/register'}>Sign up now <ArrowRight/></NavLink>
                            </SignUpContainer>
                        </ForgotPasswordContainer>
                
                </LoginContainer>
            </MainContainer>
    )
}