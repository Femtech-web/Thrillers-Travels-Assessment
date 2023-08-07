/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import Slider from 'react-slick';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

import { searchResults } from '../../dummy';
import { useCustomState } from '../../responsive';
import ResultBar from './ResultsBar/ResultBar';
import styles from './style';


const Result = () => {
    const  [ activePage, setActivePage ] = useState(1);

    const [mobile] = useCustomState();
    const pages = 3;

    const handlePagination = (pageIndex) => {
        setActivePage(pageIndex);
    }
    
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    initialSlide: 0,
    arrows: mobile ? false : true
  };
  return (
    <div className='mt-8'>
        {!mobile
            ? <div> 
            {searchResults.map((result, index) => (
                <ResultBar key={index} {...result} />
                ))}

                <div className='flex mt-6'>
                <span className={styles.pagination()}><MdOutlineKeyboardArrowLeft /></span>
                {Array(pages).fill(null).map((page, index) => (
                    <span key={index} className={styles.pagination(index, activePage)} 
                    onClick={() => handlePagination(index + 1)}>{index + 1}
                    </span>
                ))}
                <span className={styles.pagination()}><MdOutlineKeyboardArrowRight /></span>
                </div>
            
            </div>
            : <div className='mb-12'>
                <Slider {...settings}>
                {searchResults.map((result, index) => (
                    <ResultBar key={index} {...result} />
                ))}
            </Slider>
            </div>
        }
  </div>
  )
}

export default Result