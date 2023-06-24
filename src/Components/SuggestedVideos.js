import { useEffect, useState } from "react";
import { Link, resolvePath } from "react-router-dom";
import { Youtube_api } from "../utils/api"
import SuggestionCard from "./SuggestionCard";

const SuggestedVideo = ()=>{
const [suggest,setSuggest]= useState([])

useEffect(()=>{
    suggestions()
    
},[])

    const suggestions=async()=>{
const data = await fetch (Youtube_api);
const response = await data.json()
setSuggest(response?.items,'resp')
        
    }
    return(
        <>
           <div>
            {
                suggest.map((card)=>{
                    return <Link key={card.id} to={'?v='+card.id} >  <SuggestionCard   info={card} /></Link>
                })
            }
           </div>
        </>
    )
}

export default SuggestedVideo