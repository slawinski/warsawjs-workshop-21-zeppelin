import React from 'react'
import classnames from 'classnames';

import PasswordField from './PasswordField';
import FileField from './FileField';

import './Input.css';

const Input = ({
  className, label, errorName, type = 'text', full, meta = {}, input = {}, ...props
}) => {
  const { touched, error } = meta;
  const hasError = touched && error;
  const inputNameForError = typeof label === 'string'
    ? label
    : errorName
      ? errorName
      : input.name
        ? input.name.replace(/_/g, ' ')
        : 'This field';
  const errorToDisplay = error && `${inputNameForError} ${Array.isArray(error) ? error[0] : error}`;
  const childrenProps = {
    ...props,
    ...input,
    type,
  };

  return (
    <div
      className={classnames(
        'Input',
        className,
        { 'Input--error': hasError },
      )}
    >
      {label && (
        <label>{label}</label>
      )}
      <div
        name={input.name}
        className={classnames(
          'Input__Field',
          type,
          { full },
        )}
      >
        {{
          text: (
            <input {...childrenProps} />
          ),
          file: <FileField {...childrenProps} />,
          password: <PasswordField {...childrenProps} />,
        }[type]}
      </div>
      <span className='Input__Error-box'>{hasError && errorToDisplay}</span>
    </div>
  );
};

export default Input;
