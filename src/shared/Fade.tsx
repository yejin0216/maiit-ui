import React from 'react';
import { Transition } from 'react-transition-group';
import { TransitionTimeouts } from '@/theme/components/transition';
import { mergeClasses } from '@/shared/utils';

interface FadeProps {
  in: boolean;
  className: string;
  cssModule?: Record<string, string>;
  style?: Record<string, string>;
  handlePortalVisibility?: () => void;
  children?: React.ReactChild;
}

const Fade = (props: FadeProps): JSX.Element => {
  const { in: inProps = true, className, cssModule, style, handlePortalVisibility, children, ...otherProps } = props;

  const [transitionStyles, setTransitionStyles] = React.useState<React.CSSProperties>({ ...style });

  const onTransitionEntered = (): void => {
    setTransitionStyles({
      ...transitionStyles,
      ...{ visibility: 'visible' },
    });
  };

  const onTransitionEnded = (): (() => void) | undefined => {
    setTransitionStyles({
      ...transitionStyles,
      ...{ visibility: 'hidden' },
    });
    if (handlePortalVisibility) {
      return handlePortalVisibility;
    }
  };

  return (
    <Transition
      in={inProps}
      timeout={TransitionTimeouts.Fade}
      onEntered={onTransitionEntered}
      onExited={onTransitionEnded}
    >
      {state => {
        const isActive = state === 'entered';
        const classes = mergeClasses([className, 'fade', isActive && 'show']);
        return (
          <div className={classes} style={transitionStyles} {...otherProps}>
            {children}
          </div>
        );
      }}
    </Transition>
  );
};

export default Fade;
