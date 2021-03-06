import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";

// Menangkap props
function AddMovieForm(props) {
  
  /**
   * Ini hanya snippet(potongan) code.
   * Kode yang lainnya tetap sama.
   */

  // Destructing props: state movies
  const { movies, setMovies } = props;

  // Membuat state title dan date
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");
  const [genre, setGenre] = useState("");

  // Membuat state: isTitleError, isDateError
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isLinkError, setIsLinkError] = useState(false);
  const [isGenreError, setIsGenreError] = useState(false);

  /**
   * Membuat fungsi handleTitle
   * Dijalankan ketika nilai input berubah
   */
  function handleTitle(e) {
    /**
     * Jalankan fungsi setTitile.
     * Set title nilai baru: input saat ini.
     */
    setTitle(e.target.value);
  }

  /**
   * Membuat fungsi handleDate
   * Dijalankan ketika nilai input berubah
   */
  function handleDate(e) {
    /**
     * Jalankan fungsi setDate.
     * Set date nilai baru: input saat ini.
     */
    setDate(e.target.value);
  }

  /**
   * Membuat fungsi handleLink
   * Dijalankan ketika nilai input berubah
   */
  function handleLink(e) {
    /**
     * Jalankan fungsi setLink.
     * Set title nilai baru: input saat ini.
     */
    setLink(e.target.value);
  }

  /**
   * Membuat fungsi handleGenre
   * Dijalankan ketika nilai input berubah
   */
   function handleGenre(e) {
    /**
     * Jalankan fungsi setGenre.
     * Set title nilai baru: input saat ini.
     */
     setGenre(e.target.value);
  }

  function handleSubmit(e) {
    /**
     * Mencegah perilaku default form.
     * Mencegah form direfresh ketika disubmit.
     */
    e.preventDefault();

    // Jika title kosong, set isTitleError true
    if (title === "") {
      setIsTitleError(true);
    }
    // Jika title kosong, set isTitleError true
    else if (date === "") {
      setIsDateError(true);
    }
    // Jika tidak, maka push movie dan set error false
    else {
      const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: "Movie",
        poster: "https://picsum.photos/300/400",
      };

      // SOLVED: HOW TO ADD MOVIE TO MOVIES :)
      setMovies([...movies, movie]);

      setIsTitleError(false);
      setIsDateError(false);
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label}>
                Title
              </label>
              <input
                id="title"
                className={styles.form__input}
                type="text"
                name="title"
                // Memberikan value input: title
                value={title}
                // Memberikan event onChange
                onChange={handleTitle}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isTitleError true maka render error
               */}
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="date" className={styles.form__label}>
                Date
              </label>
              <input
                id="date"
                className={styles.form__input}
                type="text"
                name="date"
                // Memberikan value input: date
                value={date}
                // Memberikan event onChange
                onChange={handleDate}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isDateError true maka render error
               */}
              {isLinkError && <Alert>Link Wajib Diisi</Alert>}
            </div>

            <div className={styles.form__group}>
              <label htmlFor="link" className={styles.form__label}>
                Link Image
              </label>
              <input
                id="link"
                className={styles.form__input}
                type="text"
                name="link"
                // Memberikan value input: link
                value={link}
                // Memberikan event onChange
                onChange={handleLink}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isTitleError true maka render error
               */}
              {isGenreError && <Alert>Genre Wajib Diisi</Alert>}
            </div>

             
            <div className={styles.form__group}>
              <label htmlFor="genre" className={styles.form__label}>
                Genre <br></br>
                <select className={styles.AddMovieForm__select}
                  name="genre"
                  onChange={handleGenre}
                  value={genre}>

                    <option value=""></option>
                    <option value="Fiction">Fiction</option>
                    <option value="Romane">Romance</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Action">Action</option>
                    <option value="Nature">Nature</option>

                </select>
              </label>
            
              {/*
               * Menambahkan infline if: operator &&
               * Jika isTitleError true maka render error
               */}
              {isGenreError && <Alert>Genre Wajib Diisi</Alert>}
            </div>
            
            <div>
              <button className={styles.form__button}>Add Movie</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
