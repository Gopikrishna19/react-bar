import PropTypes from 'prop-types';
import React from 'react';
import recipesStyles from '../styles/recipes.css';
import {Ingredients} from './Ingredients';
import {Inventory} from './Inventory';
import {RecipeCounter} from './RecipeCounter';

export const Recipe = props =>
    <section className={recipesStyles.recipe}>
        <h4 className={recipesStyles.name}>{props.name}</h4>
        <Ingredients ingredients={props.ingredients}/>
        <RecipeCounter onChange={() => null}/>
    </section>;

Recipe.displayName = 'Recipe';
Recipe.propTypes = {
    ingredients: Inventory.propTypes.inventory,
    name: PropTypes.string.isRequired,
    onBrew: PropTypes.func.isRequired
};
