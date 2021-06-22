import React, { Component } from 'react';
import Mainitem from "../components/Mainitem"

class Main extends Component {
    state = { 
        data:[],
        isLoaded:false
        
     }

componentDidMount(){
    fetch('https://ih-beers-api2.herokuapp.com/beers')
    .then(response => response.json())
    .then(json =>{
        this.setState({data:json, isLoaded:true});
    }) 
    

}
    render() { 
        return ( 
                <div> 
             {this.state.data.map((ele,id) => <Mainitem
                    daten={ele}
                    key={ele.id}
                    
                />)}
               
                </div> 
         );
    }
}
 
export default Main;


