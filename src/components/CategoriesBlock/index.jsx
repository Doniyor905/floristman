import React from 'react'
import classes from "./CategoriesBlock.module.scss"
import Container from '../../layout/Container'
import categories from '../../routes/categories'
import { Link } from 'react-router-dom'


const CategoriesBlock = () => {
  return (
    <Container className={classes["categories"]}>
        {categories.map(category => (
            <div key={category.link} className={classes['categories__item']}>
                <img className={classes["categories__image"]} src={category.img} alt={category.text} />
                <Link to="/category" className={classes["categories__button"]} href={category.link}>{category.text}</Link>
            </div>
        ))}
    </Container>
  )
}

export default CategoriesBlock