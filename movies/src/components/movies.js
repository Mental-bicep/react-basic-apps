import React, { Component } from 'react'
import {getMovies} from './getmovies'


export default class Movies extends Component {
  constructor(props){
      super(props);
      this.state={
          movies:getMovies(),
          currText:''
      }
  }

  handleClick=(id)=>{
    //  ! function which deletes when we click on the delete button on each row 
    let newArr=this.state.movies.filter((ele)=> ele._id!==id);
    this.setState({movies:newArr});
  }

  handleChange=(e)=>{
      //~ function which chnages the current state of text input 
      //~ ie. if we type somethin git must be reflected on UI as well so for that we need to change the state
      //^ this function also used for searching the movies
      

      this.setState({currText:e.target.value});
    //   if(this.state.currText==='') {
         
    //     this.setState({filters:this.state.movies});
    //   }
    //   else{
    //       let newArr=this.state.movies.filter((ele)=>{
    //           return ele.title.includes(this.state.currText);
    //       })
    //       this.setState({filters:newArr});
    //   }

  }
  
    render() {
        let {movies,currText}=this.state;
        let filteredMovies=[];
        if(currText!==''){
            filteredMovies=movies.filter(ele=>{
                let title=ele.title.trim().toLowerCase();
                return title.includes(currText.toLowerCase());
            })
        }
        else filteredMovies=movies;
        if(filteredMovies==null) console.log("fmovies is null");

        return (
        
      <div>
        
            <div className='row'>
                <div className='col-3'>Hello</div>

                <div className='col-9'>
                    <input type="text" onChange={this.handleChange} value={this.state.currText}></input>
                    {/* <button type="button" class="btn btn-danger">Danger</button> */}
                    
                    <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Stock</th>
                                <th scope="col">Rate</th>
                                <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredMovies.map((movie)=>(
                                        <tr  key={movie._id}>
                                            <th scope="row"></th>
                                            <td >{movie.title}</td>
                                            <td>{movie.genre.name}</td>
                                            <td>{movie.dailyRentalRate}</td>
                                            <td>{movie.numberInStock}</td>
                                            <td> <button onClick={()=>this.handleClick(movie._id)} type="button" className="btn btn-danger">Delete</button> </td>
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



