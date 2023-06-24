const ButtonList =()=>{
    const buttonLists =['All', 'Computer programming','Music','Comedy','Coding', 'Traveling', 'Cars', 'Podcasts' , 'NEWS', 'Driving' ,  'Luxury', 'Money']
    return (
        <>
        <div className="flex gap-2 mt-2 ">
    {buttonLists.map((button,index)=>{
       return <button className=" border  px-3 py-1  rounded-lg text-xs bg-gray-100 box-border " key={index}>{button}</button>
       
    })}
    </div>
        </>
    )
    
}
export default ButtonList