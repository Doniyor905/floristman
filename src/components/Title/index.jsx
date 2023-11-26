import React from 'react'
import classes from "./Title.module.scss"
import classNames from 'classnames'

const Title = ({children, className}) => {
  return (
    <div className={classNames(classes['title'], className)}>{children}</div>
  )
}

export default Title