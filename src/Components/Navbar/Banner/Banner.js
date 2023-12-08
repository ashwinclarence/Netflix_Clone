import React, { useEffect,useState } from 'react'
import axios from '../../../axios'
import { API_KEY,imageUrl } from '../../../Constants/Constant';
import './Banner.css'
function Banner() {
    const [movie, setMovie] = useState();
    useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        
                 setMovie(response.data.results[0])
      })
        
    }, []);
  return (
    <div className='banner' style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}>   
      <div className="container">
        <h1 className="title">{movie?movie.title:""}</h1>
        <h1 className="title">{movie?movie.name:""}</h1>
        <div className="banner_buttons">
            <button className='button'><i class="fa-solid fa-play"></i> play</button>
            <button className='button'><i class="fa-solid fa-plus"></i> my list</button>
        </div>
        <h1 className="description">{movie?movie.overview:""}</h1>
      </div>
      <div className="fade"></div>
    </div>
  )
}

export default Banner
