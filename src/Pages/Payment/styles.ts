import styled from "styled-components";

export const MainContainer = styled.body` 
    background-color: #e6e6e7;
    height: 100vh;
    nav{
        display: flex;
        justify-content: space-between;
        padding: 1.125rem 2.5rem .5rem;
        align-items: center;
        background-color: #fff;
        
        h1 {
            font: 800 2.5rem 'italianno', sans-serif;
        }
        
        ul {
            display: flex;
            gap: 1.5rem;
        }

        li {
            list-style: none;
        }

        a {
            font-weight: 600;
            color: #000000;
            text-decoration: none;
            transition: .2s;
            font-family: 'Inter', sans-serif;
        }

        a:hover {
            border: 1px solid #000;
            border-inline: none;
            border-top: none;
            font: 600 1.125rem 'Inter', sans-serif;
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
export const FormsContainer = styled.div`
    padding: 3.5rem;
  border-radius: 6px;
  background-color: #F3F2F2;
  width: 100%;
  min-width: 640px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`
export const Heading = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  
  div {
    span {
      color: #181819;
      font: 700 .875rem/1.2 'Roboto', sans-serif;
    }
    
    p {
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      line-height: 120%;
      font-weight: 400;
      color: #403937;
    }
  }
`


export const PaymentContainer = styled(FormsContainer)``

export const PaymentHeading = styled(Heading)``

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
`

export const PaymentErrorMessage = styled.p`
  font-weight: 400;
  color: red;
`

export const Container = styled.main`
  display: flex;
  justify-content: center;
  max-width: 1160px;
  padding: 40px 20px;
  margin: 0 auto;
  gap: 32px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    color: #8047F8;
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`

export const AddresContainer = styled(FormsContainer)``

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'cardNumber cardNumber cardNumber'
    'date cvv cvv'
    'nameCard nameCard nameCard';
  grid-template-columns: 260px 1fr 60px;
  grid-gap: 16px 12px;
`

export const CheckOutButton = styled.button` 
  margin-top: 24px;
  width: 100%;
  padding: 12px;
  text-transform: uppercase;
  border: 0;
 
  color: #fff;
  background-color: #8047F8;

  transition: all 0.2s;

  &:hover {
    background-color: #4B2995;
  }

  border-radius: 6px;
`