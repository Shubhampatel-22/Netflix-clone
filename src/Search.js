import React, { useState, useEffect } from 'react'
import axios from './axios'
import { Link,useLocation,useNavigate } from 'react-router-dom';
import './Search.css'

const base_url = 'https://image.tmdb.org/t/p/original/'

function Search() {
    let navigate = useNavigate();
    const location = useLocation()
    const searchTerm = location.state.value
    const searchUrl ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="+searchTerm;

    let [movies,setMoviess] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(searchUrl)
            setMoviess(request.data.results)
        return request;
    }

    fetchData();
  }, [searchUrl])

    movies = movies.filter(movie => movie.overview && movie.poster_path)
    // console.log(movies)
    let handlClick = (movie) => {
        navigate('/movieInfo', {state:{
            movie,
            fromSearch:true
        }})
    }
    return (
        <>
            <div className='header'>
                <Link to='/'>
                    <img  
                    className='movie__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
                    alt='Netflix Logo'
                    />
                </Link>
            </div>
            <div className='content'>
                {movies.map((movie,index) => (
                    <div className='cards' onClick={() => {handlClick(movie)}} key={index}>
                        <img 
                            key={movie.id} 
                            className='poster'
                            src={`${base_url}${movie.poster_path}`}
                            alt={movie.name}
                            />
                        <div className='card__content'>
                            <h2 className='title'>{movie.name}{movie.title}</h2>
                            <p className='overview'>{movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Search