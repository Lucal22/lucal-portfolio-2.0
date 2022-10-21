import { renderTheme } from '../../utils/renderTheme';
import Images from './index';

describe('<Images />', () => {
  it('should render', () => {
    const image = renderTheme(
      <Images
        src={'https://unsplash.com/photos/fIq0tET6llw'}
        width={150}
        height={150}
        alt={'teste'}
      />,
    );
    expect(image).toMatchSnapshot;
  });
});
