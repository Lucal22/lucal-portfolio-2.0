import { fireEvent, screen } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { css } from 'styled-components';
import { theme } from '../../styles/theme';
import { renderTheme } from '../../utils/renderTheme';
import Menu from './index';

describe('<Menu />', () => {
  it('should render', () => {
    const menu = renderTheme(<Menu />);
    expect(menu).toMatchSnapshot;
  });

  it('should render Button', () => {
    renderTheme(<Menu />);
    const button = screen.getByLabelText('Abre/Fecha Menu');
    expect(button).toHaveStyleRule('display', 'flex');
    expect(button).toHaveStyleRule('display', 'none', {
      media: `(min-width:${theme.screen.size.medium})`,
    });
  });

  it('should render Menu', () => {
    renderTheme(<Menu />);
    const button = screen.getByLabelText('Abre/Fecha Menu');
    const menuContent = button.nextSibling;
    console.log(menuContent);
    fireEvent.click(button);
    expect(menuContent).toHaveStyleRule('display', 'none');
    expect(menuContent).toHaveStyleRule('display', 'none', {
      media: `(min-width:${theme.screen.size.medium})`,
    });
  });
});
