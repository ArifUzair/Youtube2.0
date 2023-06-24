import {IoIosCheckmarkCircle} from 'react-icons/io'

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;

  const viewCount = formatedCount(statistics.viewCount)

   function formatedCount(value) {
        let newValue = value
        if (value >= 1000000) {
            newValue = Math.floor(value / 1000000) + 'M';
        } else if (value >= 1000) {
            newValue = Math.floor(value / 1000) + 'K'
        }
        return newValue
    }

    return (

        <div className='py-5 px-2 w-80 '>
            <img className="w-full rounded-xl hover:rounded-none" src={snippet?.thumbnails?.medium?.url} alt={snippet?.title} />
            <div className="flex my-1">
                <img className="h-12 w-12 rounded-full p-1 object-cover" src="https://source.unsplash.com/featured/300x202" alt="channel_logo" />
                <h2 className="font-bold mx-2 my-1'">{snippet?.title.slice(0,50)+"..."}</h2>
            </div>
            <div className='flex'>
                <p className='mx-2 my-0 pl-12'>{snippet?.channelTitle} </p>
                <p className='my-auto opacity-70'><IoIosCheckmarkCircle /></p>
            </div>
            <h1 className='mx-2 -my-1 pl-12'>{viewCount} views</h1><p></p>
        </div>

    )
}

export default VideoCard