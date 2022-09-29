import React from 'react'
// import { AppContext } from './context'
// import { useGlobalContext } from './context'
import Movie from './Movie'
import Search from './Search'

const Home = () => {
  // const name = useContext(AppContext);
  // const name = useGlobalContext()
  return (
    <>
      {/* <h1>home</h1> */}
      <Search/>
      <Movie/>
      {/* <p>{name}</p> */}
    </>
  )
}

export default Home
