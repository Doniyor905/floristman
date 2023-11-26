import React from 'react';
import classes from "./CartItems.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { addOne, removeFromCart, removeOne } from '../../redux/cart';


const CartItems = ({ images, name, id, quantity, price }) => {
    const dispatch = useDispatch()
    const totalPrice = price * quantity;

    const handleRemove = () => dispatch(removeFromCart(id))
    const handlePlus = () => dispatch(addOne(id))
    const handleMinus = () => dispatch(removeOne(id))

    return (
        <div className={classes['cart-items']}>
            <img src={images[0]} className={classes["cart-items__image"]} alt={name} />
            <p className={classes["cart-items__name"]}>{name}</p>
            <FontAwesomeIcon onClick={handleRemove} className={classes['cart-items__trash']} icon={faTrashCan} />
            <div className={classes['cart-items__controller']}>
                <button onClick={handleMinus}>-</button>
                {quantity}
                <button onClick={handlePlus}>+</button>
            </div>
            <p className={classes['cart-items__totalPrice']}>{totalPrice} $</p>
        </div>
    )
}

export default CartItems