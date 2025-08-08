import React from 'react'
import { FaStar } from 'react-icons/fa6'

 export default function SharedComponent({bgColor,color}) {
     return (
        
        <div className='d-flex justify-content-center align-items-center gap-3'>
            <div style={{ backgroundColor: bgColor, height: '3px', width: '100px' }}></div>
            <span ><FaStar color={color}></FaStar></span>
            <div style={{backgroundColor:bgColor,height:'3px',width:'100px'}}></div>
        </div>
    )
} 
