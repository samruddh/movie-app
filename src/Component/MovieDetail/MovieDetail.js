import React, { useEffect } from 'react';
import {useParams} from 'react-router';
import {useDispatch,useSelector} from 'react-redux';
import {fetchAsyncMovieOrShowDetail} from'../../features/movies/movieSlice';
import {getSelectedMoviesOrShow} from '../../features/movies/movieSlice'

function MovieDetail() {
    const {imdbID} = useParams();
    const dispatch =  useDispatch();
    const data = useSelector(getSelectedMoviesOrShow);
    console.log(data);
    useEffect(()=>{
        dispatch(fetchAsyncMovieOrShowDetail(imdbID))
    },[dispatch,imdbID])
    return (
        <div className="movie-selection">
            <div className="section-left">
                <div className="movie-title">{data.Title}</div>
                <div className="movie-rating">
                    <span>
                        IMDB Rating <i className="fa fa-star"></i>: {data.imdbRating}
                    </span>
                    <span>
                        IMDB Votes <i className="fa fa-thumb-up"></i>: {data.imdbVotes}
                    </span>
                    <span>
                        Runtime <i className="fa fa-film"></i>: {data.Runtime}
                    </span>
                    <span>
                        Year <i className="fa fa-calendar"></i>: {data.Year}
                    </span>
                    <div className="movie-plot">{data.Plot}</div>
                    <div className="movie-info">
                        <div>
                            <span>Director</span>
                            <span>{data.Director}</span>
                        </div>
                        <div>
                            <span>Actors</span>
                            <span>{data.Actors}</span>
                        </div>
                        <div>
                            <span>Generes</span>
                            <span>{data.Genre}</span>
                        </div>
                        <div>
                            <span>Languges</span>
                            <span>{data.Language}</span>
                        </div>
                        <div>
                            <span>Awards</span>
                            <span>{data.Awards}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-right">
                <img src={data.Poster} alt={data.Title}/>
            </div>
        </div>
    )
}

export default MovieDetail
