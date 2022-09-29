import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_url } from './context';
import { useGlobalContext } from './context';

const SingleMovie = () => {
  const { id } = useParams();
  console.log(id)
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState({})

  // const { movie, isLoading, setMovie, setIsError, setIsLoading } = useGlobalContext();

  console.log(`${API_url}&i=${id}`);

  // const getMovies = async() => {
  //   try{
  //       setIsLoading(true);
  //       console.log("robin")
  //         const res = await fetch(`${API_url}&i=${id}`);
  //         const data = await res.json();
  //         console.log(data,"sucessful");
  //         if(data.Response === 'True'){
  //             setIsLoading(false);
  //             setIsError({ show: "false", msg: "" });
  //             setMovie(data);
  //         }
  //         else {
  //           setIsError({ show: "true", msg: data.Error });
  //         }

  //     }
  //     catch(error){
  //         console.log(error); 
  //     }
  //   }

  const movieDetails = async () => {
    try {
      setLoading(true)
      const res = await fetch(`${API_url}&i=${id}`);
      const data = await res.json();
      setMovieData(data);
      console.log(movieData, "sucessful");
      setLoading(false)

    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //     let timerOut = setTimeout(()=>{
  //         getMovies(`${API_url}&i=${id}`);
  //     },500);

  //     return ()=>{
  //       clearTimeout(timerOut);
  //       console.log("clear");
  //     }

  // },[id]);

  useEffect(() => {
    movieDetails()
  }, [id]);

  if (loading) {
    return (
      <div className="movie-section">
        <div className="loading">loading...</div>
      </div>
    );
  }
  return (
    <section className='movie-section'>
      <div className="movie-card">
        <figure>
          <img src={movieData.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movieData.Title}</p>
          <p className="card-text">{movieData.Released}</p>
          <p className="card-text">{movieData.Genre}</p>
          <p className="card-text">{movieData.imdbRating} / 10</p>
          <p className="card-text">{movieData.Country}</p>
          <Link to='/' className="back-btn">Go Back</Link>
        </div>
      </div>
    </section>
  )
}

export default SingleMovie
