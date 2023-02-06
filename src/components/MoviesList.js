import React from 'react'
import { Row } from 'react-bootstrap'
import CardMovies from './CardMovies'
import PaginationComp from './PaginationComp'

const MoviesList = ({ movies, getPage, totalpages }) => {
    return (
        <Row className="mt-3">
            {
                movies.length >= 1 ? (movies.map(movie => {
                    return (<CardMovies movie={movie} key={movie.id} />)
                })) : (<h3>No Data</h3>)
            }
            {
                movies.length >= 1 ? (<PaginationComp getPage={getPage} totalpages={totalpages} />) : null
            }

        </Row>
    )
}

export default MoviesList
