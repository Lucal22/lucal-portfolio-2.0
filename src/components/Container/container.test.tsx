import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/renderTheme';
import Container from './index';

describe('<Container />', () => {
  it('should render with background white', () => {
    const { container } = renderTheme(
      <Container background={'white'}>
        <h1>Olá mundo</h1>
      </Container>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument;
    expect(container).toMatchSnapshot();
  });

  it('should render with background gray', () => {
    const { container } = renderTheme(
      <Container background={'gray'}>
        <h1>Olá mundo</h1>
      </Container>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument;
    expect(container).toMatchSnapshot();
  });
});
