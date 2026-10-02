
import { useParams } from "react-router-dom";
import movies from "../data/movies";
function Movie_Details(){
const {id} =useParams()
const movie=movies.find((movie)=>movie.id===Number(id));
if(!movie){
    return (
        <h1> Movie not found</h1>
    );

}
    return (
        <div>
<h1>Movie Details</h1>
 <p>Title:{movie.title}</p>  
 <p>Title:{movie.genre}</p>  
 <p>Title:{movie.rating}</p>  
 
 <p></p>  
        </div>
    )

}

export default Movie_Details;