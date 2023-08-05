/* eslint-disable no-unused-vars */

import styles from '../GenStyles';

const style = {
    container: 'md:w-[35%] w-full bg-formBg min-h-screen',
    logo: 'font-bold text-lg',
    navTab: `${styles.flexCenter} cursor-pointer flex-col flex-1 py-3 px-8 mr-1`,
    active: 'bg-activeTab text-white shadow-xl',
    inActive: 'bg-white hover:shadow-xl',
    hero: 'text-2xl leading-8 mb-6',
    heroSpan: 'font-bold text-2xl',
    space: 'flex-1 pl-4',
    btn: `${styles.flexCenter} animation py-4 mt-10 rounded-md w-full text-white bg-submitBtn`,
}

export default style;