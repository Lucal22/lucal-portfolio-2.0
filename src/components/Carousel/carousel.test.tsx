import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../utils/renderTheme';
import Carousel from './index';

describe('<Carousel />', () => {
  it('should render', () => {
    const carousel = renderTheme(<Carousel />);
    expect(carousel).toMatchSnapshot;
    //expect(screen.getByRole('navigation')).toBeInTheDocument;
  });
  it('should render button', () => {
    renderTheme(<Carousel />);
    const buttonRight = screen.getByLabelText('Próximo projeto');
    fireEvent.click(buttonRight);
  });
  it('should render button', () => {
    renderTheme(<Carousel />);
    const buttonLeft = screen.getByLabelText('Projeto anterior');
    fireEvent.click(buttonLeft);

  });
});
