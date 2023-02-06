import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import MoviesList from './components/MoviesList';
import NavbarComp from './components/NavbarComp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
function App() {
  const [movies, setMovies] = useState()
  const [totalpages, setTotalpages] = useState()

  // get all movies
  const getAllMovies = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=775ea4640a2dd626897f98004be1a93f&language=en-US");
    setMovies(res.data.results);
    setTotalpages(res.data.total_pages);
  }
  useEffect(() => {
    getAllMovies();
    getPage()
  }, [])

  // search function
  const search = async (word) => {
    if (word == "") {
      getAllMovies()
    }
    else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=775ea4640a2dd626897f98004be1a93f&language=en-US&page=1&include_adult=false&query=${word}`)
      setMovies(res.data.results)
      setTotalpages(res.data.total_pages)
    }
  }

  // get current page
  const getPage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=775ea4640a2dd626897f98004be1a93f&language=en-US&page=${page}`)
    setMovies(res.data.results)
    setTotalpages(res.data.total_pages)
  }


  return (
    <div className="App">
      <NavbarComp search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList movies={movies} getPage={getPage} totalpages={totalpages} />} />
            <Route path="movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
