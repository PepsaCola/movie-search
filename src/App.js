import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/home";
import {Movies} from "./pages/movie/movie";
import {MovieDetails} from "./pages/movieDatails/movieDatails";
import {Cast} from "./pages/cast/cast";
import {Reviews} from "./pages/reviews/reviews";
import {Shared} from "./pages/shared/shared";
import './styled.css'

 export const App=()=> {
  return (
      <Routes>
        <Route path="/" element={<Shared/>} >
          <Route index element={<Home/>} />
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/movies/:movieId' element={<MovieDetails/>}>
              <Route path='cast' element={<Cast/>}/>
              <Route path='reviews' element={<Reviews />}/>
          </Route>
        </Route>
      </Routes>
  );
}


