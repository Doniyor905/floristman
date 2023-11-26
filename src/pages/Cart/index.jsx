import React from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'

import classes from "./Cart.module.scss"
import Container from '../../layout/Container'
import DiscountsCarousel from '../../components/DiscountsCarousel'
import { useSelector } from 'react-redux'
import CartItems from '../../components/CartItems'

const Cart = () => {
    const { cart } = useSelector((state) => state)
    const items = Object.values(cart)
    const cartEmpty = items.length === 0;
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    return (
        <>
            <Header />
            <Container className={classes["cards"]}>
                {cartEmpty ? <Title>Cart is empty☹️</Title> : <Title className={classes['title']}>Cart</Title>}
                {!cartEmpty && (items.map((card) => <CartItems key={cart.id} {...card} />))}
                {!cartEmpty &&
                    <>
                        <div className={classes['total']}>
                            <p className={classes['total__description']}>Total:</p>
                            <p className={classes['total__amount']}>{total}$</p>
                        </div>
                        <button className={classes["order-button"]}>Order</button>
                    </>
                }
            </Container>
            <DiscountsCarousel />
        </>
    )
}

export default Cart