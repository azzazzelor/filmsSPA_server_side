import React, {Component} from 'react';
import reques from './utils/loader';

class App extends Component {

	state = {
        films: []
    }

    componentDidMount() {
    	reques.get('/api/films')
    		.then((response) => {
    			this.setState({ films: response });
    			console.log(this.state.films);
    		})
    		.catch(console.log);
    }

    render () {
	    return (
	    	<div>
	            
	        </div>
	    );
    }
}

export default App;