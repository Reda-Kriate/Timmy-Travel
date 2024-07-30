import Navbar from "../conponents/Navbar"
import Hero from "../conponents/HeroPage"
import Footer from "../conponents/Footer"
import Trip from "../conponents/Trip"
function Service(){
    return(<>
        <Navbar/>
        <Hero
            classDiv="about-div"
            srcImg="..\src\assets\3.jpg"
            title="Service"
            parag=""
            btn=""
            classBtn=""
            />
        <Trip/>
        <Footer/>
        </>
        )
}
export default Service