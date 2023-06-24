
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YouTube_search_API } from "../utils/api";
import { CiSearch } from "react-icons/ci"
import { Link } from "react-router-dom";

const Head = () => {
  const [search, setSearch] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [focus, setFocus] =useState()


  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200)
    return () => {
      clearTimeout(timer)
    }
  }, [search])


  const getSearchSuggestion = async () => {
    const data = await fetch(YouTube_search_API + search)
    const response = await data.json()
    setSuggestions(response[1])
  }

  //how things work here- 
  /*
  * key i press 
  * -Render the component
  *- useEffect()
  * - start timer => make api call after 200ms
  *
  * KEY IP 
  *- destroy the component (useEffect return method )
  * - re-render the component
  * - useEffect()
  * - start timer => make api call after 200ms
  *  setTimeout(200) - make an Api call after 200
  *
  */


  //step-5 useDispatch
  const dispatch = useDispatch()

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }

  return (
    <div className='flex justify-between p-1 m-1 shadow-sm '>
      <div className='flex '>
        <img onClick={() => toggleMenuHandler()} className='h-3 sm:h-6  my-auto cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyFGZmFfQWrVXrdtp54fXbrvWy26g5G7LRol7MYwL2DMPv4LmFzZME_4lQRLT_fIqSTTU&usqp=CAU" alt="hamburger Menu" />
        <img className='h-8 sm:h-10 my-auto mx-2 sm:mx-5 cursor-pointer' src="https://logos-world.net/wp-content/uploads/2020/05/YouTube-Logo.jpg" alt="Youtube Logo" />
      </div>
      <div>
        <div className='flex h-10 mt-1 pt-[2px] relative  '>

          <input className='  w-[150px] sm:w-[500px] border rounded-s-full px-5 py-1' type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} value={search} 
           onFocus={()=>setFocus(true)}
           onBlur={()=>setFocus(false)}
           />
          <button className=''>
            <img className='h-9  sm:h-[38px] py-2 pl-6 pr-3  border rounded-e-full hover:bg-gray-200  bg-gray-100' src="https://cdn-icons-png.flaticon.com/512/3917/3917132.png" alt="" />
          </button>
          {
            focus && suggestions.length>0 &&
            <div className="border border-gray-300   absolute w-[32rem] rounded-2xl p-3 pb-4  top-full bg-white  ">
              <ul>
                {
                  
                  suggestions.map((suggest) =>{
                 return  <li  className="flex items-center gap-3 mb-1  hover:bg-gray-100 cursor-default  "> <CiSearch /> {suggest}</li>
                  })
                }
              </ul>
            </div>
          }
        </div>

      </div>

      <div className=' sm:w-20 '>
        <img className='h-10 ' src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt="user Icon" />
      </div>
    </div>
  )
}

export default Head