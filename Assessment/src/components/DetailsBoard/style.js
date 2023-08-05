import genStyles from '../GenStyles';

const style = {
    container: `${genStyles.pagePad2} md:w-[65%] w-full bg-mainBg`,
    headerCont: 'flex md:flex-row flex-col md:justify-between justify-start',
    search: 'md:text-2xl text-lg font-semibold',
    searchP: 'text-[0.8rem] font-thin',
    btnCont: 'flex items-start md:mt-0 mt-2 flex-wrap',
    btn: (isActive) => `${isActive ? 'bg-submitBtn text-white' : 'bg-white'} ${genStyles.flexCenter} px-6 text-sm py-2 mr-3 md:mt-0 mt-4 rounded-full`,
    route: `${genStyles.flexBtw} font-bold md:text-2xl text-lg flex-wrap`,
    arrow: 'inline-block mx-6',
    pagination: (index, activePage) => `${genStyles.flexCenter} ${index + 1 === activePage ? 'bg-submitBtn text-white' : 'bg-white'} rounded-md mx-1 px-2 cursor-pointer`
}

export default style;