import "@testing-library/jest-dom";
import { render, screen} from '@testing-library/react';
import Header from './Header';

describe('Header should render', () => {
    it('should display the title', () => {
        render(<Header title='Countries' />);
        const titleValue = screen.getByRole ("heading")
        expect(titleValue).toBeInTheDocument();
    })
})



