/* eslint-disable react/prop-types */

import styles from './style';

const NavigationTab = ({ icon, transportType, handleClick, isActive}) => {
    return (
        <div className={`${styles.navTab} ${isActive ? styles.active : styles.inActive}`} onClick={handleClick}>
            {icon}
            <p className='mt-2 text-sm'>{transportType}</p>
        </div>
    )
}

export default NavigationTab