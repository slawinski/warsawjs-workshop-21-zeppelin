import React from 'react'
import classnames from 'classnames'
import './CheckInput.css'

const CheckInput = ({
  className,
  disabled,
  input = {},
  children,
  ...other
}) => {
  return (
    <label
      className={classnames('CheckboxLabel', className, { Disabled: disabled })}
      htmlFor={other.id}
    >
      <input
        className="CheckboxInput"
        disabled={disabled}
        {...input}
        {...other}
      />
      <span className="Indicator" />
      {children}
    </label>
  )
}

export default CheckInput
