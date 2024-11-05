import styled from "styled-components";

export const Container = styled.label` 
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 6px;
    border: 1px solid transparent;
    text-transform: uppercase;
    transition: all 0.2s;
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    line-height: 160%;
    font-weight: 400;

    background-color: #EDEDED;
    color: #574F4D;

    &:hover {
        background-color: #D7D5D5;
    }

    &[data-state='true'] {
    background-color: #EBE5F9;
    border-color: #8047F8;
  }

  input {
    display: none;
  }

  svg {
    color: #8047F8;
  }

  @media (max-width: 768px) {
      padding: 1rem .5rem;
      line-height: normal;
      font: 700 .5rem/1.2 'Roboto', sans-serif;
    }
`
