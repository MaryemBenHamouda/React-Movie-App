import React,{Component} from 'react'

class Rating extends Component{
    constructor(props){
        super(props)
        this.state={
 
        }
    }
    render(){
        let stars=[]
        for(let i=0;i<5;i++){
            if(this.props.rating > i)
            // si les start envoyer de le table d'objet et inferieur  a i on affiche un etoile colore sinon vide
                stars.push(<i onClick={()=> this.props.setRate(i+1)} className="fas fa-star 2x"></i>)
            else
               stars.push(<i onClick={()=> this.props.setRate(i+1)} className="far fa-star 2x"></i>)

        }
        return(
            <div>
                {stars}
            </div>
        )
    }
}
export default Rating