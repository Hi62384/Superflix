import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Homepage from './pages/homepage';
import FilmsListing from './pages/FilmsListing';
import FilmDetails from './pages/FilmDetails';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';



function App() {
  const navbarTitleStyle = {
    fontFamily: "'Poppins', sans-serif", // Modern rounded sans-serif
    fontWeight: '600',
    color: '#fff',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  }


  //states for all films
  const [allMovies, setMovies] = useState([])
  const [allSeries, setSeries] = useState([])
  //states for all featured films
  const [featuredMovies, setFeaturedMovies] = useState([])
  const [featuredSeries, setFeaturedSeries] = useState([])
  //state for signed in account
  const [signedInAccount, setSignedInAccount] = useState(null)


  const featuredFilmsAmount = 6

  useEffect(() => {
    //fetch the data on app mount and set films and featured films
    async function fetchData() {
      const moviesJson = await fetch('http://localhost:3001/movies')
      const _movies = await moviesJson.json()
      setMovies(_movies)
      setFeaturedMovies(getRandomElements(_movies, featuredFilmsAmount))

      const seriesJson = await fetch('http://localhost:3001/series')
      const _series = await seriesJson.json()
      setSeries(_series)
      setFeaturedSeries(getRandomElements(_series, featuredFilmsAmount))
    }

    fetchData()
  }, []);



  /*returns a new array containing an amount of elements randomly gotten from the given array
  gotten elements are not duplicated
  */
  function getRandomElements(array, count) {
    //if count is greater than the array length, return the array
    if (count >= array.length) {
      return array
    }

    //create a copy of the array to remove selected elements from, and a new array to put selected elements
    const copy = [...array]
    const result = []

    //remove a random index element from the copy array, and add it to the result array, count amount of times
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * copy.length);
      result.push(copy[randomIndex]);
      copy.splice(randomIndex, 1)
    }

    return result;
  }



  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar rightsideChildren={
        <>
          {signedInAccount == null ?
            <>
              <Link to={"/Login"}><h3 style={navbarTitleStyle}>Login</h3></Link>
              <Link to={"/Register"}><h3 style={navbarTitleStyle}>Sign Up</h3></Link>
            </> :
            <>
              <h3 style={navbarTitleStyle}>{signedInAccount.username}</h3>
              <h3 onClick={() => setSignedInAccount(null)} style={navbarTitleStyle}>Logout</h3>
              <h3 style={navbarTitleStyle}>{signedInAccount.firstName + " " + signedInAccount.lastName}</h3>
            </>}

        </>
      }
        leftsideChildren={
          <>
            <Link to={"/"}><h2 style={{ ...navbarTitleStyle, fontFamily: "impact" }}>Superflix3000</h2></Link>
            <Link to={"/Movies"}><h3 style={navbarTitleStyle}>Movies</h3></Link>
            <Link to={"/Series"}><h3 style={navbarTitleStyle}>Tv</h3></Link>
            <Link to={"/All"}><h3 style={navbarTitleStyle}>All</h3></Link>
          </>
        } signedInAccount={signedInAccount} />
      <Routes>
        <Route path='/' element={<Homepage featuredMovies={featuredMovies} featuredSeries={featuredSeries} />} />
        <Route path='/Movies' element={<FilmsListing films={allMovies} />} />
        <Route path='/Series' element={<FilmsListing films={allSeries} />} />
        <Route path='/Login' element={<LoginPage setAccount={setSignedInAccount} />} />
        <Route path='/Register' element={<RegistrationPage setAccount={setSignedInAccount} />} />
        <Route path='/All' element={<FilmsListing films={allMovies != null && allSeries != null ? allSeries.concat(allMovies) : null} />} />
        {allMovies != null && allMovies.map((item, index) => (
          <Route key={index} path={'/All/' + item.image} element={<FilmDetails film={item} />} />
        ))}
        {allSeries != null && allSeries.map((item, index) => (
          <Route key={index} path={'/All/' + item.image} element={<FilmDetails film={item} />} />
        ))}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
