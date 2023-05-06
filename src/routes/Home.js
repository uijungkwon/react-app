import { useState, useEffect } from "react";
import Movie from "../components/Movie";
//우리의 App componenet를 모두 갖게됨
function Home(){
  const [loading, setLoading] = useState(true);
  const[movies, setMovies] = useState([]);

  useEffect(()=>{ 
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    ).then((response) => response.json())
     .then((json) =>{
       setMovies(json.data.movies)
       setLoading(false);
      });

  }, []);

  return (<div>
    {loading ? <h1>Loading...</h1> 
    :<div>
      {movies.map((movie) => ( //객체안에는 실제 api 이름과 똑같이 작성해야함
       <Movie 
        key = {movie.id}
        id = {movie.id}
        coverImage={movie.medium_cover_image} 
        title= {movie.title} 
        summary={movie.summary} 
        genres={movie.genres}
        />
       
       ))}
     </div>
     }
 </div>
 );

}
export default Home;