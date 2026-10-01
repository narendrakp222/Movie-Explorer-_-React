import { BrowserRouter,Routes,Route } from "react-router-dom";

// importing all the pages
import Home from "./pages/Home";
import About from "./pages/About";
import Movie_Details from "./pages/Movie_Details";
import Movies from "./pages/Movies";
import Navbar from "./components/Navbar"

function App(){

  return (

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/Movie_Details" element={<Movie_Details/>} />
    </Routes>
    
    
    </BrowserRouter>


  );

}

export default App;