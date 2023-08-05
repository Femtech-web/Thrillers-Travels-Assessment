/* eslint-disable no-unused-vars */

import genStyles from '../../GenStyles';

const style = {
    container: `${genStyles.flexStart2} p-4 md:flex-row flex-col hover:shadow-2xl bg-white rounded-lg my-4 shadow-md text-sm md:mx-0 mx-2`,
    logoCont: 'md:w-[20%] w-[40%] my-4 md:my-0  mr-8',
    detailsCont: 'flex md:flex-row flex-col justify-evenly w-[80%] mt-4 md:mt-0',
    details: 'flex justify-between md:w-1/2 w-full',
    header: 'text-[0.7rem] mb-2',
    stopsCont: 'flex flex-col justify-center items-center',
    stopBtn: (stops) => `${stops >= 1 ? 'bg-red-400' : 'bg-stopBtn'} ${genStyles.flexCenter} rounded-full mb-2 py-0.5 px-4 text-white`,
    priceCont: 'flex flex-col items-center md:mt-0 mt-4'
}

export default style;