import React from "react";

// create the class for this component
class ItemApi extends React.Component{
    // constructor for state defining
    constructor (){
        super()
        // define the state key-value object
        this.state={
            name:null,
            birth_year:null,
            homeworld: null,
            films: [],
            // put a pair for verifying the newData coming
            newData:false

        }

    }

    // define a method that will set the state under command received from client
    getNew(){
        // implement the random number feature
        const randomNum=Math.round(Math.random()*82)
        // make url to be a variable using temple literal
        const url=`https://swapi.dev/api/people/${randomNum}`
        // fetch the data using the url; then set the state uisng these data.
        
        this.setState()
    }

    // in render, implement the return statment so that the component can be use the all set state data to complete the jsx code for the browser as output; 
    // add button if there is need for button in component.  
    // complete the feature of showing the updated state on browser in dynamic way. 
    render(){
        return(
            <div>
                <ItemApi />
            </div>
        )
    }
}