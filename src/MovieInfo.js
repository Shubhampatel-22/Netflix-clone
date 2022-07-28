import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import './MovieInfo.css'

const base_url = 'https://image.tmdb.org/t/p/original/'

function MovieInfo() {
  let data=[]
  const [trailerUrl,setTrailerUrl] = useState('')
  const location = useLocation()
  console.log(location.state.fromSerach)
  if(location.state.fromSearch){
    data=location.state.movie
  }else{
    data=location.state
  }
  
  let opts = {
    height:'390px',
    width:'100%',
    playerVars:{
      autoplay:1
    }
  }

  let handleClick = (movie) =>{
    console.log(movie)
    if(trailerUrl){
      setTrailerUrl('')
    }else{
      movieTrailer(movie?.name || movie?.title)
      .then((url) => {
        console.log(url)
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get('v'))
      }).catch((e) =>alert('Unable to find trailer Try again later...'))
    }
  }

  return (
  <>
    <Link to='/'>
    <img  
        className='movie__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
        alt='Netflix Logo'
      />
    </Link>

    <div className='movieInfo'>
      <div className='movieInfo__banner'>
          <img 
              className='movieInfo__poster'
              src={`${base_url}${data.poster_path}`} 
              alt='Movie Banner' />
      </div>
      <div className='movieInfo__content'>
          <h1 className='movieInfo__title'>{data?.title || data?.name || data?.originam_name}</h1>
          <h2>{data.first_air_date}</h2>
          <h1>Overview</h1>
          <h1 className='movieInfo__description'>{data?.overview}</h1>
          <div className='buttons'>
            <button className='btns' onClick={ ()  => handleClick(data)}>
                <i class="fa-solid fa-circle-play" />
                Play Trailer
            </button>
          </div>
      </div>
    </div>
    {trailerUrl && <div className='movie__trailer'>
      <div className='div__btn'>
        <h2>{`${data.name?data.name:"Trailer"}`}</h2>
        <button className='close__btn' onClick={ ()  => handleClick(data)}>close</button>
      </div>
      <YouTube videoId={trailerUrl} opts={opts} />
    </div>}
  </>
  )
}

export default MovieInfo