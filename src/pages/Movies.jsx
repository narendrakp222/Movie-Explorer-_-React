import movies from "../data/movies"
import MovieCard from "../components/Moviecard";
import { useState } from "react";

function Movies() {
    const [search, Setsearch] = useState("")
    const filteredmovie = movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()))
    const [favorites,Setfavorites]=useState([])
    const Togglefavorite=(id)=>{
        if(favorites.includes(id)){
                    Setfavorites(favorites.filter((favorite_id)=>favorite_id!==id));
        }
        else{
            Setfavorites([...favorites,id])
        }
    };

    return (
        <div>
            <input type="text" placeholder="Search Movies..." value={search} onChange={(e) => {
                Setsearch(e.target.value)
            }} />
            {
                filteredmovie.length === 0 ? (<h1>Movie NOt found</h1> ) : (
                    filteredmovie.map((movie) => (
                        <MovieCard key={movie.id} movie={movie}
                        OnTogglefavorite={Togglefavorite} favorites={favorites}
                        />))
                )
            }

            <h1>Movies</h1>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} OnTogglefavorite={Togglefavorite} favorites={favorites} />
            ))}
        </div>

    )
}

export default Movies;