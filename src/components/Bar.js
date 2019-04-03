import React, {Component} from 'react';
import {Inventory} from './Inventory';
import barStyles from '../styles/bar.css';

export class Bar extends Component {
    state = {};

    async componentDidMount() {
        const response = await fetch('./inventory.json');
        const inventory = await response.json();

        this.setState({inventory})
    }

    render() {
        return (
            <>
                <h1 className={barStyles.title}>React Bar</h1>
                <Inventory inventory={this.state.inventory}/>
            </>
        );
    }
}

Bar.displayName = 'Bar';
