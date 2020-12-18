import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/footer.css';

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
                    <div className="location">
                        <p className="locationP">105 Garfield Avenue | P.O. Box 4004 | Eau Claire, WI 54702-4004 | 715-836-4636</p>
                    </div>
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