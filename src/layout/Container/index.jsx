import React from 'react'
import classes from "./Container.module.scss"
import classNames from 'classnames'

const Container = ({ className, children }) => {
    return (
        <div className={classNames(classes['container'], className)}>{children}</div>
    )
}

export default Container