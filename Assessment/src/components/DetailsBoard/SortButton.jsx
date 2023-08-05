/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react';
import styles from './style';

const SortButton = ({ text, isActive, handleClick }) => {
  return (
    <button type='button' className={styles.btn(isActive)} onClick={handleClick}>{text}</button>
  )
}

export default SortButton