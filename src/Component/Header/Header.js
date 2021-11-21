import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import user from "../../Images/user.png";
import "./Header.scss";

function Header() {
    const [term,setTerm] = useState("");
    const dispatch = useDispatch();
    const sumbitHandler = (e)=>{
        e.preventDefault();
        if(term=="") return alert("Please enter search!")
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term))
        setTerm("")
    }
    return (
        <div>
            <div className="header">
                <div className="logo"><Link to="/">Movies App</Link></div>
                <div className="search-bar">
                    <form onSubmit={sumbitHandler}>
                        <input 
                            type="text" 
                            value={term} 
                            placeholder="Search Movies or shows" 
                            onChange={(e)=>setTerm(e.target.value)}
                        />
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                </div>
                <div className="user-image">
                    <img src={user} alt="user"/>
                </div>
            </div>
        </div>
    )
}

export default Header
