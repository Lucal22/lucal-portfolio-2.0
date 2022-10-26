import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../utils/renderTheme';
import About from './index';

describe('<About />', () => {
  it('should render', () => {
    renderTheme(<About />);
    expect(screen.getByRole('heading')).toBeInTheDocument;
  });
});

it('should render button about', () => {
  renderTheme(<About />);
  const button = screen.getByLabelText('Abre Sobre mim');
  fireEvent.click(button);
});

it('should render button about', () => {
  renderTheme(<About />);
  const button = screen.getByLabelText('Abre Graduação');
  fireEvent.click(button);
});

it('should render button about', () => {
  renderTheme(<About />);
  const button = screen.getByLabelText('Abre Tecnologias');
  fireEvent.click(button);
});
