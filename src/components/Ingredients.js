import PropTypes from 'prop-types';
import React from 'react';
import {Ingredient} from './Ingredient';
import ingredientsStyles from '../styles/ingredients.css';

export const Ingredients = props =>
    <>
        <ul className={ingredientsStyles.ingredients}>
            {
                props.ingredients.map((item, index) =>
                    <Ingredient
                        className={ingredientsStyles.ingredient}
                        key={index}
                        {...item}
                    />
                )
            }
        </ul>
    </>;

Ingredients.displayName = 'Ingredients';
Ingredients.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.shape(Ingredient.propTypes))
};
Ingredients.defaultProps = {
    ingredients: []
};
