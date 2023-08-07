/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';

import styles from './style';
import SortButton from './SortButton';
import Result from './Result';
import { sortButtons } from '../../dummy';

const Details = () => {
  const [ activeButton, setActiveButton ] = useState('RECOMMENDED');
  
  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerCont}>
        <div>
          <h1 className={styles.search}>Search results</h1>
          <p className={styles.searchP}>We found 5 results</p>
        </div>

        <div className={styles.btnCont}>
          {sortButtons.map((button, index) => (
            <SortButton key={index} 
              text={button} 
              isActive={button === activeButton} 
              handleClick={() => handleClick(button)}
            />
          ))}
        </div>
      </div>

      <div className='w-fit mt-6'>
        <p className={styles.route}>LONDON 
        <BsArrowRight className={styles.arrow} /> NEW YORK</p> 
      </div>
      
      <Result />
    </div>
  )
}

export default Details