import React, { Component } from 'react'
import {getMovies} from './getmovies'


export default class Movies extends Component {
  constructor(props){
      super();
      this.state={
          movies:getMovies(),
      }
  }

  handleClick=(id)=>{
    let newArr=this.state.movies.filter((ele)=> ele._id!==id);
    this.setState({movies:newArr});
  }
  
    render() {
        let {movies}=this.state;
    return (
      <div>
        
            <div className='row'>
                <div className='col-3'>Hello</div>

                <div className='col-9'>
                    <input type="text"></input>
                    {/* <button type="button" class="btn btn-danger">Danger</button> */}
                    
                    <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Rate</th>
                                <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    movies.map((movie)=>(
                                        <tr  key={movie._id}>
                                            {/* <th scope="row"></th> */}
                                            <td >{movie.title}</td>
                                            <td>{movie.genre.name}</td>
                                            <td>{movie.dailyRentalRate}</td>
                                            <td>{movie.numberInStock}</td>
                                            <td> <button onClick={()=>this.handleClick(movie._id)}type="button" class="btn btn-danger">Danger</button> </td>
                                            
                                        </tr>
                                    ))
                                    
                                }
                            </tbody>
                            </table>

                </div>
            </div>
           
        
      </div>
    )
  }
}
