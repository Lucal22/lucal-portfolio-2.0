import { renderTheme } from '../../utils/renderTheme';
import Images from './index';
import images from '../../assets/index';

describe('<Images />', () => {
  it('should render', () => {
    const image = renderTheme(<Images src={''} alt={''} />);
    expect(image).toMatchSnapshot;
  });
});
