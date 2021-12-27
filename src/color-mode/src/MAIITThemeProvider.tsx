import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Dict } from '@/shared/types';
import localStorageManger from '@/shared/localStorageManger';
import { GlobalStyle, defaultTheme } from '@/theme';
import { COLOR_MODE_IN_STORAGE, ColorMode, syncBodyClassName } from './utils';

interface MAIITThemeProviderProps {
  theme?: Dict;
  children?: React.ReactNode;
}

interface ColorModeProviderProps {
  children?: React.ReactNode;
}

interface ColorModeContextType {
  colorMode: ColorMode;
  toggleColorMode: () => void;
  setColorMode: (value: ColorMode) => void;
}

const ColorModeContext = React.createContext({} as ColorModeContextType);

export const useColorMode = (): ColorModeContextType => {
  const context = React.useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error('useColorMode must be used inside a ColorModeProvider.');
  }
  return context;
};

export const ColorModeProvider = (props: ColorModeProviderProps): JSX.Element => {
  const { children } = props;

  const [colorMode, updateColorMode] = React.useState<ColorMode>(
    localStorageManger.get(COLOR_MODE_IN_STORAGE) === 'dark' ? 'dark' : 'light',
  );

  React.useEffect(() => {
    syncBodyClassName(colorMode);
  }, [colorMode]);

  const setColorMode = React.useCallback(
    (value: ColorMode) => {
      localStorageManger.set(COLOR_MODE_IN_STORAGE, value);
      updateColorMode(value);
    },
    [updateColorMode],
  );

  const toggleColorMode = React.useCallback(() => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  }, [colorMode, setColorMode]);

  const context = React.useMemo(
    () => ({
      colorMode,
      toggleColorMode,
      setColorMode,
    }),
    [colorMode, setColorMode, toggleColorMode],
  );

  return <ColorModeContext.Provider value={context}>{children}</ColorModeContext.Provider>;
};

export const MAIITThemeProvider = (props: MAIITThemeProviderProps): JSX.Element => {
  const { theme = defaultTheme, children } = props;

  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>{children}</ColorModeProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
};
