import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const CardMovies = ({ movie }) => {
    return (
        <Col xs="6" sm="6" md="4" lg="3" className="my-1">
            <Link to={`/movie/${movie.id}`}>
                <div className="card">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    <div className="card__overlay">
                        <div className="overlay__text text-center w-100 p-2">
                            <p> Film Name :{movie.title}</p>
                            <p> Release date :{movie.release_date}</p>
                            <p> Vote_count :{movie.vote_count} </p>
                            <p> Vote average:{movie.vote_average}</p>
                        </div>
                    </div>
                </div>
            </Link >
        </Col >

    )
}

export default CardMovies
