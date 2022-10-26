import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../utils/renderTheme';
import HomePage from './index';

describe('<HomePage />', () => {
  it('should render', () => {
    const homepage = renderTheme(<HomePage />);
    expect(homepage).toMatchSnapshot;
  });

  //  it('should copy the email', () => {
  //    renderTheme(<HomePage />);
  //    const button = screen.getByLabelText('Copia email')
  //    fireEvent.click(button)
  //  });
});
