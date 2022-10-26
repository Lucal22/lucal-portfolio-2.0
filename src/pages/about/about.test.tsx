import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/renderTheme';
import About from './index';

describe('<About />', () => {
  it('should render', () => {
    renderTheme(<About />);
  });
});
