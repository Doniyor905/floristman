import React from 'react'
import classes from "./ProductCard.module.scss"
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular} from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons';

const ProdcutCard = ({ className, data }) => {
    const [image] = data.images;
    const [selected, setSelected] = React.useState(false);

    const selectItem = () => {
        setSelected((prevState) => !prevState)
    }
    return (
        <div className={classNames(classes["card"], className)}>
            <img src={image} className={classes['card__image']} alt="" />
            <h3 className={classes["card__title"]}>{data.name}</h3>
            <p className={classes["card__price"]}>{data.price} USD.<span className={classes['card__discount']}>{data.discount} USD.</span></p>
            <button onClick={selectItem} className={classNames(classes["card__button"], selected && classes["card__button_selected"])}>{selected ? "Added" : "Add to Cart"}</button>
            <button className={classes["card__like"]}><FontAwesomeIcon icon={faHeartRegular}/></button>
        </div>
    )
}

export default ProdcutCard