import React from 'react'
import Header from "../../components/Header"
import { useParams } from 'react-router-dom'
import Container from '../../layout/Container'
import ProductCard from '../../components/ProductCard'
import classes from "./Category.module.scss"

const Category = () => {
  const { type } = useParams();
  const [data, setData] = React.useState(null);

  fetch("http://localhost:4000/products")
    .then((data) => {
      return data.json();
    })
    .then((cards) => {
      setData(cards)
    })
  return (
    <>
      <Header />
      <Container className={classes["cards"]}>
        {data && data.map(card => <ProductCard key={card.id} data={card} className={classes["card-item"]} />)}
      </Container>
    </>

  )
}

export default Category