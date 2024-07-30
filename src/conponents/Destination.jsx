import './Destination.css'
import DestinationData from './DestinationData'
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
import image3 from '../assets/5.jpg'
import image4 from '../assets/4.jpg'

const Destination = ()=>{
    return(
        <>
<div className="dest-div">
            <h1>
                Our Destination
            </h1>
            <p> 
                Our Destination is a new world who has to choice your travel plan with yours knowledge and with our experience in cities in this small world
            </p>
        <DestinationData
        classN="sec-dest-div"
        title="New Life Begin"
        paragraph="Our Destination is a new world who has to choice your travel plan with yours knowledge and with our experience in cities in this small world and you have just to pay your hotels your meals and your enjoys don't forget to be happy in your travel because the moments don't repeat any more"
        img1={image1}
        img2={image2}
        />
        <DestinationData
        classN="sec-dest-div-reverse"
        title="New Life Begin"
        paragraph="Our Destination is a new world who has to choice your travel plan with yours knowledge and with our experience in cities in this small world and you have just to pay your hotels your meals and your enjoys don't forget to be happy in your travel because the moments don't repeat any more"
        img1={image3}
        img2={image4}
        />
</div>
        </>
    )
}
export default Destination