import React from "react";
import { ButtonContainer, CheckBoxContainer, ForgotPasswordContainer, HeaderContainer, LoginContainer, MainContainer, SignUpContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { TextInput } from "../../../components/TextInput"
import { ArrowArcLeft, ArrowRight } from "@phosphor-icons/react";
import { useState } from "react";
import axios from "axios";
import { set } from "date-fns";

export function Login(){
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState('')
   const [user, setUser] = useState(null)
   
   const handleLogin = async (e) => {
        e.preventDefault()
        
        console.log(email, password)

        
    try {const response = await axios.post('http://localhost:3000/login', 
        JSON.stringify({email, password}),
        {
            headers: { "Content-Type": "application/json",}
        }
    )
        setUser(response.data)
        console.log(response.data)
    } catch (error) {
        if(!error?.response){
            setError('Erro ao acessar o servidor')
        } else if(error.response?.status === 401){ {
            setError('Usuário ou senha inválidos')
        }
    }
}
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

            {user == null ? (
                <LoginContainer>
                 <h1>Login to Your Account</h1>
                     <form >
                         <label htmlFor="email">E-mail</label>
                         <TextInput 
                         type="email"
                         id="email" 
                         placeholder="you@example.com"
                         onChange={(e) => setEmail(e.target.value)}
                         required
                         />
                         
                         <label htmlFor="password">Password</label>
                         <TextInput 
                         type="password" 
                         id="password"
                         onChange={(e) => setPassword(e.target.value)}
                         required
                         />
                         
                         <p>{error}</p>
                         <CheckBoxContainer>
                             <input type="checkbox" /><strong>Remember me</strong>
                         </CheckBoxContainer>

                        <ButtonContainer>
                             <button type="submit" onClick={(e) => handleLogin(e)}>Log in</button>
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
            ) : (
                <LoginContainer>
                   <h1>Logado com sucesso</h1>
                </LoginContainer>
            )
        }    
            </MainContainer>
    )
}