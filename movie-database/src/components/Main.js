import Hello from "./Hello";
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


export default Main;