import PropTypes from 'prop-types';
import React from 'react';
import inventoryStyles from '../styles/inventory.css';

export const InventoryItem = props =>
    <li className={inventoryStyles.inventoryItem}>
        <span className={inventoryStyles.name}>{props.name}</span>
        <span className={inventoryStyles.quantity}>{props.quantity}</span>
        <span className={inventoryStyles.unit}>{props.liquid && 'oz'}</span>
    </li>;

InventoryItem.displayName = 'InventoryItem';
InventoryItem.propTypes = {
    liquid: PropTypes.bool,
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};
