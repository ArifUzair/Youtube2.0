import {IoIosCheckmarkCircle} from "react-icons/io"

const SuggestionCard = ({ info }) => {
    console.log(info, 'info')
    const { snippet, statistics } = info
    
    const viewCount = FormatedCount(statistics?.viewCount)

   function FormatedCount(value){
        let newValue=value
        if (value>= 1000000){
            newValue= Math.floor(value/1000000)+ 'M';
        }else if (value>=1000){
            newValue =Math.floor(value/1000)+'K'
        }
        return newValue
   }

    return (
        <>
            <div className="mainContainer my-2 flex max-w-md gap-2  cursor-pointer w-full border">
                <div className="w-40 ">
                    <img  className='rounded-lg w-full' src={snippet?.thumbnails?.medium?.url} alt={snippet?.title} />
                </div>
                <div className="w-[270px] mx-auto ">
                    <h2 className="text-sm  font-medium word-wrap w- ">{snippet?.title.slice(0,60)+'...'}</h2>
                    <div className="flex gap-1">
                <p className="text-xs mt-1 text-[#606060] font-medium ">{snippet?.channelTitle} </p>
                <p className='mt-1 opacity-70 text-xs '><IoIosCheckmarkCircle /></p>
                </div>
                    <p className="text-xs  font-medium text-[#606060]">{viewCount}</p>
                </div>
            </div>
        </>
    )
}

export default SuggestionCard