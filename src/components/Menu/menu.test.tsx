import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { renderTheme } from '../../utils/renderTheme';
import Menu from './index';

describe('<Menu />', () => {
  it('should render', () => {
    const menu = renderTheme(<Menu />);
    expect(menu).toMatchSnapshot;
  });

  it('should render menu mobile and button to open and close menu', () => {
    renderTheme(<Menu />);
    const button = screen.getByLabelText('Abre/Fecha Menu');
    //const menuContent = button.nextSibling;
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
  });
});
