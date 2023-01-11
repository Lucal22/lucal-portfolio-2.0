import { renderTheme } from '../../utils/renderTheme';
import Projects from './index';

describe('<Projects />', () => {
  it('should render', () => {
    const projects = renderTheme(<Projects />);
    expect(projects).toMatchSnapshot;
  });
});
