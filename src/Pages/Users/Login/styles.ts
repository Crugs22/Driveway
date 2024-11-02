import styled from "styled-components";

export const HeaderContainer = styled.header`
      background-color: #fff;
        display: flex;
        width: auto;
 nav {
    display: flex;
    justify-content: space-between;
    padding: 1.125rem 2.5rem .5rem;
    flex: 1;
    align-items: center;
    background-color: #fff;
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
`

export const MainContainer = styled.main` 
    background-color: #e6e6e7;
    height: 100vh;
`

export const LoginContainer = styled.div` 
    display: flex;
    margin: 0 auto;
    width: 440px;
    flex-direction: column;
    text-align: center;
`