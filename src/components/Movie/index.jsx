import React from 'react';
import './style.css'

import Actor from './../Actor';

const Movie = (props) => {
    return (
        <div className="movie-card">
            <div className="movie-card__left">
                <img src={props.poster} alt="název filmu" />
                <span>{props.rating}/10</span>
            </div>
            <div className="movie-card__right">
                <h2 className="title">{props.title}</h2>
                <span><strong>Rok vydání: </strong>{props.year}</span>
                <span><strong>Žánr: </strong>{props.genre}</span>
                <span><strong>Režie: </strong>{props.director}</span>
                <div className="cast">
                    <h3>V hlavních rolích:</h3>
                    <div className="actors-block">
                        {props.cast.map (herci => <Actor key={herci.name} name={herci.name} as={herci.as} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie;