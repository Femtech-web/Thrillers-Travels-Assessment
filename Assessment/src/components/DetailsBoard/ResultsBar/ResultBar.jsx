/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import styles from './style';

const ResultBar = ({logo, departTime, arriveTime, stops,totalTime, price}) => {
  return (
    <div  className={styles.container}>
        <div className={styles.logoCont}>
            <img src={logo} alt="logo" className='w-fit' />
        </div>

        <div className={styles.detailsCont}>
            <div className={styles.details}>
                <div>
                    <h2 className={styles.header}>Depart</h2>
                    <p className=''>{departTime.date}</p>
                    <p className='font-semibold'>{departTime.time}</p>
                </div>

                <div className={styles.stopsCont}>
                    <button className={styles.stopBtn(stops)}>{stops} {stops > 1 ? 'stops' : 'stop'}</button>
                    <p className='text-[0.7rem]'>{totalTime}</p>
                </div>

                <div>
                    <h2 className={styles.header}>Arrive</h2>
                    <p>{arriveTime.date}</p>
                    <p className='font-semibold'>{arriveTime.time}</p>
                </div>
            </div>

            <div className={styles.priceCont}>
                <h2 className={styles.header}>price</h2>
                <p className='font-semibold text-xl'>$ {price}</p>
            </div>
        </div>
    </div>
  )
}

export default ResultBar