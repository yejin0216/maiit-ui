import CSS from 'csstype';
import styled from 'styled-components';
import { PopoverContentsProps } from './types';

export const popoverContentStyle: CSS.Properties = {
  top: '8px',
  width: '250px',
  wordBreak: 'break-all',
  textAlign: 'left',
  border: '1px solid #e2e8f0',
  borderRadius: '5px',
  boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
};

export const HeaderTitle = styled.header.attrs(props => {
  props.className as string;
})`
  padding: 12px;
  overflow-wrap: break-word;
  border-bottom: 1px solid #e2e8f0;
`;

export const BodyContents = styled.div.attrs(props => {
  props.className as string;
})`
  padding: 8px 12px;
`;

export const PopperContainer = styled.div`
  visibility: ${(props: Partial<PopoverContentsProps>) =>
    props.isOpen ? 'visible' : 'hidden'};
  opacity: ${(props: Partial<PopoverContentsProps>) => (props.isOpen ? 1 : 0)};
  transition: ${props =>
    props.fade ? 'visibility 0.3s linear, opacity 0.3s' : 0};
`;

const arrowStyle = `
  width: 10px;
  height: 10px;
  background-color: inherit;
`;

const arrowChildStyle = `
content: '';
position: absolute;
width: 10px;
height: 10px;
background-color: inherit;
border-left: 1px solid #e2e8f0;
border-top: 1px solid #e2e8f0;
border-right: none;
border-bottom: none;
`;

export const Arrow = styled.div.attrs(props => {
  props.className as string;
})`
  position: absolute;
  &[data-placement*='bottom'] {
    top: -8px;
    ${arrowStyle}
    &::before {
      top: 2px;
      transform: rotate(45deg);
      ${arrowChildStyle}
    }
  }
  &[data-placement*='left'] {
    right: -8px;
    ${arrowStyle}
    &::before {
      right: 2px;
      transform: rotate(135deg);
      ${arrowChildStyle}
    }
  }
  &[data-placement*='right'] {
    left: -8px;
    ${arrowStyle}
    &::before {
      left: 2px;
      transform: rotate(315deg);
      ${arrowChildStyle}
    }
  }
  &[data-placement*='top'] {
    bottom: -8px;
    ${arrowStyle}
    &::before {
      bottom: 2px;
      transform: rotate(225deg);
      ${arrowChildStyle}
    }
  }
`;
