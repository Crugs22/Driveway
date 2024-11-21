import styled from "styled-components";

export const Box = styled.body` 
    background-color: #FAFAFA;
    margin: 0 auto;
    width: 100%;
`

export const Content = styled.div` 
    color: #FAFAFA;
    background-color: #000;
    display: flex;
    flex-direction: column;
    padding-block: 8rem;
    gap: 8px;
    align-items: center;

    div {
        max-width: 1280px;
    }
    
    h1 {
        font: 700 3.5rem/120% 'Inter', sans-serif;
    }

    p {
        font: 400 1.25rem 'Inter', sans-serif;
        color: #e6e6e6;
    }
`

export const StoryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-block: 3rem;
    padding-inline: 1.5rem;
    max-width: 80rem;
    margin: 0 auto;
    background-color: #FAFAFA;
    gap: 1rem;
    align-items: center;

    & > div:nth-child(1) {
        width: 30rem;

        h1 {
            font: 700 2.5rem/120% 'Roboto', sans-serif;
        }

        p {
            font: 400 1.25rem/120% 'Roboto', sans-serif;
            color: #949494;
        }
    }

    img {
        border-radius: 16px;
    }
` 
export const ValuesContainer = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f2f3f5;
    padding-block: 7rem;

    div {
        max-width: 1280px;

    }

    h1 {
        display: flex;
        justify-content: center;
        font: 700 3rem/120% 'Inter', sans-serif;
    }
`

export const ValuesChildren = styled.div` 
    display: flex;
    text-align: center;
    padding-block: 3rem;
    align-items: center;
    gap: 2rem;

    div {
        h2 {
            padding-block: 1rem;
        }

        p {
            font: 400 1.125rem 'Inter', sans-serif;
            color: #909090;
        }
    }
`

export const ContactContainer = styled.div` 
    background-color: #FAFAFA;
    display: flex;
    gap: 3rem;
    padding-inline: 2rem;
    padding-block: 5rem;
    max-width: 1280px;
    margin: 0 auto;
`

export const ContactChildren = styled.div`
    width: 30rem;

    h1 {
        font: 700 3rem/120% 'Inter', sans-serif;
    }

    p {
        font: 400 1rem/120% 'Inter', sans-serif;
        padding-block: 1rem;
        color: #909090;
    }

    ul {
        li {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            list-style: none;
            padding-block: .25rem;

            font: 500 1rem/120% 'Inter', sans-serif;
        }
    }
`

export const BusinessContainer = styled.div`
    p {
        color: #909090;
        padding-block: .5rem;
    }
    
    div {
        padding-block: 1rem;
    }

    a {
        display: flex;
        align-items: center;
        gap: 0.85rem;
        text-decoration: none;

        color: #fafafa;
        background-color: #181818;
        padding: .75rem 1rem;
        width: 55%;

        border-radius: 8px;
    }
`