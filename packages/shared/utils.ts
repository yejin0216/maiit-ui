export const mergeClasses = (classes: (string | boolean)[]): string => {
  return classes.join(' ').trimStart().trimEnd();
};
