function MovieCard({movie}){

    return(
        <div>
            <h1>Title:{movie.title}</h1>
            <p>Genre:{movie.genre}</p>
            <p>Rating:{movie.rating}</p>
        </div>
    )


}
export default MovieCard;