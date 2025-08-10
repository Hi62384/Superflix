
function navbar({ leftsideChildren, rightsideChildren, signedInAccount }) {
  return <div style={{
    background: "linear-gradient(to right, #750000ff, #270000ff)",
    padding: "0.8rem 1.2rem",
    display: "flex",
    gap: "40px",
    margin: "0px"
  }}>
    {leftsideChildren}
    <div style={{
      flex: "1",
      display: "flex",
      flexDirection: "row-reverse",
      gap: "20px"
    }}>
      {rightsideChildren}
    </div>
  </div>
}


export default navbar

