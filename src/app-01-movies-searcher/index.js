import React, { Component } from 'react';
import fetch from 'unfetch';

function Movie (props) {
  return (
    <div>
      <h1>{props.Title}</h1>
      <img alt={props.Title} src={props.Poster} />
    </div>
  )
}

function MovieList (props) {
  return (
    <div>
      {
        props.movies.map(({Title, Poster}, index) => 
          <Movie key={index} Title={Title} Poster={Poster} />
        )
      }
    </div>
  )
}

function Searcher (props) {
  return (
    <form onSubmit={props.onSubmit}>
    <input
      type='text'
      value={props.searchText}
      onChange={props.onChangeText} />
    <button type='submit'>Search!</button>
  </form>
  )
}

export default class MoviesSearcher extends Component {

  constructor (...args) {
    super(...args)
    this.state = {
      error: undefined,
      results: [],
      totalResults: 0,
      isLoading: true,
      searchTerm: this.props.initialSearchTerm
    }
  }

  fetchMovies () {
    if (this.state.searchTerm === '') return

    this.setState({
      isLoading: true,
      error: undefined
    })

    fetch('http://www.omdbapi.com/?s=' + this.state.searchTerm)
      .then(res => res.json())
      .then(res => {
        if (res.Error) {
          this.setState({
            isLoading: false,
            error: res.Error
          })
        } else {
          this.setState({
            results: res.Search,
            totalResults: res.totalResults,
            isLoading: false
          })
        }
      })
  }

  componentDidMount () {
    this.fetchMovies()
  }

  renderLoading () {
    return <p>Cargando...</p>
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.fetchMovies()
  }

  render () {
    return (
      <div>
        <Searcher
          onChangeText={this.handleChange}
          onSubmit={this.handleSubmit}
          searchText={this.state.searchTerm}
        />

        {this.state.totalResults}

        {this.state.isLoading && this.renderLoading()}
        
        {!this.state.isLoading && !this.state.error &&
          <MovieList movies={this.state.results} />}
        
        {!this.state.isLoading && this.state.error}
      </div>
    );
  }
}
