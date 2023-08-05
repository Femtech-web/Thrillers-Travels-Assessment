/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { MdOutlineFlightLand, MdOutlineFlightTakeoff, MdFlightClass } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';

import styles from './style';
import genStyles from '../GenStyles';
import Input from './Inputs/Input';
import { navigations } from '../../dummy';
import NavigationTab from './NavigationTab';


const Form = () => {   
    const [activeTab, setActiveTab ] = useState('Flight');

    const handleClick = (tab) => {
       setActiveTab(tab)
    }

  return (
    <div className={styles.container}>
        <div className={`${genStyles.pagePad} mb-2`}>
            <p className={styles.logo}>Tickets
            <span className='logo-border'>4U</span></p>
        </div>
        <div className='flex'>
            {navigations.map((navigation, index) => (
                <NavigationTab key={index} {...navigation} 
                 handleClick={() => handleClick(navigation.transportType)} 
                 isActive={activeTab === navigation.transportType}
                />
            ))}
        </div>

        <div className={genStyles.pagePad}>
            <h1 className={styles.hero}>Best flight deals with <br /> 
                <span className={styles.heroSpan}>Ticket4U</span>
            </h1>

            <form>
                <Input 
                    label='Depart From'
                    type='text'
                    value="London-All Airports, England, UK" 
                    icon={<MdOutlineFlightTakeoff />}
                />

                <Input 
                    label='Arrive at'
                    type='text'
                    value="New York-All Airports, New York, USA" 
                    icon={ <MdOutlineFlightLand />}
                />
               
                <div className={genStyles.flexBtw}>
                    <Input 
                        label='Departure Date'
                        type='date'
                        value="" 
                        inputStyles={styles.space}
                        contStyles='w-1/2 mr-4'
                    />

                    <Input 
                        label='Return Date'
                        type='date'
                        value="" 
                        inputStyles={styles.space}
                        contStyles='w-1/2 '
                    />
                </div>

                <div className='flex'>
                    <Input 
                        label='Class'
                        type='text'
                        value="Economy" 
                        contStyles='w-[65%] mr-4'
                        icon={<MdFlightClass />}
                    />
                    <Input 
                        label='Class'
                        type='text'
                        value="2" 
                        contStyles='w-[35%]'
                        icon={<BsFillPersonFill />}
                    />
                </div>

                <button type='button' className={styles.btn}>FIND FLIGHT</button>
            </form>
        </div>
    </div>
  )
}

export default Form