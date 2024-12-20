import { Export } from "@phosphor-icons/react";
import styled from "styled-components";

export const MainContainer = styled.div`
    background: #efefef;
    height: 100vh;
    max-width: 1280px;
    margin: 0 auto;
    overflow-x: hidden;

    section {
        display: grid;
        grid-template-areas: 
        'Filter Products Products';

        @media (max-width: 768px ) {
            grid-template-areas: none;
            place-content: center;
    }
}
`

export const MobileNavToggle = styled.div``

export const Body = styled.body`
    background: #efefef;

    @media (max-width: 768px ) {
        overflow: hidden;
    }
`

export const MobileNav = styled.ul`
  display: none;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    padding-right: auto;
    gap: 1rem;
  }
`;

export const TextAllCars = styled.div`
    display: flex;
    justify-content: center;
    margin-block: 2.5rem;

    h1{
        font: 700 2.5rem/1.2 'Inter', sans-serif;
        color: #414141;
    }
`

export const FilterContainer = styled.div` 
    display: flex;
    flex-direction: column;
    width: 18rem;
    gap: .5rem;
    ul{
        li {
            display: flex;
            align-items: center;
            gap: .5rem;
            font: 500 1rem/1.2 'Inter', sans-serif;
            list-style: none;
            color: #181811;
        }
    }

    > div {
        padding-right: 4rem;

        h2 {
            padding-bottom: .5rem;
        }

        button {
            margin-top: .5rem;

            display: flex;
            width: 100%;
            padding-block: .5rem;
            justify-content: center;
            align-items: center;
            border: 0;
            border-radius: 8px;
            color: #e6e6e6;
            background-color: #181818;
            gap: .5rem;
            font: 400 1rem/1.2 'Roboto', sans-serif;
            cursor: pointer;
        }

        button:hover {
        opacity: 95%;
    }
    }
`

export const ProductsContainer = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(3, 300px);
    gap: 2rem;

    img {
        border-radius: 8px;
    }

    @media (max-width: 768px ) {
        display: flex;
        flex-direction: column;

        img {
            margin: 1rem auto;
        }
    }
`

export const InfoRentNow = styled.div` 
    display: flex;
    flex-direction: column;
    text-align: center;

    #Price {
        font: 600 1.125rem/1.2 monospace;
        margin-top: .5rem;
        display: flex;
        
    }

    a {
        display: flex;
        width: 99%;
        padding-block: .5rem;
        justify-content: center;
        align-items: center;
        border: 0;
        border-radius: 8px;
        color: #e6e6e6;
        background-color: #181818;
        gap: .5rem;
        text-decoration: none;
        margin-top: .5rem;
    }

    a:hover {
        opacity: 90%;
    }

    > div  {
        display: flex;
        justify-content: center;
        
        &:last-child {
            margin-bottom: 2rem;
        }
    }
`