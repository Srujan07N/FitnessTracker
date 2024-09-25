import React from 'react'
import Image from '../../assets/PS.png';

export default function Hreo1() {
  return (
    <>
      <div style={{width:'100%',height:'500px',display:'flex',justifyContent:'space-around'}}>
        <div style={{marginTop:'50px'}}>
            <h1 style={{fontSize:'100px'}}>SK Products</h1>
            <p style={{fontSize:'20px'}}>The right Home solution for you</p>
        </div>
        <div style={{marginTop:'50px'}}>
            <img style={{width:'500px'}} src={Image} alt="" srcset="" />
        </div>
      </div>
    </>
  )
}
