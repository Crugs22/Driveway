import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { Fragment } from 'react'
import { AddresContainer, AddressForm, CheckOutButton, Container, InfoContainer, MainContainer, PaymentContainer, PaymentErrorMessage, PaymentHeading, PaymentOptions } from "./styles";
import { NavLink } from "react-router-dom";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Bank,
        CreditCard,
        CurrencyDollar,
        List,
        Money,
        Trash,
        X,
 } from '@phosphor-icons/react'
import { TextInput } from "../../components/TextInput";
import { DifferenceInCalendarMonthsOptions } from 'date-fns'
import { Radio }  from '../../components/Radio'
import { ButtonMenuToggle, DesktopBar, HeaderContainer, NavBar, NavItem } from "../Home/styles";
import { MobileNav } from "../Products/styles";

type FormInputs = {
    cardNumber:number
    date: number
    cvv: number
    nameCard: string
    paymentMethod: 'credit' | 'debit' | 'cash'
}

const newOrder = z.object({
    cardNumber: z.string().min(13).max(16),
    expiryDate: z.date(),
    
})

export function Payment() {
    const {
        register,
        handleSubmit,
        watch,
        formState:{ errors },
    } = useForm<FormInputs>({
        resolver: zodResolver(newOrder)
    })

    const selectedPaymentMethod = watch('paymentMethod')
    
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    return(
        <MainContainer>
              <HeaderContainer>
            <DesktopBar>
                <h1>Driveway</h1>
                   <ul> 
                        <NavItem><NavLink to={'/'} title="Home">Home</NavLink></NavItem>
                        <NavItem><NavLink to={'/products'}>Cars</NavLink></NavItem>
                        <NavItem><a href="">About</a></NavItem>
                    </ul>
                    <div id="userContainer">
                        <NavLink to={'/user/login'}>Sign in</NavLink>
                        <NavLink to={'/user/register'} id="register">Sign up</NavLink>
                    </div>
                </DesktopBar>
                <MobileNav style={{ display: isMobileNavOpen ? 'flex' : 'none' }}>
                    <NavItem><NavLink to={'/'}>Home</NavLink></NavItem>
                    <NavItem><NavLink to={'/products'}>Products</NavLink></NavItem>
                    <NavItem><a href="/">About</a></NavItem>
                </MobileNav>

                <ButtonMenuToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
                        {isMobileNavOpen ? <X size={24}/> :  <List size={24}/> }
                    </ButtonMenuToggle>
         </HeaderContainer>

            <section>
               <Container>
                    <InfoContainer>
                        <h2>Complete seu pedido</h2>

                    <form >
                        <AddresContainer>
                            <AddressForm>
                                <TextInput 
                                    type="number" 
                                    placeholder="Number Card" 
                                    containerProps={{style: { gridArea: "cardNumber" } }}
                                    maxLength={16}
                                    minLength={13}
                                    {...register('cardNumber', {required:true ,valueAsNumber: true })}/>
                                    {errors.cardNumber && <p>Este campo é obrigátorio</p>}
                               
                                <TextInput 
                                    type="month"
                                    containerProps={{style: { gridArea: "date" } }}
                                    placeholder="MM/YY" 
                                    {...register('date', {required:true, valueAsNumber: true })}/>
                                    {errors.date && <p>Este campo é obrigátorio</p>}
                               
                                <TextInput 
                                    type="number"                                    
                                    containerProps={{style: { gridArea: "cvv" }}}
                                    placeholder="CVV" 
                                    {...register('cvv', {required:true, maxLength: 3,
                                        minLength: 3, valueAsNumber:  true })}/> 
                                    {errors.cvv && <p>Este campo é obrigátorio</p>} 
                                
                                <TextInput
                                type="text"    
                                containerProps={{style: { gridArea: "nameCard"} }}
                                placeholder="Name On Card"
                                {...register('nameCard', {required: true})}/>
                                {errors.nameCard && <p>Este campo é obrigátorio</p>} 
                        </AddressForm>
                    </AddresContainer>
                        <PaymentContainer>
                            <PaymentHeading>
                                <CurrencyDollar color="#8047F8" size={26} />
                                    <div> 
                                        <span>Pagamento</span>

                                        <p>
                                        O pagamento é feito na entrega. Escolha a forma que deseja
                                        pagar
                                        </p>
                                    </div>
                            </PaymentHeading>
                <PaymentOptions>
                    <div>
                        <Radio
                        isSelected={selectedPaymentMethod === 'credit'}
                        {...register('paymentMethod')}
                        value="credit"
                        >
                        <CreditCard size={20} />
                        <span>Cartão de crédito</span>
                        </Radio>

                        <Radio
                        isSelected={selectedPaymentMethod === 'debit'}
                        {...register('paymentMethod')}
                        value="debit"
                        >
                        <Bank size={20} />
                        <span>Cartão de débito</span>
                        </Radio>

                        <Radio
                        isSelected={selectedPaymentMethod === 'cash'}
                        {...register('paymentMethod')}
                        value="cash"
                        >
                        <Money size={20} />
                        <span>Dinheiro</span>
                        </Radio>
                    </div>

                    {errors.paymentMethod ? (
                        <PaymentErrorMessage role="alert">
                        {errors.paymentMethod.message}
                        </PaymentErrorMessage>
                    ) : null}
                </PaymentOptions>
                        <CheckOutButton type="submit" form="order">
                            Confirmar pedido
                        </CheckOutButton>
                            </PaymentContainer>
                        </form>
                    </InfoContainer>
               </Container>    
            </section>
        </MainContainer>
    )
}