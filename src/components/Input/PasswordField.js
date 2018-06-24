import React, { PureComponent, Fragment } from 'react';

class PasswordField extends PureComponent {
  state = {
    type: this.props.type,
  }

  toggle = () => {
    const { type } = this.state;

    this.setState({
      type: type === 'password' ? 'text' : 'password',
    });
  }
  render() {
    const { type } = this.state;
    const { input = {}, ...other } = this.props;

    return (
      <Fragment>
        <input
          {...input}
          {...other}
          type={type}
        />
        <span
          className="Trigger"
          onClick={this.toggle}
        >
          {type === 'password' ? 'Show' : 'Hide'}
        </span>
      </Fragment>
    );
  }
}

export default PasswordField;
