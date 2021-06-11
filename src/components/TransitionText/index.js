import React from 'react';
import * as Animatable from 'react-native-animatable';

export function TransitionText({index, animationStyle, ...rest}) {
  return (
    <Animatable.Text
      animation={animationStyle}
      duration={100}
      delay={1}
      easing='ease-in'
      useNativeDriver
      {...rest}
    />
  );
}
