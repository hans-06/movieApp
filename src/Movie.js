import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom';
import "./App.css"

const Movie = () => {
  const { movie , isLoading} = useGlobalContext();
  if(isLoading){
    return(
      <div>
        <div className="loading">loading...</div>
      </div>
    )
  }
  return (
    <>
    <section className='movie-page'>
      <div className="container grid grid-4-col">
      {movie.map((currMovie) => {
        console.log(currMovie);
        const { imdbID, Title, Poster} = currMovie;
        const movieName = Title.substring(0,15);
        return(
          <Link to = {`movie/${imdbID}`} key= {imdbID}>
          {/* {console.log({imdbID})} */}
          <div className="card">
            <div className="card_info">
              <h1>{movieName.length>=15?`${movieName}....`:movieName}</h1>
              <img src={Poster} alt={imdbID} />
            </div>
          </div>
          </Link>
          
        )
      })}
      </div>
    </section>
    </>
  )
}

export default Movie;
