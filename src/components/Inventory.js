import PropTypes from 'prop-types';
import React from 'react';
import {InventoryItem} from './InventoryItem';
import barStyles from '../styles/bar.css';
import inventoryStyles from '../styles/inventory.css';

export const Inventory = props =>
    <>
        <h2 className={barStyles.subTitle}>Inventory</h2>
        <ul className={inventoryStyles.inventory}>
            {
                props.inventory.map((item, index) =>
                    <InventoryItem
                        key={index}
                        liquid={item.liquid}
                        quantity={item.quantity}
                        name={item.name}
                    />
                )
            }
        </ul>
    </>;

Inventory.displayName = 'Inventory';
Inventory.propTypes = {
    inventory: PropTypes.arrayOf(PropTypes.shape(InventoryItem.propTypes))
};
Inventory.defaultProps = {
    inventory: []
};
