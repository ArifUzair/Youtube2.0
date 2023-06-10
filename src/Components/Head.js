
import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/appSlice"

const Head = () => {
  //step-5 useDispatch
  const dispatch= useDispatch()

  const toggleMenuHandler=()=>{
      dispatch(toggleMenu())
  }

  return (
    <div className='flex justify-between p-1 m-1 shadow-sm '>
      <div className='flex '>
        <img  onClick={()=>toggleMenuHandler()} className='h-3 sm:h-6  my-auto cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyFGZmFfQWrVXrdtp54fXbrvWy26g5G7LRol7MYwL2DMPv4LmFzZME_4lQRLT_fIqSTTU&usqp=CAU" alt="hamburger Menu" />
        <img className='h-8 sm:h-10 my-auto mx-2 sm:mx-5' src="https://logos-world.net/wp-content/uploads/2020/05/YouTube-Logo.jpg" alt="Youtube Logo" />
      </div>
      <div className='flex h-10 mt-1 pt-[2px]   '>
        <input className='w-[150px] sm:w-[500px] border rounded-s-full px-5 py-1' type="text  " placeholder='Search' />
        <button className=''>
          <img className='h-9  sm:h-[38px] py-2 pl-6 pr-3  border rounded-e-full hover:bg-gray-200  bg-gray-100' src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png" alt="" />
        </button>
      </div>
      <div className=' sm:w-20 '>
        <img className='h-10 ' src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt="user Icon" />
      </div>
    </div>
  )
}

export default Head