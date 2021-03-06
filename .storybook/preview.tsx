import * as React from 'react';
import styled from 'styled-components';
import {
  MAIITThemeProvider,
  useColorMode,
} from '../src/color-mode/src/MAIITThemeProvider';
import { HiSun, HiMoon } from 'react-icons/hi';
import { fontSizes } from '../src/theme/styles/fonts';

interface buttonProps {
  colorMode: string;
}

const ButtonInstance = styled.button<buttonProps>`
  position: absolute;
  right: 20px;
  font-size: ${fontSizes.xl};
  font-weight: 700;
  line-height: 1;
  padding: 7px;
  background-color: transparent;
  border-radius: 3px;
  border: ${props =>
    `1px solid ${props.colorMode === 'light' ? '#1A202C' : '#eee'}`};
  color: ${props => (props.colorMode === 'light' ? '#1A202C' : '#eee')};
  cursor: pointer;
`;

const Button = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ButtonInstance
      aria-label="toggle background color"
      colorMode={colorMode}
      onClick={toggleColorMode}
    >
      {colorMode === 'light' ? <HiMoon /> : <HiSun />}
    </ButtonInstance>
  );
};

export const decorators = [
  (Story: Function) => {
    return (
      // <div id="story-wrapper" style={{ minHeight: '50vh' }}>
      <div id="story-wrapper">
        <MAIITThemeProvider>
          <Button />
          <Story />
        </MAIITThemeProvider>
      </div>
    );
  },
];
