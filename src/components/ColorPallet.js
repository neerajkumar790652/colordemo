import React from 'react'

const ColorPallet = ({color_name,color_code}) => {
  return (
    <div className='main-container'style={{width:"210px",height:"250px"}}>
        <div className='upper'style={{width:"210px",height:"200px",backgroundColor:`${color_name}`}}></div>
        <div className='lower' style={{width:"210px",}}>
            <h5 className='text'>{color_code}</h5>
            <p style={{color:`${color_code}`}} className="para">{color_name}</p>
        </div>
      
    </div>
  )
}

export default ColorPallet
