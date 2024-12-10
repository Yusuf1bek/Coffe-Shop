import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import IconLogo from "../assets/images/logo-icon.svg"
export default class Header extends Component {
  render() {
    return (
      <header>
        <div className='flex items-center justify-center gap-[150px] pt-[32px] pb-[33px] container'>
            <ul className='flex items-center justify-center gap-[30px]'>
                <li className='font-[700] text-[18px] leading-[21px] text-whiteText hover:text-text hover:cursor-pointer duration-300'>
                    <Link to={"/"}>Home</Link>
                </li>
                <li className='font-[700] text-[18px] leading-[21px] text-whiteText hover:text-text hover:cursor-pointer duration-300'>About</li>
                <li className='font-[700] text-[18px] leading-[21px] text-whiteText hover:text-text hover:cursor-pointer duration-300'>Menu</li>
                <li className='font-[700] text-[18px] leading-[21px] text-whiteText hover:text-text hover:cursor-pointer duration-300'>Reservation</li>
            </ul>
                <img src={IconLogo} alt="Icon Logo" width={72} height={60} />
            <ul className='flex items-center justify-center gap-[30px]'>
                <li className='font-[700] text-[18px] leading-[21px] text-whiteText hover:text-text hover:cursor-pointer duration-300'>Pages</li>
                <li className='font-[700] text-[18px] leading-[21px] text-whiteText hover:text-text hover:cursor-pointer duration-300'>Shop</li>
                <li className='font-[700] text-[18px] leading-[21px] text-whiteText hover:text-text hover:cursor-pointer duration-300'>Contact</li>
                <li><IoSearch className='text-[22px] text-whiteText hover:text-text hover:cursor-pointer duration-300' /></li>
                <li><FiShoppingBag className='text-[22px] text-whiteText hover:text-text hover:cursor-pointer duration-300' /></li>
            </ul>
        </div>
      </header>
    )
  }
}
