import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/renderTheme';
import Projects from './index';

describe('<Projects />', () => {
  it('should render', () => {
    renderTheme(<Projects />);
  });
});
