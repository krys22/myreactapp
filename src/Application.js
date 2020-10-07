import React, {Component} from 'react';

class Application extends Component{

    constructor(props){
        super(props);
    }


    render(){

        let name = 'Maryam';

        return (<div>
            <h1>My first react app is dedicated to {name}</h1>
            
            </div>);
    }
    
}

export default Application;