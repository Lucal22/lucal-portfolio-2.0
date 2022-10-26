import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../utils/renderTheme';
import Carousel from './index';
import 'jest-styled-components';

describe('<Carousel />', () => {
  it('should render', () => {
    const carousel = renderTheme(<Carousel />);
    expect(carousel).toMatchSnapshot;
  });

  it('should be able to click multiple times on right button', () => {
    renderTheme(<Carousel />);
    const buttonRight = screen.getByLabelText('Próximo projeto');
    fireEvent.click(buttonRight);
    fireEvent.click(buttonRight);
    fireEvent.click(buttonRight);
  });
  it('should be able to click multiple times on left button', () => {
    renderTheme(<Carousel />);
    const buttonLeft = screen.getByLabelText('Projeto anterior');
    fireEvent.click(buttonLeft);
    fireEvent.click(buttonLeft);
    fireEvent.click(buttonLeft);
  });
});
