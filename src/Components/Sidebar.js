import React from 'react'
import { Link } from 'react-router-dom'
import { MdHomeFilled, MdOutlineSubscriptions, MdOutlineVideoLibrary, MdHistory, MdOutlineWatchLater,MdOutlineShoppingBag,MdOutlineMusicNote,MdOutlineSettings,MdOutlinedFlag,MdOutlineHelpOutline } from 'react-icons/md'
import { AiOutlinePlayCircle, AiOutlineLike } from 'react-icons/ai'
import { RxVideo } from 'react-icons/rx'
import {HiFire} from 'react-icons/hi'
import {FiRadio} from 'react-icons/fi'
import {GrGamepad} from 'react-icons/gr'
import {RiFeedbackLine} from 'react-icons/ri'
import { useSelector } from 'react-redux'


const Sidebar = () => {
//step-6 subscribe the isMenuOpen
const isMenuOpen= useSelector((store)=>store.app.isMenuOpen)

  if (!isMenuOpen) return (
    <div>
       <ul className='py-3 flex flex-col gap-5 '>
        {/* <Link to="/"> */}
        <li className='flex flex-col gap-1 items-center text-xs '><MdHomeFilled /><span> Home</span></li>
        {/* </Link> */}
        <li className='flex flex-col gap-1 items-center text-xs '><AiOutlinePlayCircle /><span> Shorts</span></li>
        <li className='flex flex-col gap-1 items-center text-xs pl-2'><MdOutlineSubscriptions /><span>Subscriptions</span></li>
      </ul>
    </div>
  )

  return (
    <div className='overflow-y-auto h-screen Sidebar '>
      {/*-----------------------------------------List 1-------------------------------  */}
      <ul className='border-b'>
        {/* <Link to="/"> */}
        <li className='flex p-2 items-center px-4 '><MdHomeFilled /><span className='pl-3'> Home</span></li>
        {/* </Link> */}
        <li className='flex p-2 items-center px-4 '><AiOutlinePlayCircle /><span className='pl-3'> Shorts</span></li>
        <li className='flex p-2 items-center px-4'><MdOutlineSubscriptions /><span className='pl-3'>Subscriptions</span></li>
      </ul>

      {/*-----------------------------------------List 2-------------------------------  */}
      <ul className='border-b'>
        <li className='flex p-2 items-center px-4'><MdOutlineVideoLibrary /><span className='pl-3'>Library</span></li>
        <li className='flex p-2 items-center px-4'><MdHistory /><span className='pl-3'> History</span></li>
        <li className='flex p-2 items-center px-4'><RxVideo /><span className='pl-3'> Your Video</span></li>
        <li className='flex p-2 items-center px-4'><MdOutlineWatchLater /><span className='pl-3'> Watch Later</span></li>
        <li className='flex p-2 items-center px-4'><AiOutlineLike /><span className='pl-3'> Liked Video</span></li>
      </ul>

      {/*-----------------------------------------Explore-------------------------------  */}
      <ul className='border-b'>
      <h1 className='px-4 text-lg font-medium p-2'>Explore</h1>
      <li className='flex p-2 items-center px-4'>  <HiFire/>  <span className='pl-3'>Trending</span></li>
      <li className='flex p-2 items-center px-4'> <MdOutlineShoppingBag/><span className='pl-3'> Shopping</span></li>
      <li className='flex p-2 items-center px-4'> <MdOutlineMusicNote/>   <span className='pl-3'>Music </span></li>
      <li className='flex p-2 items-center px-4'><FiRadio/>    <span className='pl-3'>Live </span></li>
      <li className='flex p-2 items-center px-4'> <GrGamepad/>   <span className='pl-3'>Game </span></li>
      </ul>
       
      <ul className='border-b'>
      <li className='flex p-2 items-center px-4'><MdOutlineSettings /><span className='pl-3'> Setting</span></li>
        <li className='flex p-2 items-center px-4'><MdOutlinedFlag /><span className='pl-3'> Report history</span></li>
        <li className='flex p-2 items-center px-4'><MdOutlineHelpOutline /><span className='pl-3'> Help</span></li>
        <li className='flex p-2 items-center px-4'><RiFeedbackLine/><span className='pl-3'> Send feedback</span></li>
      </ul>
      <p className='text-xs font-bold text-start pl-4 pt-2 text-neutral-600 '>About Press Copyright </p>
      <p className='text-xs font-bold text-start pl-4  text-neutral-600 '>Contact us CreatorAdvertise </p>
      <p className='text-xs font-bold text-start pl-4  text-neutral-600 mb-2'>Developers</p>
    </div>
  )
}

export default Sidebar
