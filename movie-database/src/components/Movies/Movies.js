import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
//import data movies
import data from "../../utils/data";
import { useState } from "react";
import { nanoid } from "nanoid";

function Movies(props) {
    const { movies, setmovies} = props;
   
   
    //membuat state movies
    
    

    //membuat fungsi untuk handle click
    function handleClick() {
        const movie = {
            id: nanoid,
            title: "Spiral Jigsaw",
            year: 2021,
            type: "Movie",
            poster: "https://picsum.photos/300/400",
        };

       //jalanin fungsi setMovie
       //tambahlan movie ke dalam movies
       //spread operator : copy data array
       setMovies([...movies, movie]);
    }
    /**
     * Memanggil Component Movie di dalam component Movies
     */
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movie__container}>
                    {/*looping: map */}
                    {
                        movies.map((movie) => {
                            return <Movie key={movie.id} movie={movie} />;
                        })
                    }
                    
                </div>
                <button onClick={handleClick}>Add Movie</button>
            </section>
        </div>
    );
}


export default Movies;