import HeroSection from "../components/HeroSection"
import FeaturedFilmDisplay from "../components/FeaturedFilmsDisplay"
import ContentSection from "../components/ContentSection"


function Homepage({ featuredMovies, featuredSeries }) {
  return <>
    <HeroSection />
    <br />
    <FeaturedFilmDisplay films={featuredMovies}>Featured Movies</FeaturedFilmDisplay>
    <br />
    <FeaturedFilmDisplay films={featuredSeries}>Featured TV Shows</FeaturedFilmDisplay>
    <br />
    <ContentSection image={"../src/images/ActorsSpotlight.png"}>Actors Spotlight</ContentSection>
    <br />
    <ContentSection image={"../src/images/CinemaSpotlight.png"}>Cinema Spotlight</ContentSection>
    <br />
  </>
}




export default Homepage

