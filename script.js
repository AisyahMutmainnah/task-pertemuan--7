console.log("Mulai React");

/**
 * Membuat Component Hello
 * Mencetak UI (elements)
 */

function Hello(props) {
    console.log(props);

    // Melakukan destructing props 
    const { name } = props 

    /**di luar return adalah JavaScript biasa
    const nama = "Aufa";
    const major = "Informatics"
    */


    //di dalam return adalah jsx
    // di mana dia merepresentasikan UI atau element yg mo kita tampilkan ke user
    return(
        <div className="hello">
            <h2>Hello React</h2>
            <p>Saya {props.name} - Frontend Engineer</p>
        </div>
    );
}

/**
 * Membuat Component Header
 * Menampilkan Navigasi
 */

function Header () {
    return(
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

/**
 * Membuat Component Main
 * Menampung Konten Utama
 */

function Main() {
    // Mengirim props name ke component Hello
    return(
        <main>
            <Hello name="Aufa"/>
            <Hello name="Aisyah"/>
            <Hello name="Ummu"/>
            <Hello name="Navella"/>
            <Hello name="Wiwit"/>
        </main>
    );
}


/**
 * Membuat Component Footer
 * Menampilkan footer web
 */

function Footer() {
    return(
        <footer>
            <h2>Copyright aufaroot18</h2>
            <p>Dibuat menggunakan ReactJS</p>
        </footer>
    );
}


/**
 * Membuat function app
 * untuk menampung smua function
 */

function App() {
    return(
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}



/**
 * Mencetak Component Hello ke div root
 */

ReactDOM.render(<App />, document.getElementById("root"))