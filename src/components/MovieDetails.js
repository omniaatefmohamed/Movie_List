import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom';
const MovieDetails = () => {
    const param = useParams();
    const [movieDetails, setMovieDetails] = useState([])
    // get details function
    const moviesDetails = async () => {
        const movieDetails = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=775ea4640a2dd626897f98004be1a93f&language=en-US`)
        setMovieDetails(movieDetails.data);
    }
    useEffect(() => {
        moviesDetails()
    }, [])
    return (
        <div>
            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-4 ">
                    <div className="card-detalis  d-flex align-items-center">
                        <img
                            className="img-movie w-30"
                            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                            alt="ascad"
                        />
                        <div className="justify-content-center text-center  mx-auto">
                            <p className="card-text-details border-bottom">
                                Film Name : {movieDetails.title}
                            </p>
                            <p className="card-text-details border-bottom">
                                Release Date : {movieDetails.release_date}
                            </p>
                            <p className="card-text-details border-bottom">
                                Vote Count : {movieDetails.vote_count}
                            </p>
                            <p className="card-text-details border-bottom">
                                Vote Average :{movieDetails.vote_average}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-1 ">
                    <div className="card-story  d-flex flex-column align-items-start">
                        <div className="text-end p-4 ">
                            <p className="card-text-title border-bottom">description:</p>
                        </div>
                        <div className="text-end px-2">
                            <p className="card-text-story">{movieDetails.overview}</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col
                    md="10"
                    xs="12"
                    sm="12"
                    className="mt-2 d-flex justify-content-center ">
                    <Link to="/">
                        <button
                            style={{ backgroundColor: "#b45b35", border: "none" }}
                            className="btn btn-primary mx-2">
                            Go to Home
                        </button>
                    </Link>
                    <a href={movieDetails.homepage}>
                        <button
                            style={{ backgroundColor: "#b45b35", border: "none" }}
                            className="btn btn-primary">
                            Watch the film
                        </button>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default MovieDetails
