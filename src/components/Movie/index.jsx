import React from 'react';
import './style.css'

const Movie = ({title, poster, year, rating, director, genre, cast}) => {
    return (
        <div className="movie-card">
            <div className="movie-card__left">
                <img src={poster} alt="název filmu" />
                <span>{rating}</span>
            </div>
            <div className="movie-card__right">
                <h2 className="title">{title}</h2>
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