import React from 'react'
import styles from './Button.css'

const Button = (props) => {
  const {
    label,
    primary,
    secondary,
    ...rest
  } = props
  let color
  if (primary === true) {
    color = 'blue'
  } else if (secondary) {
    color = 'red'
  } else {
    color = 'grey'
  }

  return (
    <span {...rest}
      className={styles[color]}
    >
      {label}
    </span>
  )
}

export default Button
