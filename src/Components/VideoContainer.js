import { useEffect,useState } from "react"
import { Youtube_api } from "../utils/api"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"


const VideoContainer =()=>{
  const [videos, setVideos]=useState([])
  
   useEffect(()=>{
  getVideos()

   },[])

  const getVideos = async()=>{
    const data = await fetch(Youtube_api)
    const response = await data.json()
   setVideos(response?.items)
  }
    return( videos.length===0?("API Loadingggggggg"):(
        <div className="flex flex-wrap  ">
          {
            videos.map((video)=>{
            return <Link key={video.id} to={"watch?v="+video.id}>  <VideoCard key={video.id} info={video}/> </Link>
            })
          }
            
        </div>
    ))
}

export default VideoContainer