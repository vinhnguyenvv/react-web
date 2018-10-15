import React, { Component } from 'react';

import './Home.css';
import Form from './Form';
const API_KEY = "132f816a257d768ba7db6b116c6feaa3";



class Home extends Component {
    state = {
        recipes: []
    }

    getText = async (e) => {
        const name = e.target.elements.racName.value;
        e.preventDefault();
        const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${name}&count=10`);
        const data = await api_call.json();
        this.setState({ recipes: data.recipes })
        console.log(this.state.recipes);

    }

    render() {
        return (
            <div className="container">
                <Form getText={this.getText} />
                {this.state.recipes.map((recipe) => {
                    return <p key={recipe.recipe_id}>{recipe.title}</p>
                })}
                {/* <div className="color-red">home</div> */}
            </div>
        );
    }
}

export default Home;