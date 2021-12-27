export const COLOR_MODE_IN_STORAGE = 'COLOR_MODE_IN_STORAGE';

export type ColorMode = 'light' | 'dark';

export const classNames: { [index: string]: string } = {
  light: 'maiit-ui-light',
  dark: 'maiit-ui-dark',
};

export const syncBodyClassName = (mode: ColorMode): void => {
  document.body.classList.add(classNames[mode]);
  document.body.classList.remove(classNames[mode === 'light' ? 'dark' : 'light']);
};
