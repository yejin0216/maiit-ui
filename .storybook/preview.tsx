import * as React from 'react';
import styled from 'styled-components';
import {
  MAIITThemeProvider,
  useColorMode,
} from '../packages/color-mode/src/MAIITThemeProvider';
import { HiSun, HiMoon } from 'react-icons/hi';
import { fontSizes } from '../packages/theme/styles/fonts';

interface buttonProps {
  colorMode: string;
}

const ButtonInstance = styled.button<buttonProps>`
  float: right;
  font-size: ${fontSizes.xl};
  font-weight: 700;
  line-height: 1;
  padding: 7px;
  background-color: transparent;
  border-radius: 3px;
  border: ${props =>
    `1px solid ${props.colorMode === 'light' ? '#1A202C' : '#eee'}`};
  color: ${props => (props.colorMode === 'light' ? '#1A202C' : '#eee')};
`;

const Button = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ButtonInstance colorMode={colorMode} onClick={toggleColorMode}>
      {colorMode === 'light' ? <HiMoon /> : <HiSun />}
    </ButtonInstance>
  );
};

export const decorators = [
  (Story: Function) => {
    return (
      <div id="story-wrapper" style={{ minHeight: '100vh' }}>
        <MAIITThemeProvider>
          <Button />
          <Story />
        </MAIITThemeProvider>
      </div>
    );
  },
];
