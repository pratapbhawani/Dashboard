import React from 'react'
import 
 {BsUiChecksGrid, BsSearch, BsJustify}
 from 'react-icons/bs'
 import { MdShoppingBasket } from "react-icons/md";
 import { RiBarChartGroupedLine } from "react-icons/ri";
 import { PiDiamondsFourBold } from "react-icons/pi";

export default function Header({OpenSidebar}) {
  return (
    <header className='header'>
      <div className='menu-icon'>
          {/* <BsJustify className='icon'/> */}
          <BsJustify className='icon' onClick={OpenSidebar}/>
      </div>
      <div className='header-left'>
          
      </div>
      <div className='header-right'>
          <div className="icon-box"><BsSearch  className='icon'/></div>
          <div className="icon-box"><PiDiamondsFourBold className='icon'/></div>
          <div className="icon-box"><RiBarChartGroupedLine className='icon'/></div>
          <div className="icon-box"><MdShoppingBasket className='icon'/></div>
          <div className="icon-box"><BsUiChecksGrid className='icon'/></div>
          <div className="icon-box">Nick Thomas</div>
          <div className="icon-box users-icon"><p>N</p></div>
      </div>
  </header>
  )
}
