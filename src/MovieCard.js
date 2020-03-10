import React, { Component } from "react";
import Rating from "./Rating";


class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
        render(){
     
            return (
                <div>{                    
                    <div className="card">
                         <p><Rating rating={this.props.data.rating} setRate={()=>{}}/></p> 
                         {/* on appelle le component rating pour afficher les start et la fonction vide pour n'affiche pas un ereur parce que le rating a 2 props  */}
                         <img  className="imge" src={this.props.data.image} width="250px" height="300px" />
                         <p>{this.props.data.title}--{this.props.data.year}</p>
                      </div>
                     
                }                    
                </div>
            )
        }
}
export default MovieCard