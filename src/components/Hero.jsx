import React, { Component } from 'react'
import { FaPlay } from "react-icons/fa";
export default class Hero extends Component {
  render() {
    return (
        <div className='bg-hero bg-no-repeat bg-center'>
        <section className='container px-[120px] pt-[147px] pb-[166px]'>
            <div className='w-[397px] relative'>
                <h1 className='font-[400] text-[54px] leading-[93px] text-whiteText mb-[22px]'>Enjoy Your Morning Coffee.</h1>
                <p className='font-[500] text-[15px] leading-[36px] text-[#CECECE] mb-[34px]'>The coofee is brewed by fist roasting the green coffee beans over hot coals in brazier. given to Opportunity</p>
                    <button className='bg-text text-whiteText w-[200px] p-[12px]'>Test Coffee</button>
                    <div className='absolute left-[800px] bottom-[0px] w-[100px] flex flex-col items-center gap-[10px]'>
                        <FaPlay className='text-[30px] text-white border-[1px] border-white rounded-full p-[10px]'/>
                        <span className='text-white font-[500] text-[15px] uppercase leading-[24px]'>Play Video</span>
                    </div>
            </div>
        </section>
        </div>
    )
  }
}
