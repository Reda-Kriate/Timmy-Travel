import './AboutData.css'
function AboutData(props){
    return(
    <div className={props.classN}>
        <h1>{props.title}</h1>
        <p>{props.p}</p>
    </div>
    )
}
export default AboutData