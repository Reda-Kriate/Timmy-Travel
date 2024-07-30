import './Trip.css'
import image5 from '../assets/5.jpg'
import image6 from '../assets/6.jpg'
import image7 from '../assets/8.jpg'
import TripData from './TripData'
function Trip(){
    return(
        <>
        <div className="trip-text">
        <h1>Recent Trip</h1>
        <p>You can discover unique destinations using Google Maps.</p>
        </div>
    <div className="big-trip">
                <TripData
        image={image5}
        title="Trip Malaysia"
        paragraph="Malayia is about a Southeast Aslan country Ocuupying all hapiness to the old peoples who have the most energy ever for doing all works, jobs, ... With all effort possible MalaYsia."
        />
                <TripData
        image={image6}
        title="Trip France"
        paragraph="Malayia is about a Southeast Aslan country Ocuupying all hapiness to the old peoples who have the most energy ever for doing all works, jobs, ... With all effort possible MalaYsia."
        />
                <TripData
        image={image7}
        title="Trip Danemark"
        paragraph="Malayia is about a Southeast Aslan country Ocuupying all hapiness to the old peoples who have the most energy ever for doing all works, jobs, ... With all effort possible MalaYsia."
        />
    </div>
        </>
    )
}
export default Trip