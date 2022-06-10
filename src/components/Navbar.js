import React from 'react';
import { handleMovieSearch, addMovieToList } from '../actions';

class Navbar extends React.Component {

  constructor(){
    super();
    this.state = {
      showSearchResults: true,
      searchText: ''
    };
  }

  handleAddMovies = (movie) => {
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
        return (
            <div className="nav">
              <div className='search-container'>
                  <input type='text' onChange={this.handleChange}/>
                  <button id='search-btn' onClick={this.handleSearch}>Search</button>
              </div>
            </div>
          );
    };
  
}

export default Navbar;
