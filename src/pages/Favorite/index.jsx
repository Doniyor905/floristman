import React from 'react'
import Header from '../../components/Header'
import Container from '../../layout/Container'
import ProductCard from '../../components/ProductCard'
import DiscountsCarousel from '../../components/DiscountsCarousel'
import { useSelector } from 'react-redux'
import classes from "./Favorite.module.scss"
import Title from '../../components/Title'

const Favorite = () => {
    const { like, cart:cartItems } = useSelector((state) => state)
    const items = Object.values(like)
    return (
        <>
            <Header />
            {items.length ? (
                <>
                    <Title>Favorite Products</Title>
                    <Container className={classes["cards"]}>
                        {items.map((card) =>
                        (
                            <ProductCard
                                key={card.id}
                                data={card}
                                className={classes["card-item"]}
                                liked={card.id in like} 
                                selected={card.id in cartItems}/>))}
                    </Container>
                </>
            ) : (
                <Title>You don't have favorite products☹️</Title>

            )

            }
            <DiscountsCarousel />
        </>
    )
}

export default Favorite