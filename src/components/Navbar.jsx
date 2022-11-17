import React,{useEffect } from 'react';
import {AiOutlineMenu,AiFillPlusCircle} from 'react-icons/ai';
import { BsFillTagFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext} from '../contexts/ContextProvider';

const NavButton =({title, customFunc, icon, color, dotColor})=>(
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={customFunc} style={{color}} className='relative text-xl rounded-full p-3 hover:bg-slate-100'>
      <span style={{background: dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'/>
        {icon}
    </button>
  </TooltipComponent>
)
const Navbar = () => {
  const {activeMenu,setActiveMenu,screenSize, setScreenSize}=useStateContext();
  useEffect(()=>{
    const handleResize=()=> setScreenSize(window.innerWidth);
    
    window.addEventListener('resize',handleResize);
    handleResize();
    return()=>window.removeEventListener('resize',handleResize);
  },[]);
  
  useEffect(()=>{
    if(screenSize<=900){
      setActiveMenu(false);
    }else{
      setActiveMenu(true);
    }
  },[screenSize]);

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title='Menu' customFunc={()=>
      setActiveMenu((prevActiveMenu)=>!prevActiveMenu)} color="white" icon={<AiOutlineMenu/>}
      />
      <div className='flex'>
        <NavButton title='Add' customFunc={()=>{}} color="white" icon={<AiFillPlusCircle/>}
        />
        <NavButton title='Tag' customFunc={()=>{}} color="white" icon={<BsFillTagFill/>}
        />
        <NavButton title='User' customFunc={()=>{}} color="white" icon={<FaUser/>}
        />
        <TooltipComponent content='Language' position='BottomCenter'>
          <div className='flex items-center gap-2 cursor-pointer p-1 hovber:bg-light-gray rounded-lg'>
            <select className=' rounded-md text-xs p-1 font-medium  tracking-tighter text-blue-600'>
            <option value='English'>
              English
            </option>
            <option value='French'>
              French
            </option>
          </select>
          </div>

        </TooltipComponent>
      </div>
      </div>
  )
}

export default Navbar