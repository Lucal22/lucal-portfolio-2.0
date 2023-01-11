import { renderTheme } from '../../utils/renderTheme';
import HomePage from './index';

describe('<HomePage />', () => {
  it('should render', () => {
    const homepage = renderTheme(<HomePage />);
    expect(homepage).toMatchSnapshot;
  });
});
