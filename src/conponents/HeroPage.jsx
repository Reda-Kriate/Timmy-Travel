import './HeroPage.css'
function Hero(props){
    return(<>
    <div className={props.classDiv}>
        <img src={props.srcImg} alt="hero-img" />
    <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.parag}</p>
        <a href="" className={props.classBtn}>{props.btn}</a>
    </div>
    </div>
    </>)
} 
export default Hero