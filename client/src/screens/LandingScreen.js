import React from 'react'
import {Link} from 'react-router-dom'

function LandingScreen() {
  return (
    <>
    <div className='background'></div>
    <div className='row text-container'>
      <div className='col-md-12 text-center hello'>
      <h2 style={{color:'beige' , fontSize:'80px',fontWeight:'bold',color:"white"}}><b>GetSetBooking</b></h2>
      <header className='header'>
      <div class="waviy">
      <span style={{"--i":1}}>N</span>
   <span style={{"--i":2}}>I</span>
   <span style={{"--i":3}}>C</span>
   <span style={{"--i":4}}>E</span>
   <span style={{"--i":5}}>,</span>
   <span style={{"--i":6}}>F</span>
   <span style={{"--i":7}}>U</span>
   <span style={{"--i":8}}>N</span>
   <span style={{"--i":9}}>F</span>
   <span style={{"--i":10}}>F</span>
   <span style={{"--i":11}}>U</span>
   <span style={{"--i":12}}>L</span>
   <span style={{"--i":13}}>L</span>
   <span style={{"--i":14}}>,</span>
   <span style={{"--i":15}}>E</span>
   <span style={{"--i":16}}>X</span>
   <span style={{"--i":17}}>P</span>
   <span style={{"--i":18}}>E</span>
   <span style={{"--i":19}}>R</span>
   <span style={{"--i":20}}>I</span>
   <span style={{"--i":21}}>E</span>
   <span style={{"--i":22}}>N</span>
   <span style={{"--i":23}}>C</span>
   <span style={{"--i":24}}>E</span>
   </div>
   </header>

      <Link to="/home">
      <button className='btn landingbtn'> <b>Get Started</b></button>

      </Link>
      </div>
      
    </div>
    </>
  )
}

export default LandingScreen
