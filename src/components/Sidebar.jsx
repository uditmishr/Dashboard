import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {GiClothes} from 'react-icons/gi';
import {MdOutlineCancel} from 'react-icons/md';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
const Sidebar = () => {
    const {activeMenu,setActiveMenu,screenSize}=useStateContext();
    const handleClosedSideBar=()=>{
        if(activeMenu && screenSize <=900){
            setActiveMenu(false)
        }

    }
    const activeLink='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-slate-500 text-md m-2 font-extrabold tracking-tighter bg-light-gray';

    const normalLink='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-slate-500  font-extrabold tracking-tighter dark:text-gray-200 dark:hover:text-black hover:bg-blue-600 hover:text-white m-2';
  return (
    <div className='ml-3 h-screen md:overfolow-hidden overflow-auto md:hover:overflow-auto pb-10'>
        {activeMenu && (<>
        <div className=' flex justify-between items-center'>
            <Link to="/" onClick={handleClosedSideBar} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'> 
            <GiClothes/> <span> LAUNDRY</span>
            </Link>
            <TooltipComponent content="Menu" position='BottomCenter'>
                <button type="button" onClick={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
                    <MdOutlineCancel/>

                </button>
            </TooltipComponent>

        </div>
        <div className='mt-10'>
            {links.map((item)=>(
                <div key={item.title}>
                    {item.links.map((Link)=>(
                        <NavLink
                            to={`/${Link.name}`}
                            key={Link.name}
                            onClick={handleClosedSideBar}
                            className={({isActive})=>
                                isActive? activeLink :normalLink}
                            >
                            {Link.icon}
                            <span>
                            {Link.name}
                            </span>

                        </NavLink>
                    ))}
                    
                </div>
            ))}


        </div>
        </>)
        }
     </div>
   )
}

export default Sidebar