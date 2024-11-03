import React from "react";
import { useForm } from 'react-hook-form'
import { Fragment } from 'react'
import { AddresContainer, AddressForm, CheckOutButton, Container, InfoContainer, MainContainer, PaymentContainer, PaymentErrorMessage, PaymentHeading, PaymentOptions } from "./styles";
import { NavLink } from "react-router-dom";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Bank,
        CreditCard,
        CurrencyDollar,
        Money,
        Trash,
 } from '@phosphor-icons/react'
import { TextInput } from "../../components/TextInput";
import { Radio }  from '../../components/Radio'

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

export function Payment(){
    const {
        register,
        handleSubmit,
        watch,
        formState:{ errors },
    } = useForm<FormInputs>({
        resolver: zodResolver(newOrder)
    })

    const selectedPaymentMethod = watch('paymentMethod')


    return(
        <MainContainer>
            <nav>
                <h1>Driveway</h1>
                <ul> 
                    <li><NavLink to={'/'} title="Home">Home</NavLink></li>
                    <li><NavLink to={'/products'}>Cars</NavLink></li>
                    <li><a href="">Locations</a></li>
                    <li><a href="">About</a></li>
                </ul>
                    <div id="userContainer">
                            <NavLink to={'/user/login'}>Sign in</NavLink>
                            <a href="" id="register">Sign up</a>
                    </div>
            </nav>

            <section>
               <Container>
                    <InfoContainer>
                        <h2>Complete seu pedido</h2>

                        <form id="order">
                        <AddresContainer>
                            <AddressForm>
                                <TextInput 
                                    type="number" 
                                    placeholder="Number Card" 
                                    containerProps={{style: { gridArea: "cardNumber" } }}
                                    maxLength={16}
                                    minLength={16}
                                    {...register('cardNumber', {valueAsNumber: true })}/>
                               
                                <TextInput 
                                    type="date"
                                    containerProps={{style: { gridArea: "date" } }}
                                    placeholder="MM/YY" 
                                    {...register('date', { valueAsNumber: true })}/>
                               
                                <TextInput 
                                    type="number"                                    
                                    containerProps={{style: { gridArea: "cvv" }}}
                                    placeholder="CVV" 
                                    maxLength={3}
                            
                                    minLength={3}
                                    {...register('cvv', {valueAsNumber:  true })}/>  
                                
                                <TextInput
                                type="text"    
                                containerProps={{style: { gridArea: "nameCard"} }}
                                placeholder="Name On Card"
                                {...register('nameCard')}/>
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
                        <CreditCard size={16} />
                        <span>Cartão de crédito</span>
                        </Radio>

                        <Radio
                        isSelected={selectedPaymentMethod === 'debit'}
                        {...register('paymentMethod')}
                        value="debit"
                        >
                        <Bank size={16} />
                        <span>Cartão de débito</span>
                        </Radio>

                        <Radio
                        isSelected={selectedPaymentMethod === 'cash'}
                        {...register('paymentMethod')}
                        value="cash"
                        >
                        <Money size={16} />
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