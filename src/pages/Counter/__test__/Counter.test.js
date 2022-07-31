import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../Counter';

describe('Counter', () => {
    it('should render counter initially as 0', () => {
        render(<Counter />);
        const paragraphElement = screen.getByTestId('counter-element');
        expect(paragraphElement).toHaveTextContent(0);
    })
})

describe('Button events - increment', () => {
    it('should increase the value by 1', () => {
        render(<Counter />);
        const buttonElement = screen.getByRole('button', { name: 'Increment'});
        const paragraphElement = screen.getByTestId('counter-element');

        expect(paragraphElement).toHaveTextContent(0);

        userEvent.click(buttonElement);

        expect(paragraphElement).toHaveTextContent(1)
    })

    it('should not increase the value by 2', () => {
        render(<Counter />);
        const buttonElement = screen.getByRole('button', { name: 'Increment'});
        const paragraphElement = screen.getByTestId('counter-element');

        expect(paragraphElement).toHaveTextContent(0);

        userEvent.click(buttonElement);

        expect(paragraphElement).not.toHaveTextContent(2)
    })
})

describe('Button events - decrement', () => {
    it('should decrease the value by 1', () => {
        render(<Counter />);
        const buttonElement = screen.getByRole('button', { name: 'Decrement'});
        const paragraphElement = screen.getByTestId('counter-element');

        expect(paragraphElement).toHaveTextContent(0);

        userEvent.click(buttonElement);

        expect(paragraphElement).toHaveTextContent(-1)
    })

    it('should not decrease the value by 2', () => {
        render(<Counter />);
        const buttonElement = screen.getByRole('button', { name: 'Decrement'});
        const paragraphElement = screen.getByTestId('counter-element');

        expect(paragraphElement).toHaveTextContent(0);

        userEvent.click(buttonElement);

        expect(paragraphElement).not.toHaveTextContent(-2)
    })
})

describe('Buttons', () => {
    it('should render all buttons', async () => {
        render(<Counter />);
        const buttonElements = await screen.findAllByRole('button');
        expect(buttonElements.length).toBe(2);
    })
})