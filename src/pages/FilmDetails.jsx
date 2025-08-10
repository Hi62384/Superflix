import StarProgressBar from "../components/StarsProgressBar"



function FilmDetails({ film }) {
  const textStyle = {
    color: "white",
    fontFamily: "sans-serif",
    margin: "0px"
  }

  const textStyle2 = {
    color: "#000000ff",
    backgroundColor: "#790000ff",
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "15px",
    paddingRight: "15px",
    borderRadius: "10px",
    fontFamily: "monospace",
    fontSize: "18px"
  }

  const purchaseButton = {
    color: "white",
    backgroundColor: "#0078c9ff",
    fontSize: "25px",
    border: "0",
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingTop: "10px",
    paddingBottom: "10px",
    borderRadius: "10px"
  }

  //style for horizontal allign div element
  const horizontalAllignDiv = (gap = 10) => {
    return {
      display: "flex",
      gap: `${gap}px`,
      alignItems: "center"
    }
  }


  const getProperPath = (fileName) => {
    const b = "../src/MovieImages/"
    return b + fileName + ".png"
  }

  const getProperScenePath = (fileName) => {
    const b = "../src/MovieImages/"
    return b + fileName + "scene.png"
  }


  return <div style={{ display: "flex", marginLeft: "120px", marginTop: "50px", marginBottom: "50px", gap: "40px" }}>
    <img src={getProperPath(film.image)} alt="" style={{ width: "200px", height: "340px", objectFit: "cover" }} />
    <div style={{ display: "flex", flexDirection: "column", gap: "0px", width: "500px" }}>
      <h1 style={textStyle}>{film.name}</h1>
      <div style={horizontalAllignDiv()}>
        <h3 style={textStyle}>{film.genre} | {film.release_data}</h3>
        <p style={textStyle2}>{film.age_rating}</p>
        {film.episodes != null && <p style={textStyle2}>{film.episodes} episodes</p>}
        {film.length != null && <p style={textStyle2}>{film.length} mins</p>}
        <p style={textStyle2}>CC</p>
      </div>
      <div style={horizontalAllignDiv(60)}>
        <div style={horizontalAllignDiv()}>
          <StarProgressBar progress={film.stars / 5} size={25} />
          <p style={textStyle}>({film.reviews})</p>
        </div>
        <div style={horizontalAllignDiv()}>
          <img src="../src/Images/RottenTomatoes.png" alt="" style={{ width: "25px" }} />
          <p style={textStyle}>{film.rotten_tomatoes}%</p>
        </div>
      </div>
      <br />
      <br />
      <p style={textStyle}>{film.description}</p>
      <br />
      <br />
      <br />
      <div style={horizontalAllignDiv(30)}>
        <button style={purchaseButton}>Rent <strong>${film.rent_price}</strong></button>
        <button style={purchaseButton}>Buy <strong>${film.buy_price}</strong></button>
      </div>

    </div>
    <div style={{ flexGrow: "1", display: "flex" }}>
      <img src={getProperScenePath(film.image)} alt="" style={{
        width: '100%',
        height: '400px',
        objectFit: 'cover',
        display: 'block',
        WebkitMaskImage: `
    linear-gradient(to right, transparent 0%, black 10%, black 100%),
    linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)
  `,
        maskImage: `
    linear-gradient(to right, transparent 0%, black 10%, black 100%),
    linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)
  `,
        WebkitMaskComposite: 'intersect',
        maskComposite: 'intersect',
      }
      } />

    </div>
  </div>
}



export default FilmDetails
