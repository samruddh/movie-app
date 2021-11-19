import React, { useEffect } from 'react'
import MovieListing from '../MoviesListing/MoviesListing'
import movieApi from '../../Common/apis/MovieApi'
import {APIKey} from '../../Common/apis/MovieApiKey'
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

function Home() {
    var movieText = "Harry";
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchMovies = async ()=>{
            const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
            .catch((err)=>{console.log(err)});
            dispatch(addMovies(response.data));
        };
        fetchMovies()
    },[]);


    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing/>
        </div>
    )
}

export default Home
