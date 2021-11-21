import React, { useEffect } from 'react'
import MovieListing from '../MoviesListing/MoviesListing'

import { useDispatch } from 'react-redux';
import {fetchAsyncMovies,fetchAsyncShows} from '../../features/movies/movieSlice';

function Home() {
    const movieText = "Harry";
    const showText = "Friend"
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncShows(showText));      
    },[dispatch]);

    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing/>
        </div>
    )
}

export default Home;
