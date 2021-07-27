export const addEventToDOM = (
  element: HTMLElement,
  type: 'hover' | 'click',
  listener: (this: HTMLElement, event: MouseEvent | FocusEvent) => any,
): void => {
  if (type === 'hover') {
    element?.addEventListener('mouseover', listener);
    element?.addEventListener('mouseleave', listener);
  } else {
    element?.addEventListener('click', listener);
  }
};

export const removeEventFromDOM = (
  element: HTMLElement,
  type: 'hover' | 'click',
  listener: (this: HTMLElement, event: MouseEvent | FocusEvent) => any,
): void => {
  if (type === 'hover') {
    element?.removeEventListener('mouseover', listener);
    element?.removeEventListener('mouseleave', listener);
  } else {
    element?.removeEventListener('click', listener);
  }
};
