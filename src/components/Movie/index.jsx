import React from 'react';
import './style.css'

const Movie = ({title, poster, year, rating, director, genre, cast}) => {
    return (
        <div className="movie-container">
            <div className="movie__left">
                <img src={poster} alt="název filmu" />
                <span>{rating}</span>
            </div>
            <div className="movie__right">
                <h1 className="title">{title}</h1>
                <span><strong>Rok vydání: </strong>{year}</span>
                <span><strong>Žánr: </strong>{genre}</span>
                <span><strong>Režie: </strong>{director}</span>
                <div className="cast">
                    <h3>V hlavních rolích:</h3>
                </div>
            </div>
        </div>
    )
}

export default Movie;