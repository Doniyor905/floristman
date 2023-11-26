import React, { useEffect } from 'react'
import Header from "../../components/Header"
import { useLocation, useParams } from 'react-router-dom'
import Container from '../../layout/Container'
import ProductCard from '../../components/ProductCard'
import classes from "./Category.module.scss"
import DiscountsCarousel from '../../components/DiscountsCarousel'
import { useSelector } from 'react-redux'
import categories from '../../routes/categories'
import Title from '../../components/Title'

const Category = () => {
  const { type } = useParams();
  const [data, setData] = React.useState(null);
  const { like, cart:cartItems } = useSelector((state) => state)
  const { pathname } = useLocation()
  const {text: title} = categories.find((item) => item.link === pathname)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/floristamn_items?category=${type}`);
      const cards = await res.json()
      setData(cards)
    }
    fetchData()
  }, [type])
  return (
    <>
      <Header />
      {title && <Title>{title}</Title>}
      <Container className={classes["cards"]}>
        {data && data.map(card =>
          <ProductCard
            key={card.id}
            data={card}
            className={classes["card-item"]}
            liked={card.id in like} 
            selected={card.id in cartItems}/>)}
      </Container>
      <DiscountsCarousel />
    </>

  )
}

export default Category