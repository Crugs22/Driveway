import styled from "styled-components";

export const Box = styled.div` 
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Container = styled.label` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 6px;

    border: 1px solid 
    #e6e6e5;

    background-color: #EDEDED;

    transition: all 0.2s;
     
    &[data-state='focused']{
        border-color: #8047F8;
        }
    &[data-state='blurred']{
        border-color: #E6E6E5;
    }

    input {
        color: #181818;
        width: 100%;
        background-color: transparent;
        border: none;
        padding: 12px;
        outline: none;
    }

    input[type=number]::-webkit-inner-spin-button{
        appearance: none;
    }

    &::placeholder{
        color: #8D8686;
    }

    span {
        color: #8D8686;
        padding-right: 12px;
        font-style: italic;
        font:700 1.25rem/1.3 'Inter', sans-serif;
    }
`

export const ErrorMessage = styled.p`
  font-family:'Inter',sans-serif;
  font-weight: 400;
  color: red;
`