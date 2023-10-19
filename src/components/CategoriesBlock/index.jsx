import React from 'react'
import classes from "./CategoriesBlock.module.scss"
import Container from '../../layout/Container'
import categories from '../../routes/categories'


const CategoriesBlock = () => {
  return (
    <Container className={classes["categories"]}>
        {categories.map(category => (
            <div className={classes['categories__item']}>
                <img className={classes["categories__image"]} src={category.img} alt={category.text} />
                <a className={classes["categories__button"]} href={category.link}>{category.text}</a>
            </div>
        ))}
    </Container>
  )
}

export default CategoriesBlock