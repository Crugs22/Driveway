import React from "react";
import { BoxContainer,  ButtonForm,  FormContainer,  InputCheckBox,  SignInContainer,  SignUpContainer, TermsContainer } from "./styles";
import { HeaderContainer } from "../Login/styles";
import { NavLink } from "react-router-dom";
import { TextInput } from '../../../components/TextInput'
import { ArrowRight } from "@phosphor-icons/react";


export function Register() {
    return (
        <BoxContainer>
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
                
                <SignUpContainer>
                    <h1>Create your Account</h1>
                        <FormContainer>
                            <div id="Names">
                                <div>
                                    <label htmlFor="fName">First Name</label>
                                    <TextInput 
                                    type="text" 
                                    required/>
                                </div>

                                <div >
                                    <label htmlFor="lName">Last Name</label>
                                    <TextInput 
                                    type="text" 
                                    required />
                                </div>
                            </div>
                            
                            <div id="email">
                                <label htmlFor="email">Email</label>
                                <TextInput 
                                type="email" 
                                placeholder="you@example.com"
                                required/>
                            </div>
                            
                            <div id="password">
                                <label htmlFor="password">Password</label>
                                <TextInput 
                                type="password"
                                required/>
                            </div> 

                            <div id="confirm">
                                
                            <label htmlFor="ConfPassword">Confirm Password</label>
                            <TextInput 
                            type="password"
                            minLength={8} 
                            required/>
                            </div>

                            <InputCheckBox>
                                <input type="checkbox" required/><TermsContainer> I agree to the <a href="">Terms of Service</a> and <a href="">Privacy Policy</a></TermsContainer>
                            </InputCheckBox>
                                <ButtonForm>Sign Up</ButtonForm>
                        </FormContainer>

                        <SignInContainer>
                            <TermsContainer>Already have an account?</TermsContainer>
                            <NavLink to={'/user/login'} >Log in Now <ArrowRight/></NavLink>
                        </SignInContainer>
                </SignUpContainer>
        </BoxContainer>
    )
}