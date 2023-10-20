import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

import classes from './Header.module.scss'
import Container from '../../layout/Container'
import logo from "../../images/logo.png"

import categories from "../../routes/categories"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className={classes["header"]}>
            <Container className={classes["header__container"]}>
                <Link to="/" className={classes["header__logo"]}>
                    <img src={logo} alt="" />
                </Link>
                <FontAwesomeIcon icon={faHeart} className={classes["header__heart"]} />
                <FontAwesomeIcon icon={faBagShopping} className={classes["header__bag"]} />
            </Container>
            <Container>
                <ul className={classes["header__list"]}>
                    {categories.map(({ link, text }) => (
                        <li key={link}>
                            <Link to={link} className={classes['header__link']}>{text}</Link>
                        </li>
                    ))}
                </ul>
            </Container>
        </header>
    )
}

export default Header