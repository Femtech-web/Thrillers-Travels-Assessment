/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import Slider from 'react-slick';
import { BsArrowRight } from 'react-icons/bs';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

import styles from './style';
import { searchResults, sortButtons } from '../../dummy';
import { useCustomState } from '../../responsive';
import ResultBar from './ResultsBar/ResultBar';
import SortButton from './SortButton';

const Details = () => {
  const [mobile] = useCustomState();
  const [ activeButton, setActiveButton ] = useState('RECOMMENDED');
  const  [activePage, setActivePage ] = useState(1);
  const pages = 3;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    initialSlide: 0,
    arrows: mobile ? false : true
  };

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  }
  
  const handlePagination = (pageIndex) => {
    setActivePage(pageIndex);
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerCont}>
        <div>
          <h1 className={styles.search}>Search results</h1>
          <p className={styles.searchP}>We found 15 results</p>
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

      <div className='mt-6'>
        <p className={styles.route}>LONDON 
        <BsArrowRight className={styles.arrow} /> NEW YORK</p> 
      </div>

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
    </div>
  )
}

export default Details