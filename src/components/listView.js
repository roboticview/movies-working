import React, { Component } from 'react';
import axios from 'axios';
import DetailView from './detail.View';
import CardComponent from './cardComponent';
import HeaderComponent from './headerComponent';
import MenuComponent from './menuComponent';
import HeroComponent from './heroComponent';


class ListView extends Component {
    constructor(){
        super();
        this.state = { 
            visible : false,
            moviesList : [],
            movie : "",
            allGenres:[],
            currentGenre:""
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleGenre = this.handleGenre.bind(this)
    }
    getGenres(movies){
        const allGenresList = movies.map((m)=>m.attributes.genre)
        const uniqueGenres = ["All Genres", ...new Set(allGenresList)]
        this.setState({allGenres:uniqueGenres})
    }
    handleGenre(genre){
        console.log("This is the genre we get", genre)
        this.setState({
            currentGenre : genre
        })
    }
    handleClick(id){
    const url = `http://localhost:1337/api/movies/${id}`
    axios
        .get(url)
        .then((response)=>this.setState({movie:response.data, visible  : true})
        )}
    componentDidMount(){
        const url = "http://localhost:1337/api/movies?populate=*";
        axios
            .get(url)
            .then((response)=>this.setState(
                    { moviesList : response.data.data}, 
                    this.getGenres(response.data.data)
                ))
    }
    render() { 
        console.log("This is Render method current Genre",this.state.currentGenre)
        const { currentGenre,  moviesList } = this.state
        const filteredMovies = currentGenre && currentGenre !== "All Genres" ? moviesList.filter((m)=>
           ( m.attributes.genre === currentGenre )) : moviesList
        return (
            <div className='container'>
                <HeaderComponent/>
                <MenuComponent genres = {this.state.allGenres} handleGenre = {this.handleGenre}/>
                <HeroComponent/>
                <div className="row mb-2">
                    <div className='col-md-6'>
                        {filteredMovies.map((movie)=>
                        <CardComponent 
                            key={movie.id}
                            objID = {movie.id} 
                            handleClick = {this.handleClick} 
                            movie = {movie} 
                            movieImage = {movie.attributes.image.data.attributes.url}
                            />
                        )}
                    </div>
                    <div className='col-md-6'>
                        { this.state.visible ? <DetailView movie={this.state.movie} /> : ""}
                    </div>
                </div>
        </div>
        );
    }
}
 
export default ListView;

// 1. Title
// 2. Genre
// 3. year of release
// 4. rating
// 5. image
// 6. description
// 7. lead actor 