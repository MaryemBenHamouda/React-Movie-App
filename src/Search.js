import React, { Component } from "react";
import { FormControl } from 'react-bootstrap'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
          

        }
        
    }
      
        render(){
     
            return (
                <div className="flex"> 
                {/* on prendre le valeur de l'input et l'envoyer au parent app */}
                     <FormControl  onChange={(e)=>this.props.data(e.target.value)} type="text" placeholder="Type movie name to search" className="mr-sm-2 input" />
                {/* // <input onChange={(e)=>props.getSearch(e.target.value)} */}
              

                </div>
              

            )
        }
    }

    export default Search