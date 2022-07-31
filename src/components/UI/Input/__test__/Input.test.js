import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '../Input';

describe('label value prop', () => {
    it('should render same text passed into label', () => {
        render(<Input labelValue='Name'/>);
        const labelElement = screen.getByText(/name/i);
        expect(labelElement).toBeInTheDocument();
    })
})

describe('input value prop', () => {
    it('should render empty text initially', () => {
        render(<Input value='' placeholder='name'/>);
        const inputElement = screen.getByPlaceholderText(/name/i);
        expect(inputElement).toHaveValue('');
    })

    it('should render correct input text after change event', () => {
        render(<Input placeholder='name'/>);
        const inputElement = screen.getByPlaceholderText(/name/i);
        expect(inputElement).toHaveValue('');

        userEvent.type(inputElement, 'test user');

        expect(inputElement).toHaveValue('test user');
    })

    it('should render correct input text after change event - 2', () => {
        render(<Input placeholder='passwword'/>);
        const inputElement = screen.getByPlaceholderText(/passwword/i);
        expect(inputElement).toHaveValue('');

        userEvent.type(inputElement, '12345');

        expect(inputElement).toHaveValue('12345');
    })
})