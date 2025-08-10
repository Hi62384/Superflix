import FilmDisplay from "../components/FilmDisplay"
import { useNavigate } from "react-router-dom"



function FilmsListing({ films }) {

  const getProperPath = (fileName) => {
    const b = "../src/MovieImages/"
    return b + fileName + ".png"
  }

  const navigate = useNavigate()

  return <>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "30px",
        paddingLeft: "30px",
        margin: "30px"
      }}
    >
      {films == null ? <h2 style={{ color: "white" }}>Loading Films...</h2> :
        films.map((item, index) => (
          <FilmDisplay key={index} scale={1.75} imagePath={getProperPath(item.image)} movieName={item.name} stars={item.stars} releaseDate={item.release_data} onClick={() => navigate("/All/" + item.image)} />
        ))}
    </div>
  </>
}



export default FilmsListing
