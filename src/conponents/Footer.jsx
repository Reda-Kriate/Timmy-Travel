import './Footer.css'
import FooterData from './FooterData'
function Footer(){
    return(
        <>
        <div className="footer-div">
            <div className="f-d-1st">
                <div>
                    <h1>Trippy</h1>
                    <p>Choose your favourite destination.</p>
                </div>
                <div className="icon-div">
                    <i class="fa-brands fa-facebook-f"><a href=""></a></i>
                    <i class="fa-brands fa-instagram"><a href=""></a></i>
                    <i class="fa-brands fa-linkedin-in"><a href=""></a></i>
                    <i class="fa-brands fa-x-twitter"><a href=""></a></i>
                </div>
            </div>
            <div className="f-d-2nd">
                <FooterData
                        title="Project"
                        p1="Changelog"
                        p2="Status"
                        p3="License"
                        p4="All videos"
                />
                <FooterData
                        title="Community"
                        p1="GitHub"
                        p2="Issues"
                        p3="Project"
                        p4="Linkedin"
                />
                <FooterData
                        title="Help"
                        p1="Support"
                        p2="Troubles Hoosting"
                        p3="Contact us"
                />
                <FooterData
                        title="Others"
                        p1="Team of service"
                        p2="Privacy Policy"
                        p3="License"       
                />
            </div>
        </div>
        </>
    )
}
export default Footer