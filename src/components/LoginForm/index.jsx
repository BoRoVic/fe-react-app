import React, { Component } from 'react';
import styles from './LoginForm.module.css';
import className from 'classnames';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPass: '',
      isPassValid: null,
    };
  }

  handleEmailChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { userEmail, userPass, isPassValid } = this.state;
    const passClasses = className(styles.input, {
      [styles.inputValid]: isPassValid,
    });

    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <input
          placeholder="your email"
          type="email"
          name="userEmail"
          value={userEmail}
          onChange={this.handleEmailChange}
          className={styles.input}
        />
        <input
          placeholder="your pass"
          type="password"
          name="userEmail"
          value={userPass}
          onChange={this.handleSubmit}
          className={styles.input}
        />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;
