import React from "react";
import MovieCard from'./MovieCard'

const ListMovies = props => {
         
        return (
            <div className="d-flex flex-wrap">
            {
                 props.data.map(el => <MovieCard data={el}/>)
            }
            </div>
        )
}
    export default ListMovies