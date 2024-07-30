import './Trip.css'
function TripData(props){
    return(
        <>
        <div className="trip-div-conp">
            <div className="image-div"><img src={props.image} alt="" /></div>
        <h3>{props.title}</h3>
        <p>
            {props.paragraph}
        </p>
        </div>
        </>
    )
}
export default TripData