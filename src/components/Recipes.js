import PropTypes from 'prop-types';
import React from 'react';
import {Recipe} from './Recipe';
import barStyles from '../styles/bar.css';
import recipesStyles from '../styles/recipes.css';

export const Recipes = props =>
    <>
        <h2 className={barStyles.subTitle}>Recipes</h2>
        <ul className={recipesStyles.recipes}>
            {
                props.recipes.map((item, index) =>
                    <Recipe
                        key={index}
                        {...item}
                    />
                )
            }
        </ul>
    </>;

Recipes.displayName = 'Recipes';
Recipes.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.shape(Recipe.propTypes))
};
Recipes.defaultProps = {
    recipes: []
};
