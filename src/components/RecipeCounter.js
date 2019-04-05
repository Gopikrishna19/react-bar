import React, {Component} from 'react';
import PropTypes from 'prop-types';
import recipesStyles from '../styles/recipes.css';

const capZero = (count) => count < 0 ? 0 : count;

export class RecipeCounter extends Component {
    state = {count: 0};

    decrementCount = () => this.updateCount(capZero(this.state.count - 1));

    incrementCount = () => this.updateCount(this.state.count + 1);

    updateCount = (count) => {
        this.setState({count});
        this.props.onChange(count);
    };

    render() {
        return (
            <div className={recipesStyles.counter}>
                <button
                    className={recipesStyles.counterDecrementButton}
                    onClick={this.decrementCount}
                >
                    {'-'}
                </button>
                <span className={recipesStyles.count}>
                    {this.state.count}
                </span>
                <button
                    className={recipesStyles.counterIncrementButton}
                    onClick={this.incrementCount}
                >
                    {'+'}
                </button>
            </div>
        );
    }
}

RecipeCounter.displayName = 'RecipeCounter';
RecipeCounter.propTypes = {
    onChange: PropTypes.func.isRequired
};
