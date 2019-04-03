import PropTypes from 'prop-types';
import React from 'react';
import recipeStyles from '../styles/recipes.css';
import {Ingredients} from './Ingredients';
import {Inventory} from './Inventory';

export const Recipe = props =>
    <section className={recipeStyles.recipe}>
        <h4 className={recipeStyles.name}>{props.name}</h4>
        <Ingredients ingredients={props.ingredients}/>
    </section>;

Recipe.displayName = 'Recipe';
Recipe.propTypes = {
    ingredients: Inventory.propTypes.inventory,
    name: PropTypes.string.isRequired
};
