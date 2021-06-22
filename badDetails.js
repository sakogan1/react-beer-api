import React, { Component } from 'react';
import Detailsitem from "../components/Detailsitem"
import axios from 'axios';

class Details extends Component {
   
    state = { 
        data:[],
        isLoaded:false
        
     }

     componentDidMount(){
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then((result) => result.json())
            .then((result) => result.data)
            .then((data) => this.setState({ ...this.state, data }))
            .catch((error) => console.log(error));
    }


// componentDidMount(){    

//     let id = this.props.match.params.Id
//     console.log(id)

//     function getFetch(url) {
//         return fetch(url).then((response) => response.json());
//       }

//       getFetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`).then((response) =>
//        console.log(response).then(this.setState({ data:response  }))
    
  
);
    // fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
    // .then(response => response.json())
    // .then(json =>{
    //     this.setState({data:json, isLoaded:true});
    //     console.log(this.data)
    // }) 

//     axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
//   .then(function (response) {
//     this.setState({datas:response, isLoaded:true});
//     console.log(...this.data)  
//   })

}
    render() { 
        return ( <div></div>
            // <div> 
            //  {/* {this.state.data.map((ele,id) => <Detailsitem
            //         dat={ele}
            //         key={ele.id}
                    
            //     />)} */}
               
            //     </div> 
         );
    }
}
 
export default Details;




// <div>
//  Completet: {this.state.data.name ? "Ja" : "Nein"} <br />
//   ID: {this.state.data._id}<br />
//    </div>