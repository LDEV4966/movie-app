import React from "react";
import "./Detail.css"
import axios from "axios";
const API_KEY = "AIzaSyBueyKcxmLWsSC90Mlx0NGA2IyLkaz8eIY"; // youtube apikey
class Detail extends React.Component {

    state = {
        TrailerIsLoading : true ,
        videoId : "initial"
      };

    getMovieTrailer = async (MovieTitle) =>{
        const {
            data:{
            items 
        }} = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=1&q=${MovieTitle}trailer&order=relevance`);
        items.forEach(item => {
            const videoId = item.id.videoId;
            this.setState({TrailerIsLoading:false , videoId : videoId })
        });
        
      };

    componentDidMount(){
        const { history , location } = this.props;
        if( location.state === undefined ){
            history.push("/");
        }
        else {
            this.getMovieTrailer(location.state.title);
        }
    }

    render() {
        const { location } = this.props;
        const {TrailerIsLoading , videoId} =  this.state ;
        const movie = location.state;
         if( movie){
            return (
                <div className = "detail-container">
                    <div className = "background">
                        <img className="background__poster" src = {movie.poster} alt = {movie.title} title = {movie.title}/>
                    </div>
                    <div className = "contents">
                        <div className = "youtube__link">
                            { TrailerIsLoading ? (
                            <span className ="loding__film">
                                Loading...
                            </span>
                            ) : (
                                <div className = "youtube__contents">
                                    <h1> Trailer  </h1>
                                    <iframe className="youtube__video" width="500" height="400" title={movie.title} src = {`http://www.youtube.com/embed/${videoId}`} frameBorder = "0" allowFullScreen>
                                    </iframe>
                                </div>
                            )
                            }
                        </div>
                        <div className = "subcontents">
                            <div className = "detail_movie_title">
                                <h2 className = "movie__title">{movie.title}</h2>
                            </div>
                            <div className = "detail_movie_year">
                                <h4 className = "movie__year">{movie.year}</h4>
                            </div>
                            <div className = "detail_movie_genres">
                                <ul className = "movie__genres">
                                    {
                                        movie.genres.map((genre,itemIndex)=> {
                                        return(
                                            <li className = "movie__genre" key = {itemIndex} >{genre}</li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className = "detail_movie_summary">
                                <p className="movie__summary">{movie.summary}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return null;
        }
    }
}

export default Detail;