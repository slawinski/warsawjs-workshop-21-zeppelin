import React from 'react'
import classnames from 'classnames';
import './InputGroup.css';

const InputGroup = ({ className, children }) => (
  <div className={classnames('InputGroup', className)}>
    {children}
  </div>
);

export default InputGroup;
