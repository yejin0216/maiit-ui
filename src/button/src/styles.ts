import styled from 'styled-components';
import styleConfig from '@/theme/components/button';
import { ButtonStyleProps } from './types';

const baseButtonStyle = `
  display: inline-block;
  width: auto;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  padding: 0 0.75rem;
  margin: 0px;
`;

const ButtonContainer = styled.button.attrs(props => ({
  mainColor: props.theme.colors[props.color as string].default,
  subColor: props.theme.colors[props.color as string].sub2,
  focusColor: props.theme.colors[props.color as string].sub1,
}))<ButtonStyleProps>`
  ${baseButtonStyle}
  height: ${props => styleConfig.height[props.size]};
  background-color: ${props => (props.variant === 'solid' ? props.mainColor : 'transparent')};
  color: ${props => (props.variant === 'solid' ? 'white' : props.mainColor)};
  border-color: ${props => (props.variant === 'solid' ? 'transparent' : props.mainColor)};
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &:not(:disabled):not(.disabled):hover,
  &:not(:disabled):not(.disabled):active {
    border-color: #0062cc;
    box-shadow: 0 0 0 0.2rem rgba(0, 98, 204, 0.5) !important;
    cursor: pointer;
    background-color: ${props => (props.variant === 'solid' ? `${props.subColor}` : `${props.focusColor}80`)};
  }

  &.disabled,
  &:disabled {
    opacity: 0.65;
  }
`;

export default ButtonContainer;
