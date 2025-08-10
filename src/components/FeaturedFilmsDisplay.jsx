import FilmDisplay from "./FilmDisplay";
import { useNavigate } from "react-router-dom"


function FeaturedFilmDisplay({ children, films }) {

  const getProperPath = (fileName) => {
    const b = "/src/MovieImages/"
    return b + fileName + ".png"
  }

  const navigate = useNavigate()

  return <div style={{
    height: "350px",
    backgroundColor: "#000000ff"
  }}>
    <h2 style={{
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 700,
      color: "#ffffffff",
      letterSpacing: "1px",
      textTransform: "uppercase",
      margin: "20px 0",
      padding: "10px"
    }}>{children}</h2>
    {films == null ? <h2 style={{ color: "white" }}>Loading Films...</h2> :
      <div style={{ display: "flex", gap: "30px", paddingLeft: "30px" }}>
        {films.map((item, index) => (
          <FilmDisplay key={index} scale={0.9} imagePath={getProperPath(item.image)} movieName={item.name} stars={item.stars} releaseDate={item.release_data} onClick={() => navigate("/All/" + item.image)} />
        ))}
      </div>}
  </div>
}


export default FeaturedFilmDisplay
