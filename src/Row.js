
import React ,{useState, useEffect} from 'react'
import axios from './axios';
// import Youtube from 'react-youtube'
import { Link } from 'react-router-dom';
// import movieTrailer from 'movie-trailer'
import './Row.css'


const base_url='https://image.tmdb.org/t/p/original/';
function Row({title, fetchUrl, isLargeRow}) {
    let [movies, setMovies]= useState([]);
    // const [trailerUrl,setTrailerUrl]=useState("")
    useEffect(()=>{
        async function fetchData(){
            const requests= await axios.get(fetchUrl)
            setMovies(requests.data.results)
            return requests
        }
        fetchData()
    },[fetchUrl])

    movies=movies.filter(movie=>movie.backdrop_path&& movie.poster_path)


  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row__posters'>
            {movies.map((movie, index)=>
                <Link className='row__link' to='/movieinfo' state={movie} key={index}>
                    <img className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    key={movie.id}
                    src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
                </Link>
            )}
        </div>
    </div>
  )
}

export default Row