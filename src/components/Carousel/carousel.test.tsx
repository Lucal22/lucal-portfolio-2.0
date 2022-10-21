import { screen } from '@testing-library/react';
import { renderTheme } from '../../utils/renderTheme';
import Carousel from './index';

describe('<Carousel />', () => {
  it('should render', () => {
    const carousel = renderTheme(<Carousel />);
    expect(carousel).toMatchSnapshot;
    expect(screen.getByRole('heading')).toBeInTheDocument;
  });
});
