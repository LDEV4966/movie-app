import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie ({ id, year, title, summary, poster, genres }){
    return (
        <div className="movie">
            <div className = "movie__poster">
                <img src = {poster} alt = {title} title={title}/>
            </div>
            <div className = "movie__data">
                <h3 className = "movie__title"> {title} </h3>
                <h4 className = "movie__year"> {year} </h4>
                <ul className = "movie__genres">
                {
                    genres.map((genre,itemIndex )=> {
                        return(
                        <li key = {itemIndex} className = "movie__genre">{genre}</li>
                        );
                    })
                }
                </ul>
                <p className = "movie__summary"> {summary.slice(0,180)}... </p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;