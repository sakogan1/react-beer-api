import {Link} from 'react-router-dom'
import "../css/Beer.css"

const Beer = () => {
    return ( 
        <div className="beer"> 
            <h1>BEER APP</h1>
        <Link to="/main"><div className="allBeer">
        <div id="footer"><h2>All Beers</h2></div></div></Link>
        <div id="Space"></div>
        <Link to="/random"><div className="randomBeer">
        <div id="footer"><h2>Random Beer</h2></div></div></Link>
        <div id="Space"></div>

        </div>
     );
}
 
export default Beer
