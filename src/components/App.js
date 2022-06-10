import { data } from "./data";
import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("Updated");
      this.forceUpdate();
    });
    // Make an api call
    // dispatch action
    store.dispatch(addMovies(data));
    console.log("STATE", this.props.store.getState());
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();

    const index = movies.favourites.indexOf(movie);

    if(index !== -1){
      // found the movie
      return true;
    }
    return false;
  }

  onChangeTab(val) {
    this.props.store.dispatch(setShowFavourites(val))
  }

  render() {
    const {movies, search} = this.props.store.getState(); // {movie: {}, search: {}}
    const { list, favourites, showFavourites } = movies; 
    console.log("Rendered", this.props.store.getState());
    const displayMovie = showFavourites ? favourites : list;
    console.log(displayMovie)

    return (
      <div className="App">
        <Navbar 
          dispatch={this.props.store.dispatch}
          search={search}
        />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '': 'active-tabs'}`}  onClick={() => this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs': ''}`} onClick={() => this.onChangeTab(true)}>Favourites</div>
          </div>

          <div className="list">
            {displayMovie.map((movie, index) => {
              return <MovieCard 
              movie={movie} 
              key={index} 
              dispatch={this.props.store.dispatch}
              isFavourite={this.isMovieFavourite(movie)}
              />;
            })}
          </div>
          {displayMovie.length === 0 ? <div className="no-movies">No Movies to display</div>: null}
        </div>
      </div>
    );
  }
}

export default App;
