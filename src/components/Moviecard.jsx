
import { Link } from "react-router-dom";
function MovieCard({movie,OnTogglefavorite,favorites}){

    return(
        <div>
            <h1>Title:{movie.title}</h1>
            <p>Genre:{movie.genre}</p>
            <p>Rating:{movie.rating}</p>
            <Link to={`/movies/${movie.id}`}>MovieDetails</Link>
            <button  onClick={()=>
                OnTogglefavorite(movie.id)
            }>

{favorites.includes(movie.id)
        ? "❤️ Favorited"
        : "🤍 Add Favorite"}


            </button>
        </div>
        
    )


}
export default MovieCard;