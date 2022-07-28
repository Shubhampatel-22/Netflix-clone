import React from 'react'
import {Link} from 'react-router-dom'
import Row from './Row'
import requests from './requests';
import Banner from './Banner'
import Nav from './Nav'

function Home() {
  return (
    <>
        <div className='home'>
            <Link to='/'></Link>
            <Nav/>
            <Banner/>
            <Row title="NETFLIX ORGINIALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
            <Row title="Trending now" fetchUrl={requests.fetchTrending}/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
        </div>
    </>
  )
}

export default Home