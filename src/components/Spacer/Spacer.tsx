import React from 'react';
import { View } from 'react-native';

interface Props {
  vertical?: number;
  horizontal?: number;
}

const Spacer = (props: Props) => {
  return <View style={{ height: props.vertical, width: props.vertical }} />;
};

export { Spacer };
