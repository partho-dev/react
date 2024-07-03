import React from 'react'

const Ratings = ({above4,bellow4, fiveStar })=>{
    return (
        <>
            <button className=' m-2 bg-slate-400 rounded-md ' onClick={()=>{above4()}} > Above 4.5</button>
            <button className=' m-2 bg-slate-400 rounded-md ' onClick={()=>{bellow4()}} > Below 4.5</button>
            <button className=' m-2 bg-slate-400 rounded-md ' onClick={()=>{fiveStar()}} > 5** items</button>
        </>
    )
}
export default Ratings