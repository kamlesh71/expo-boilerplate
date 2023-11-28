import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { styles } from './styles';

const Container: React.FC<
  React.PropsWithChildren<{ style?: StyleProp<ViewStyle> }>
> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export { Container };
