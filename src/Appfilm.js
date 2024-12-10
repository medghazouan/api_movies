import React, { useState } from 'react'
//import Films from './Films'
import SearchMovies from './SearchMovies'
import './films.css'

const Appfilm = () => {
  let [rech,setrech]=useState(false)
  function handelrech() {
    setrech(!rech)
  }
  return (
    <div>
        <div className='header'>
            <img className='logo'  src="/image/Mtech-removebg-preview.png" alt="" />
            <ul className='list'> 
                <li><button onClick={handelrech}><img style={{width:'50px',height:'30px'}} src="/image/Design_sans_titre__4_-removebg-preview.png" alt="" /></button></li>
                
            </ul>
        </div>
        <SearchMovies rech={rech}/>
    </div>
  )
}

export default Appfilm