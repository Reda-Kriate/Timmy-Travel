import Navbar from "../conponents/Navbar"
import Hero from "../conponents/HeroPage"
import Footer from "../conponents/Footer"
import ContactData from "../conponents/ContactData"
function Contact(){
    return(<>
        <Navbar/>
        <Hero
            classDiv="about-div"
            srcImg="..\src\assets\2.jpg"
            title="Contact"
            parag=""
            btn=""
            classBtn=""
            />
        <ContactData/>
        <Footer/>
        </>
        )
}
export default Contact