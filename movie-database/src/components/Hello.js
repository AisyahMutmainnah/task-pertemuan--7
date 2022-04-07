/**
 * Membuat Component Hello
 * Mencetak UI (elements)
 */

function Hello(props) {
    console.log(props);

    // Melakukan destructing props 
    const { name } = props;

    /**di luar return adalah JavaScript biasa
    const nama = "Aufa";
    const major = "Informatics"
    */


    //di dalam return adalah jsx
    // di mana dia merepresentasikan UI atau element yg mo kita tampilkan ke user
    return(
        <div className="hello">
            <h2>Hello React</h2>
            <p>{name} - Frontend Engineer</p>
        </div>
    );
}

export default Hello;