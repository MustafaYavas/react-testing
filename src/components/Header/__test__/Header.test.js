import { screen, render } from '@testing-library/react';
import Header from '../Header';

describe('Header - By Text', () => {
    it('should render same text passed into title prop', () => {
        render(<Header title='Counter'/>);
        const headingElement = screen.getByText(/counter/i);
        expect(headingElement).toBeInTheDocument();
    });

    it('should render same text passed into title prop - 2', () => {
        render(<Header title='CoLoginunter'/>);
        const headingElement = screen.getByText(/login/i);
        expect(headingElement).toBeInTheDocument();
    });
})

describe('Header - By Title', () => {
    it('should render same text by title', () => {
        render(<Header title='Counter'/>);
        const headingElement = screen.getByTitle('header')
        expect(headingElement).toBeInTheDocument();
    });
})

describe('Header - By Role', () => {
    it('should not render heading element', () => {
        render(<Header title='Counter'/>);
        const headingElement = screen.getByRole('heading');
        expect(headingElement).not.toBeNull();
    });
})

describe('Header - By Test Id', () => {
    it('should render same text passed into title prop', () => {
        render(<Header title='Login'/>);
        const headingElement = screen.getByTestId('header-element');
        expect(headingElement).toBeInTheDocument();
    });
})

describe('Header - Find By Text', () => {
    it('should render same text passed into title prop', async () => {
        render(<Header title='Login'/>);
        const headingElement = await screen.findByText(/login/i);
        expect(headingElement).toBeInTheDocument();
    });
})

describe('Header - Query By Text', () => {
    it('should not render text passed into title prop', () => {
        render(<Header title='Login'/>);
        const headingElement = screen.queryByText(/header/i);
        expect(headingElement).not.toBeInTheDocument();
    });
})