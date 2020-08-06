import React from 'react';
import Name_bla from './Aloha.module.css';

const Aloha = props => {
  const { name, isGreeting = true } = props;
  return (
    <div className={styles.container}>
      {isGreeting ? 'hello' : 'Goodbye'} {name}
    </div>
  );
};

export default Aloha;
