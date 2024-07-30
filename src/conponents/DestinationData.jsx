import './Destination.css'
function DestinationData(props){
    return(<>
    <div className={props.classN}>
            <div className="sec-dest-text-div">
                <h2>{props.title}</h2>
                <p>
                {props.paragraph}
                </p>
            </div>
            <div className="img-div">
                <img src={props.img1} alt="image1" />
                <img src={props.img2} alt="image2" />
            </div>
        </div>
    </>)
}
export default DestinationData