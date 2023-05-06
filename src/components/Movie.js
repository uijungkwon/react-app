import PropTypes from "prop-types";
import {Link} from "react-router-dom";
function Movie({id, coverImage, title, summary, genres}){//parent 컴포넌트로부터 정보들을 받아옴, prop은 우리 맘대로 이름 결정 가능 
    return( <div>
          <img src = {coverImage} alt={title} />
          <h2>
            <Link to ={`/movie/${id}`}>{title}</Link>
            </h2>
          <p>{summary}</p>
          <ul>
            {genres.map((g) =>
             (<li key = {g}>{g}</li>)
             )}
          </ul>
        </div>
        );
    }
    
Movie.propTypes = {
    id:PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie;