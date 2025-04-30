import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import {Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button >

    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const { activeMenu, setActiveMenu} = useStateContext();
  return (
    <div className='flex justify-between p-2 md:mx-6 relative' >
      <NavButton title="Menu" customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color="brown" icon={<AiOutlineMenu/>}/>
    </div>
  )
}

export default Navbar
