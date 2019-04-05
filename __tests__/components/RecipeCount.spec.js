import {shallow} from 'enzyme';
import React from 'react';
import {RecipeCounter} from '../../src/components/RecipeCounter';
import styles from '../../src/styles/recipes.css';

describe('<RecipeCounter/>', () => {
    let component,
        props;

    const getElementByClassName = (className) => component.find(`.${className}`);

    const getDecrementButton = () => getElementByClassName(styles.counterDecrementButton);
    const getIncrementButton = () => getElementByClassName(styles.counterIncrementButton);
    const getCount = () => getElementByClassName(styles.count).text();

    beforeEach(() => {
        props = {
            onChange: jest.fn()
        };
        component = shallow(<RecipeCounter {...props}/>);
    });

    it('should have an decrement button', () => {
        const button = getDecrementButton();

        expect(button.type()).toBe('button');
        expect(button.text()).toBe('-');
    });

    it('should have an increment button', () => {
        const button = getIncrementButton();

        expect(button.type()).toBe('button');
        expect(button.text()).toBe('+');
    });

    it('should have initial count as zero', () => {
        expect(getCount()).toBe('0');
    });

    describe('when the increment button is clicked', () => {
        it('should increment the count', () => {
            expect(getCount()).toBe('0');

            getIncrementButton().simulate('click');
            expect(getCount()).toBe('1');
        });
    });

    describe('when the decrement button is clicked', () => {
        beforeEach(() => {
            getIncrementButton().simulate('click');
        });

        it('should decrement the count', () => {
            expect(getCount()).toBe('1');

            getDecrementButton().simulate('click');
            expect(getCount()).toBe('0');
        });

        it('should not decrement the count below zero', () => {
            const decrementButton = getDecrementButton();

            expect(getCount()).toBe('1');

            decrementButton.simulate('click');
            expect(getCount()).toBe('0');

            decrementButton.simulate('click');
            expect(getCount()).toBe('0');
        });
    });
});
