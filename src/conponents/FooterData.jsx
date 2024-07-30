import './Footer.jsx'
function FooterData(props){
    return(<>
    <div className="footerdata-div">
    <h2>{props.title}</h2>
        <a href="">{props.p1}</a>
        <a href="">{props.p2}</a>
        <a href="">{props.p3}</a>
        <a href="">{props.p4}</a>
    </div>
    </>)
}
export default FooterData