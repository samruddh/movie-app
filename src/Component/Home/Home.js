import React, { useEffect } from 'react'
import MovieListing from '../MoviesListing/MoviesListing'

import { useDispatch } from 'react-redux';
import {fetchAsyncMovies,fetchAsyncShows} from '../../features/movies/movieSlice';

function Home() {
   
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());      
    },[dispatch]);

    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing/>
        </div>
    )
}

export default Home;
