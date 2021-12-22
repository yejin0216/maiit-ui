import CSS from 'csstype';
import styled from 'styled-components';
import { fontSizes } from '@/theme/styles/fonts';
import { TooltipContentsProps } from './types';

export const popoverContentStyle: CSS.Properties = {
  top: '8px',
  maxWidth: '100px',
  wordBreak: 'break-all',
  textAlign: 'left',
  padding: '5px 10px',
  borderRadius: '0.375rem',
  boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
};

export const PopperContainer = styled.div.attrs(props => {
  props.className as string;
})`
  visibility: ${(props: Partial<TooltipContentsProps>) =>
    props.isOpen ? 'visible' : 'hidden'};
  opacity: ${(props: Partial<TooltipContentsProps>) => (props.isOpen ? 1 : 0)};
  transition: ${(props: Partial<TooltipContentsProps>) =>
    props.isOpen ? 'visibility 0.3s linear, opacity 0.3s' : 0};

  .tooltip__label {
    font-size: ${fontSizes.sm};
    background-color: #6f6f6f;
    color: #ffffff;
  }
`;
