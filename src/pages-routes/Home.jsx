import Navbar from "../conponents/Navbar"
import Hero from "../conponents/HeroPage"
import Destination from "../conponents/Destination"
import Trip from "../conponents/Trip"
import Footer from "../conponents/Footer"
function Home(){
    return(<>
    <Navbar/>
        <Hero
            classDiv="home-div"
            srcImg="..\src\assets\12.jpg"
            title="Your Journey Your Story"
            parag="Choose Your Favourite Destination.."
            btn="Travel Plan"
            classBtn="home-btn-class"
            />
        <Destination/>
        <Trip/>
        <Footer/>

    </>
    )
}
export default Home