import { MdOutlineFlight, MdOutlineDirectionsTransitFilled } from 'react-icons/md';
import { FaShip } from 'react-icons/fa';
import { IoCarSport } from 'react-icons/io5'

import britishLogo from './assets/british.png';
import americanLogo from './assets/american.png';
import unitedLogo from './assets/united.png';


export const navigations = [
    {
        icon: <MdOutlineFlight fontSize={20}/>,
        transportType: 'Flight',
    },
    {
        icon: <MdOutlineDirectionsTransitFilled fontSize={20}/>,
        transportType: 'Trans',
    },
    {
        icon: <FaShip fontSize={20}/>,
        transportType: 'Ship',
    },
    {
        icon: <IoCarSport fontSize={20}/>,
        transportType: 'Cars',
    },
]

export const sortButtons = [
    'CHEAPEST', 'SHORTEST', 'RECOMMENDED'
]

export const searchResults = [
    {
        logo: britishLogo,
        departTime: {
            date: '11/11/2019', 
            time: '7:34pm'
        },
        arriveTime: {
            date: '12/11/2019', 
            time: '2:45pm'
        },
        stops: 0,
        totalTime: '8 hours 28 mins',
        price: 856
    },
    {
        logo: americanLogo,
        departTime: {
            date: '11/11/2019', 
            time: '12:24pm'
        },
        arriveTime: {
            date: '12/11/2019', 
            time: '1:21pm'
        },
        stops: 0,
        totalTime: '8 hours 45 mins',
        price: 980
    },
    {
        logo: unitedLogo,
        departTime: {
            date: '11/11/2019', 
            time: '1:12pm'
        },
        arriveTime: {
            date: '12/11/2019', 
            time: '3:56pm'
        },
        stops: 1,
        totalTime: '12 hours 57 mins',
        price: 1012
    },
    {
        logo: americanLogo,
        departTime: {
            date: '11/11/2019', 
            time: '6:21pm'
        },
        arriveTime: {
            date: '12/11/2019', 
            time: '8:45pm'
        },
        stops: 0,
        totalTime: '9 hours 42 mins',
        price: 908
    },
    {
        logo: unitedLogo,
        departTime: {
            date: '11/11/2019', 
            time: '12:34pm'
        },
        arriveTime: {
            date: '12/11/2019', 
            time: '3:06pm'
        },
        stops: 0,
        totalTime: '8 hours 25 mins',
        price: 756
    }
]
