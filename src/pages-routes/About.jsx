import Navbar from "../conponents/Navbar"
import Hero from "../conponents/HeroPage"
import Footer from "../conponents/Footer"
import AboutData from "../conponents/AboutData"
function About(){
    return(<>
        <Navbar/>
        <Hero
            classDiv="about-div"
            srcImg="..\src\assets\night.jpg"
            title="About"
            parag=""
            btn=""
            classBtn=""
            />
                    <AboutData
        classN="div-data"
        title="Our History"
        p="Travel in the Middle Ages offered hardships and challenges, though it was important to the economy and to society. The wholesale sector depended (for example) on merchants dealing with/through caravans or sea-voyagers."
        />
        <AboutData
        classN="div-data"
        title="Our Mission"
        p="Travel by water often provided more comfort and speed than land-travel, at least until the advent of a network of railways in the 19th century. Travel for the purpose of tourism is reported to have started around this time when people began to travel for fun as travel was no longer a hard and challenging task."
        />
        <AboutData
        classN="divData-last-conponent"
        title="Our Vision"
        p="Travel dates back to antiquity where wealthy Greeks and Romans would travel for leisure to their summer homes and villas in cities such as Pompeii and Baiae.[8] While early travel tended to be slower, more dangerous, and more dominated by trade and migration, cultural and technological advances over many years have tended to mean that travel has become easier and more accessible.[9] Humankind has come a long way in transportation since Christopher Columbus sailed to the New World from Spain in 1492, an expedition which took over 10 weeks to arrive at the final destination; to the 21st century when aircraft allows travel from Spain to the United States overnight."
        />
        
            <Footer/>
        </>
        )
}
export default About