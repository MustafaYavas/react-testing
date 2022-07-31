import { screen, render } from '@testing-library/react';
import Button from '../Button';

describe('Button text', () => {
    it('should render button text correctly', () => {
        render(<Button>Increment</Button>);
        const buttonElement = screen.getByText(/increment/i);
        expect(buttonElement).toBeInTheDocument();
    })

    it('should render button text correctly - 2', () => {
        render(<Button>Decrement</Button>);
        const buttonElement = screen.getByRole('button', { name: 'Decrement'});
        expect(buttonElement).toBeInTheDocument();
    })
})
