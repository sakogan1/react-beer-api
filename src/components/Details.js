import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import "../css/Details.css"
import "../css/Loader.css"


class Details extends Component {
    state = { data:[],
        isLoaded:false }


    componentDidMount(){
            let id = this.props.match.params.Id
            // https://ih-beers-api2.herokuapp.com/beers/random
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then((result) => result.json())
            .then((result) => result)
            .then((result) => this.setState({ data: result,isLoaded:true }))
            console.log(this.isLoaded)
    }

    render() { 
        return ( 
            <>
            <div className="item">
                
                {
                this.state.isLoaded ?
                    <div> 
                        <img src={this.state.data.image_url} alt="name"></img>
                        <div className="descriptionD"> 
                        <h1>{this.state.data.name}</h1><br />
                        <h2>{this.state.data.tagline}</h2><br />
                        <h6>First brewed:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.data.first_brewed}</h6><br />
                        <h6>Attenuation Level:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.data.attenuation_level}</h6><br />
                        <p>{this.state.data.description}</p><br />
                        <Link to="/" exact><div className="img"></div></Link>
                    </div></div>
                    :
                    setTimeout(() => {
                         <div className="loader">Loading....</div>
                    }, 3000)
                   }
           
            </div> 
           
            </>
         );
    }
}
 
export default Details;