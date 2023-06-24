import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { closeMenu } from "../utils/appSlice"
import SuggestedVideo from "./SuggestedVideos"


const WatchContainer=()=>{
    const [videos,setVideos]=useState([])
    const [searchParam]= useSearchParams()
   const dispatch=useDispatch()
     useEffect(()=>{
        dispatch((closeMenu()))
     })

    useEffect(()=>{
        // getVideos()
    },[])

    // const getVideos= async()=>{
    //     const data = await fetch('www.youtube.com/embed/'+searchParam.get('v'))
    //     setVideos(data)
    // }
    return(         
        <>
        <div className="mainContainer flex gap-10 ">
        <div className="iframeContainer border border-red-100 ">
         <iframe className=" mt-2" width="660" height="315" src={"https://www.youtube.com/embed/"+ searchParam.get('v')} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
         </div>
         <div className="container w-full">
         <SuggestedVideo/>
         </div>
         </div>
        </>
    )
}
export default WatchContainer