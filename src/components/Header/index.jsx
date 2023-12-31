import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

import classes from './Header.module.scss'
import Container from '../../layout/Container'
import logo from "../../images/logo.png"

import categories from "../../routes/categories"
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { getItemsCount } from '../../redux/cart'

const Header = () => {
    const location = useLocation();
    const cartItemsCount = useSelector(getItemsCount)
    return (
        <header className={classes["header"]}>
            <Container className={classes["header__container"]}>
                <Link to="/" className={classes["header__logo"]}>
                    <img src={logo} alt="" />
                </Link>
                <Link to="/favorite">
                    <FontAwesomeIcon icon={faHeart} className={classes["header__heart"]} />
                </Link>
                <Link to={"/cart"} className={classes["header__bag-wrapper"]}>
                    <FontAwesomeIcon icon={faBagShopping} className={classes["header__bag"]} />
                    {Boolean(cartItemsCount) && <p className={classes["header__bag-count"]}>{cartItemsCount}</p>}
                </Link>
            </Container>
            <Container>
                <ul className={classes["header__list"]}>
                    {categories.map(({ link, text }) => (
                        <li key={link}>
                            <Link to={link} className={location.pathname === link ? classNames(classes['header__link'], classes['active']) : classes['header__link']}>{text}</Link>
                        </li>
                    ))}
                </ul>
            </Container>
        </header>
    )
}

export default Header