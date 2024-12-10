import axios from 'axios';
import React, { useState,useEffect } from 'react'
import './films.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchMovies = ({rech}) => {
  let [moviechercher,setmoviescher]=useState('')
  let [year,setyear]=useState('')
  let [type,settype]=useState('')
  let [etat,setetat]=useState(false)
  let [movies,setmovies]=useState([])
  let [err,seterr]=useState(null)
  useEffect(() => {
        setTimeout(()=>{
            if (etat) {
                axios.get(`http://www.omdbapi.com/?s=${moviechercher}&y=${year}&type=${type}&apikey=5fdac33d`)
                .then((reponce)=>{
                    console.log(reponce)
                    setmovies(reponce.data.Search)
                })
                .catch((err)=>(seterr('Erreur réseau. Veuillez réessayer plus tard'))
                )
            }  
        },1000)
    
  }, [etat]);
  function chnageetat() {
    setetat(!etat)
    seterr('')
  }

  return (
    <div className='container'>
        <div style={{textAlign:'center'}}>
            {rech&&<div>
                    <strong>title : </strong><input className='' placeholder='saisir un titre' type="text" onChange={(e)=>setmoviescher(e.target.value)}  />
                    <strong>Type : </strong><select onChange={(e)=>settype(e.target.value)}>
                                                <option value="" key="0">choisir un type</option>
                                                <option  key="1">movie</option>
                                                <option  key="2">series</option>
                                                <option  key="3">episode</option>
                                            </select>
                    <strong>Year : </strong><input className='' placeholder='saisir un date' type="text" onChange={(e)=>setyear(e.target.value)}  />
                    <button style={{marginLeft:'3px'}} className='btn btn-secondary' onClick={chnageetat}>chercher</button>
                </div>}
        </div>
        {err&& <h4 style={{color:'red'}}>{err}</h4>}
        {(!movies.length&&etat)&& 'wait ...'}
        
        <div className='row align-items-center ps-auto'>
            {movies.map((avenger,index)=>
            <div className='col-lg-4 mb-4'>
                <p className='center'><strong>{avenger.Title}</strong> {avenger.Year}</p>
                <img src={avenger.Poster} alt={avenger.Title} />
            </div>)}
        </div>
    </div>
  )
}

export default SearchMovies
