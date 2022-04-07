import { nanoid } from "nanoid";
import styles from "./AddMovieForm.module.css";
import { useState } from "react";


function AddMovieForm(props) { 
    const { movies, setmovies} = props;

    //membuat variable state title
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

    //buat fungsi handleTitle
    function handleTitle(e) {
        //set title dengan nilai baru: nilai yg di input
        setTitle(e.target.value);

    }

    function handleDate(e) {
        setDate(e.target.value);
    }

    function handleSubmit(e) {
        //mencegah form agar tidak direfresh
        e.preventDefault();

        const movie = {
            id: nanoid(),
            title: title,
            year: date,
            type: "Movie",
            poster: "https://picsum.photos/300/400"
        }; 

        setMovies([...movies, movie]);
    }


    return(
        <div className={styles.container}>
            <section className={styles.AddMovieForm}>
                <div className={styles.AddMovieForm__left}>
                    <img className={styles.AddMovieForm__image} 
                    src="https://picsum.photos/400/300" alt="placeholder"/> 
                </div> 
                <div className={styles.AddMovieForm__right}>
                    <h2 className={styles.AddMovieForm__title}>Add Movie</h2>
                    {/** kasih event onSubmit */} 
                    <form 
                        onSubmit={handleSubmit}
                        className={styles.AddMovieForm__form}>
                            <label className={styles.AddMovieForm__label} htmlFor="">Title</label> 
                            <br/>
                            <input 
                                id="title" 
                                className={styles.AddMovieForm__input} 
                                type="text" 
                                value={title} 
                                //tambahka event onChange
                                onChange={handleTitle}
                            /> 
                            <br/>
                            <label className={styles.AddMovieForm__label} htmlFor="">Date</label> 
                            <br/>
                            <input 
                                id="date"
                                className={styles.AddMovieForm__input} 
                                type="text" 
                                value={date}
                                onChange={handleDate}
                            /> 
                            <br />
                            <button className={styles.AddMovieForm__button}>Submit</button> 
                    </form>
                </div>
            </section> 
        </div> 
    ); 
} 

export default AddMovieForm;