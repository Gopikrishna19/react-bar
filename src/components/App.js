import React, {Component} from 'react';
import {Inventory} from './Inventory';
import barStyles from '../styles/bar.css';
import {Recipes} from './Recipes';

export class App extends Component {
    state = {};

    getInventory = async () => {
        const response = await fetch('./inventory.json');
        const inventory = await response.json();

        this.setState({inventory});
    };

    getRecipes = async () => {
        const response = await fetch('./recipes.json');
        const recipes = await response.json();

        this.setState({recipes});
    };

    componentDidMount() {
        this.getInventory();
        this.getRecipes();
    }

    render() {
        return (
            <>
                <h1 className={barStyles.title}>React Bar</h1>
                <Inventory inventory={this.state.inventory}/>
                <Recipes recipes={this.state.recipes}/>
            </>
        );
    }
}

App.displayName = 'App';
