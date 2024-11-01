import styled, { css } from 'styled-components'

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}


  export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };

export const Box = styled.body` 
    width: 100%;
   
    @media ${device.tablet} {
        width: 618px;
    }

  `

export const HeaderContainer = styled.header` 
    background-color: #fff;
    display: flex;
    width: auto;
    height: auto;
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

        #userContainer {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        #register {
            background-color: #181818;
            color: #e6e6e7;
            padding: .5rem .875rem;
            border-radius: 8px;
        }
    }

    
 
`

export const MainContainer = styled.main` 
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 16rem auto;
    gap: 20rem;

    @media ${device.tablet} {
        justify-content: center;
        flex-direction: column;
        gap: 10rem;
       width: 100%;

        > div {
            img {
                display: flex;
                justify-content: center;
                width: 35rem;
            }
        }
    }
`

export const TextTitleMain = styled.div` 
     display: flex;
     flex-direction: column;

     @media ${device.tablet} {
        justify-content: center;
        text-align: center;
        font-size: 1rem;
        margin: 0 auto;

        p {
            display: flex;
            margin: 0 auto;
            font-size: .5rem;
            flex-wrap: wrap;
            text-align: center;
        }
    }

     h1 {
            color: #fff;
            font: 700 3.5rem/120% sans-serif;
        }

    p {
        color: #bbb8b8;
        font: 400 1.25rem sans-serif;
        width:  37.5rem;
    }
`
export const FormContainer = styled.form` 
    select {
        padding: .87rem 1.5rem;
        padding-left: .3rem;
        border-radius: 12px;
        font: 400 1rem sans-serif;
        }

    button{
        margin-left: .5rem;
        padding: .874rem;
        color: #fff;
        font: 550 1rem sans-serif;
        background-color: rgb(24, 24, 24);
        border: 0;
        border-radius: 8px;
        cursor: pointer;
    }
`

export const AsideCarModel = styled.div`
    background-color: #f5f5f7;
    
    > div {
        display: flex;
        justify-content: center;
        padding-block: 5rem 0;

        h1 {
            font: 600 3rem sans-serif;
            color: rgb(49, 49, 49);
        }
    }
`

export const SelectCarContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    border: 0;
    border-radius: 8px;
    margin: 0 auto;
    max-width: 1280px;

    @media ${device.tablet} {
        display: flex;
        flex-wrap: wrap;
    }

`

export const ImagesWrapper = styled.div` 
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border-radius: 8px;
    justify-content: center;

    
    img {
            width: 22rem;
            border-radius: 8px;
            flex-wrap: wrap;
        }
`
export const DescriptionCarsSelect = styled.div`
    display: flex;
    gap: .5rem;
    flex-direction: column;
    align-items: center;
   
    h1 {
        font: 700 1.25rem/120% 'Roboto', sans-serif;
    }

    p {
        font: 500 .875rem sans-serif;
        color: rgb(165, 164, 164);
    }

    a {
        color: #fff;
        background: #181818;
        border: 0;
        display: flex;
        justify-content: center;
        width: 100%;
        padding: .5rem;
        border-radius: 8px;
        cursor: pointer;
        transition: .1s;
        text-decoration: none;
    }

    a:hover {
        opacity: 95%;
    }
`

export const SecondaryMainContainer = styled.main` 
    width: 100%;
    height: auto;
    margin-top: 10rem;
    background: #fff;
        section > div {
        padding-block: 8rem 2.5rem;
        font: 500 2.5rem 'Roboto';
        display: flex;
        justify-content: center;
        }

        @media ${device.tablet} {
        display: flex;
        justify-content: center;
    }        
       
`
export const WhyChooseUs = styled.section` 
    display: grid;
    max-width: 1280px;
    margin: 0 auto;
    grid-auto-flow: column;
    grid-template-rows: repeat(2, 1fr);

    @media ${device.tablet} {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }        
`
export const InformartionWhyCHooseUS = styled.section`
    margin-left: 2.5rem;
    display: flex;
    flex-direction: column;
    padding-block: 1rem;
        h1 {
            font: 700 1.5rem/1.4 sans-serif;
            display: flex;
            align-items: center;
            gap: .15rem;
        }

        p {
            font: 400 1rem/1.2 'Inter', sans-serif;
            color: gray;
            display: flex;
            text-align: center;
        }
`

export const Footer = styled.footer`
    display: flex;
    background-color: #f1f1f1;
    flex-direction: column;
    justify-content: center;
    padding-block: 5rem;
    gap: .5rem;
    align-items: center;

    h1  {
        font: 800 3rem/140%  'Inter', sans-serif;
    }

    p {
        font: 500 1rem 'Inter', sans-serif;
        color: gray;
    }

    div {
        display: flex;
        gap: .5rem;
    }

    a {
        display:flex;
        padding: .875rem 1rem;
        gap: .5rem;
        border: 0;
        border-radius: 8px;
        font: 500 1rem 'Inter', sans-serif;
        background-color: #181818;
        color: #fff;
        box-shadow: 2px 3px 5px 1px gray;
        cursor: pointer;
        text-decoration: none;

        a:hover{
            opacity: 90%;
            }
    }
`
export const FooterTerms = styled.footer` 
    align-items: center;
    display: flex;
    background-color: #fff;
    padding: 0.5rem;

    div {
        margin-left: auto;
    }

    p {
        font: 400 .875rem 'Inter', sans-serif;
        color: rgb(87, 87, 87);
        letter-spacing: 1px;
        padding-left: 1rem;
    }

    ul {
        display: flex;
        gap: 1rem;
        padding-right: 1rem;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        font: 400 .875rem 'Inter', sans-serif;
        color: rgb(87, 87, 87);
    }
`