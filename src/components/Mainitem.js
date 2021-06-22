import "../css/Mainitem.css"
import { Link } from "react-router-dom";


const Mainitem = (props) => {
   console.log(props) 
   return ( 
        <div className="main"> 
        <img src={props.daten.image_url} alt="name"></img>
            <div className="descriptionM">

        <h1>{props.daten.name}</h1>
        <h2>{props.daten.tagline}</h2>
        <h3>Created by:{props.daten.name}</h3>
        <Link to={`/details/${props.daten._id}`}><div className="btn">Details</div></Link>
        </div>
        </div>
     );
}
 
export default Mainitem;