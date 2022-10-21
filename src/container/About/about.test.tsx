import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../utils/renderTheme';
import About from './index';

describe('<About />', () => {
  it('should render', () => {
    const about = renderTheme(<About />);
    expect(screen.getByRole('heading')).toBeInTheDocument;
    expect(about).toMatchSnapshot;
  });

  it('should render the about button and text', () => {
    renderTheme(<About />);
    const button = screen.getByLabelText('Abre Sobre mim');
    fireEvent.click(button);
  });

  it('should render the graduation button and text', () => {
    renderTheme(<About />);
    const button = screen.getByLabelText('Abre Graduação');
    fireEvent.click(button);
  });

  it('should render the tech button and text', () => {
    renderTheme(<About />);
    const button = screen.getByLabelText('Abre Tecnologias');
    fireEvent.click(button);
  });
});
