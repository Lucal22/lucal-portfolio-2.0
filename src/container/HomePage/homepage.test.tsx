import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/renderTheme';
import HomePage from './index';

describe('<HomePage />', () => {
  it('should render', () => {
    const home = renderTheme(<HomePage />);
    expect(screen.getByRole('heading')).toBeInTheDocument;
    expect(home).toMatchSnapshot;
  });
});
