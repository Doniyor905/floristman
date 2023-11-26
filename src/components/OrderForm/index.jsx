import React, { useEffect } from 'react'
import Container from "../../layout/Container"

import orderImg from "../../images/orderImg.png"
import classes from "./OrderForm.module.scss"
import classNames from 'classnames'
import { validateName, validatePhoneContent, validatePhoneNumber, validateText } from './helper'

const initialData = {
  name: "",
  tel: "",
  text: ""
}

const OrderForm = () => {

  const [feilds, setFeilds] = React.useState(initialData)
  const [disabled, setDisabled] = React.useState(true)

  useEffect(() => {
    const isValid = validateName(feilds.name) && validatePhoneNumber(feilds.tel) && validateText(feilds.text)
    setDisabled(!isValid)
  }, [feilds])

  const handleChange = (e) => {
    if(e.target.name === 'tel' && !validatePhoneContent(e.target.value))
    return
    setFeilds((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFeilds(initialData)
  }
  return (
    <Container className={classes["order-form"]}>
      <h2 className={classes["order-form__title"]}>Order A Unique Basket!</h2>
      <form className={classes["order-form__form"]}>
        <div className={classes["order-form__fields"]}>
          <input onChange={handleChange} name="name" value={feilds.name} className={classes['order-form__input']} placeholder='Name*' type="text" />
          <input onChange={handleChange} name="tel" value={feilds.tel} className={classes['order-form__input']} placeholder='Phone Number*' type="tel" />
          <textarea onChange={handleChange} name="text" value={feilds.text} className={classes['order-form__textarea']} placeholder='Your Ideas*'></textarea>
          <button disabled={disabled} onClick={handleSubmit} className={classNames(classes['order-form__button'], {
             [classes['order-form__button_disabled']]: disabled,
          })}>Send</button>
        </div>
        <img className={classes['order-form__image']} src={orderImg} alt="" />
      </form>
    </Container>
  )
}

export default OrderForm