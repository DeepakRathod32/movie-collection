import React from 'react';
import { handleMovieSearch, addMovieToList } from '../actions';
// import { data } from './data';


class Navbar extends React.Component {

  constructor(){
    super();
    this.state = {
      
      searchText: ''
    };
  }

  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovieToList(movie));
    this.setState({
      showSearchResults: false
    });
  }

  handleSearch = () => {
    const { searchText } = this.state;

    this.props.dispatch(handleMovieSearch(searchText));
  };

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value
    });
  }
    render(){
      const { result: movie, showSearchResults} = this.props.search;
      console.log('dddddddd', movie)
        return (
            <div className="nav">
              <div className='search-container'>
                  <input type='text' onChange={this.handleChange}/>
                  <button id='search-btn' onClick={this.handleSearch}>Search</button>

                  {showSearchResults && 
                    <div className='search-results'>
                      <div className='search-result'>
                        <img src={movie.Poster} alt="search-pic"/>

                        <div className='movie-info'>
                          <span>{movie.Title}</span>
                          <button onClick={() => this.handleAddToMovies(movie)}>
                              Add to Movies
                            </button>
                        </div>
                      </div>
                    </div>
                  }
              </div>
            </div>
          );
    };
  
}

export default Navbar;
