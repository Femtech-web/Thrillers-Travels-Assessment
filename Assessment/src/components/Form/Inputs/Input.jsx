/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import styles from './styles';

const Input = ({icon, label, value, type, inputStyles, contStyles }) => {
  return (
    <div className={`${styles.inputCont} ${contStyles}`}>
      <label>{label}</label>
      <input 
          type={type}
          value={value}
          className={`${styles.input} ${inputStyles}`}
      />
      <div className={styles.icon}>{icon}</div>
    </div>
  )
}

export default Input