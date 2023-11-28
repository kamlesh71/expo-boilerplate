import { useDispatch, useSelector } from 'react-redux';
import { useColorScheme } from 'react-native';
import { setColorSchema } from '@/store/color-schema/slices';
import {
  selectActiveColorSchema,
  selectUsingSystemSchema,
} from '@/store/color-schema/selectors';
import { useUpdatedEffect } from './useUpdatedEffect';
import { useMountedEffect } from './useMountedEffect';

export const useListenColorSchemaChange = () => {
  const isUsingSystem = useSelector(selectUsingSystemSchema);
  const activeColorSchema = useSelector(selectActiveColorSchema);
  const systemColorSchema = useColorScheme();

  const dispatch = useDispatch();

  useUpdatedEffect(() => {
    console.debug(isUsingSystem);
    if (isUsingSystem) {
      dispatch(setColorSchema(systemColorSchema));
    }
  }, [systemColorSchema, isUsingSystem]);

  useMountedEffect(() => {
    if (isUsingSystem && systemColorSchema !== activeColorSchema) {
      dispatch(setColorSchema(systemColorSchema));
    }
  });
};
