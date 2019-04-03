import PropTypes from 'prop-types';
import React from 'react';
import inventoryStyles from '../styles/ingredient.css';

export const Ingredient = props =>
    <li className={props.className}>
        <span className={inventoryStyles.name}>{props.name}</span>
        <span className={inventoryStyles.quantity}>{props.quantity}</span>
        <span className={inventoryStyles.unit}>{props.liquid && 'oz'}</span>
    </li>;

Ingredient.displayName = 'Ingredient';
Ingredient.propTypes = {
    className: PropTypes.string,
    liquid: PropTypes.bool,
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};
