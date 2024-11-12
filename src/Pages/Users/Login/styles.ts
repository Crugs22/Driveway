import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
    background: #fff;
    display: flex;

    
  
 nav {
    display: flex;
    justify-content: space-between;
    padding: 1.125rem 2.5rem .5rem;
    flex: 1;
    align-items: center;
    background-color: #fff;
    margin: 0 auto;
   

        h1 {
            font: 800 2.5rem 'italianno', sans-serif;
        }

        ul {
            display: flex;
            gap: 1rem;
        }

        li {
            font-family: sans-serif;
            list-style: none;
        }

        a {
            font-weight: 600;
            color: #000000;
            text-decoration: none;
            transition: .2s;
        }

        a:hover {
            border: 1px solid #000;
            border-inline: none;
            font: 600 1.125rem 'Arial', sans-serif;
            border-top: none;
        }
    }

    @media (max-width: 768px) {
           nav {
            display: flex;
            justify-content: center;

            ul{
                li {
                    display: none;
                }
            }
           }
        }
        
`

export const MainContainer = styled.div` 
    background-color: #e6e6e7;
    height: 100vh;

    @media (max-width: 768px) {
        width: 100vw;
        overflow: auto;
    }
`

export const LoginContainer = styled.div` 
    display: flex;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 1px 10px 1px #000;
    padding-block: 2.5rem;
    margin-top: 10rem;
    width: 480px;
    align-items: center;
    flex-direction: column;
    text-align: center;
    h1 {
        font: 600 1.25rem/1.2 'Roboto', sans-serif;
    }

    form {
        display: flex;
        align-items: start;
        flex-direction: column;
        margin-top: 1rem;

        label {
            font: 400 .875rem/1 'Roboto', sans-serif;
            margin-block: .5rem 0;
            padding-block: 0;
        }

        > label {
            margin-block: 1.25rem 0;
        }

        input {
            padding-block: .75rem;
            padding-inline: 1rem 13rem;
        }
        
        span {
            color: salmon;
        }
    }

    @media (max-width: 768px) {
        width: 300px;
        margin-top: 2rem;
        form {
            font-size: .1125rem;
            width: 280px;
            overflow: hidden;

            input {
               padding-inline: 1rem 6rem;
            }
        }
        
    }
    
`

export const CheckBoxContainer = styled.div`
    display: flex;
    margin-block: 1rem;
    font: 400 .875rem/1 'Roboto', sans-serif;
    color: #181825;
    gap: .25rem;
`

export const ButtonContainer = styled.div`
    margin: 0 auto;
    button  {
        width: 100%;
        padding: .5rem 11rem;
        border: 0;
        border-radius: 6px;
        color: #e6e6e6;
        background-color: #181818;
        transition: .2s;

        &:hover{
            opacity: 90%;
        }

        @media (max-width: 768px) {
            display: flex;
            justify-content: center;
            padding: .5rem 7rem;
        }
    }
`

export const ForgotPasswordContainer = styled.div`
        display: flex;
        flex-direction: column;
     a {
        display: flex;
        justify-content: center;
        font: 400 .875rem/1 'Roboto', sans-serif;
        margin-block: 1.5rem ;
        gap: .5rem;
        text-decoration: none;
        color: #8047F5;
        align-items: center;
    }
    
    p { 
        margin-bottom: .125rem;
        font: 400 .95rem/1 'Roboto', sans-serif;
        color: #a3a3a3; 
    }
`

export const SignUpContainer = styled.div`

`