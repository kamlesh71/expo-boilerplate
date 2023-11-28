import React from 'react';
import { Button } from 'react-native-paper';
import { styles } from './styles';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectActiveColorSchema,
  selectUsingSystemSchema,
} from '@/store/color-schema/selectors';
import {
  setLightSchema,
  setDarkSchema,
  setSystemSchema,
} from '@/store/color-schema/slices';

const ColorSchemaPicker = () => {
  const colorSchema = useSelector(selectActiveColorSchema);
  const isUsingSystem = useSelector(selectUsingSystemSchema);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Button
        mode={
          colorSchema === 'light' && !isUsingSystem ? 'contained' : 'outlined'
        }
        onPress={() => dispatch(setLightSchema())}>
        Light
      </Button>
      <Button
        mode={
          colorSchema === 'dark' && !isUsingSystem ? 'contained' : 'outlined'
        }
        onPress={() => dispatch(setDarkSchema())}>
        Dark
      </Button>
      <Button
        mode={isUsingSystem ? 'contained' : 'outlined'}
        onPress={() => dispatch(setSystemSchema())}>
        System
      </Button>
    </View>
  );
};

export { ColorSchemaPicker };
