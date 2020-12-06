import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Footer.css';

function Footer() {
 return (
    <footer>
        <div className="row">
            <div className="column">
                <div className="title">
                    <h3>University of Wisconsin</h3>
                    <h2>Eau Claire</h2>
                </div>
                <div className="info">
                    Phone Number, Location, email... etc
                </div>
            </div>
            <div className="column">
                <div className="slogan">
                    <h2>The Power of [<span className="and">AND</span>]</h2>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;