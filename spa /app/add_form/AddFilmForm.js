import React,{Component} from 'react';

export default class AddFilmForm extends Component{
    
        state={
            year:'',
            name:'',
            format_type:'',
            actors:''
        }

    onChangeInput= (event)=> {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
      }
    
    
    render(){
   
        return(
            <div className='add_film'>
                <p className='textForm'>Add film:</p>
                <form className='add_film__form'>
                    <label>Film name:<input name="name"  type="text"
                               value={this.state.name} onChange={this.onChangeInput}/></label>
                    <label>Year of film: <input name="year"  type="text"
                               value={this.state.year} onChange={this.onChangeInput}/></label>
                    <label>Format type: <input name="format_type"  type="text"
                               value={this.state.format_type} onChange={this.onChangeInput}/></label>
                    <label>Actors: <input name="actors"  type="text"
                               value={this.state.actors} onChange={this.onChangeInput}/></label>
                               <button  onClick={this.props.uploadFilm({...this.state})}>Add new film</button>
                </form>
            </div>

        )
    
        }
}