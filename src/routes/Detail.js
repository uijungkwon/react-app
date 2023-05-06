import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
/*Detail 페이지에서도 영화관련 정보가 실시간으로 나오도록 코드수정하기 */ 
function Detail(){
    const {id} = useParams() //movie.id를 함수를 사용해 가져옴 
    const[loading, setLoading] = useState(true);
    const[currMovie, setCurrMovie] = useState("");//json을 state에 넣어 영화 "객체" 사용

    const getMovie = async () => {
      const json = await(
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
      //movie의 id를 받아 movie정보를 json"객체"로 받아 "json" 상수에 저장
      //console.log(json);
      setCurrMovie(json);
      setLoading(false);
    };
    useEffect(()=>{
     getMovie();// 맨처음 한번만 호출되도록 생성
    },[]);
    return ( //Props를 이용하여 movie의 정보를 가져옴 //단순하게 정보 나열 
        <div>
            {loading ? <h1>loading...wait please..</h1> 
            : (<div>
                <img src = {currMovie.data.movie.medium_cover_image}></img>
                <h3>Title : {currMovie.data.movie.title}</h3>
                <h3>Genres : {currMovie.data.movie.genres[0]}</h3>
                <h3>Year : {currMovie.data.movie.year}</h3>
                <h3>Languages : {currMovie.data.movie.language}</h3>
                <h3><Link to ='/' style = {{textDecoration: "none" , color:"Red"}}>Go Back!!</Link></h3>
              </div>
            )}
        </div>
    );
}
export default Detail;