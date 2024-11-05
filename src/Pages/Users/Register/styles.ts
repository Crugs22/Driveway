import styled from "styled-components";


export const BoxContainer = styled.body`
      background: #e6e8e9;
      height: 100vh;

      @media (max-width: 768px ) {
        overflow-x: hidden;
        overflow-y: scroll;
      }
`

export const SignUpContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #f5f5f5;
    width: 480px;
    justify-content: center;
    margin-block: 10rem;
    margin-inline: auto;
    padding: 1rem 1rem .5rem;
    border-radius: 16px;

    @media (max-width: 768px ) {
      margin-block: 2rem;
      max-width: 320px;
    }
`
export const FormContainer = styled.form` 

  margin-top: 1.25rem;

  label {
    margin-block: .1rem .875rem;
    font: 500 .875rem/1.2 'Roboto', sans-serif;
  }

  #Names {
    display: flex;
    gap: 1rem;
    margin-block: .1rem .5rem;
  }

  input{ 
    border-radius: 8px;
    background-color: #fff;
  }

  
`

export const InputCheckBox = styled.div`  
  display: flex;
  gap: .5rem;
`

export const TermsContainer = styled.span` 
  font: 400 .875rem/1.2 'Roboto', sans-serif;
  color: #181811;

  a {
    text-decoration: none;
    color: #8047F5;
    
    &:hover{
      text-decoration: underline;
    }
  }
`

export const ButtonForm = styled.button` 
  width: 100%;
  margin-top: 1rem;
  padding-block: .5rem;
  border-radius: 8px;
  border: 0;
  color: #e6e6e6;
  background: #181818;

  &:hover{
    opacity: 90%;
  }
`

export const SignInContainer = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;

  a {
    display: flex;
    align-items: center;
    margin: .5rem auto;
    text-decoration: none;
    font: 500 .875rem/1.2 'Roboto', sans-serif;
    gap: .1125rem;
    color: #8047F5;

    &:hover{
      text-decoration: underline;
    }
  }
`