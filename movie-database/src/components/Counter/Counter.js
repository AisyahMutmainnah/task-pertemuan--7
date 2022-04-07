import { useState } from "react";

function Counter() {
    //membuat state hasil
    const [hasil, setHasil] = useState(0);

    function tambahNilai() {
        //menjalankan fungsi sethasil untuk mengubah state
        setHasil(hasil + 1);
    }

    return(
        <div>
            <p>Hasil: {hasil}</p>
            <button onClick={tambahNilai}>Add</button>
        </div>
    );
}