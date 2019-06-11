'use strict'
import React,{Component} from 'react';
import AddFilmForm from './add_form/AddFilmForm.js';
import FilmsTable from './films_table/FilmsTable.js'
export default class App extends React.Component{
    
        state={
            films:[],
            active:0,
            term:''
        }
    
    componentDidMount(){

    }
    componentWillMount(){

    }
    uploadFilm_fromForm=(state)=>{
        console.log(state);
    }
    updateData(config) {
        this.setState(config);
      }

    render(){
        return(
            <div className='app'>
                <AddFilmForm uploadFilm={this.uploadFilm_fromForm} />
                <FilmsTable films={this.state.films} update={this.updateData.bind(this)}/>
                
            </div>
        )
    }
}