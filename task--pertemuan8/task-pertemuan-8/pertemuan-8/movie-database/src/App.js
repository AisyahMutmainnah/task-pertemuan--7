// Import Halaman Home
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import CreateMovie from "./pages/movie/Create";
import Nowplaying from "./pages/movie/NowPlaying";
import TopRated from "./pages/movie/TopRated";


function App() {
  /**
   * Menampilkan Halaman Home.
   * Tag div bisa diganti dengan tag <>.
   * Tag <> adalah React fragment
   */
  return (
    <>

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/create" element={<CreateMovie />} />
          <Route path="/movie/popular" element={<TopRated />} />
          <Route path="/movie/now" element={<Nowplaying />} />
          <Route path="/movie/top" element={<TopRated />} />
        </Routes>
      </Layout>
      
    </>
  );
}

export default App;
