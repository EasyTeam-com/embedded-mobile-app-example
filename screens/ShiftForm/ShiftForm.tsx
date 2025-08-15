import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Alert } from 'react-native';
import { ShiftForm as ShiftFormComponent, ShiftFormRef } from '@easyteam/ui';
import { SHIFT_FORM_MODES } from '@easyteam/ui';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import { ShiftFormScreenNavigationProp } from '../../routes';
dayjs.extend(utc);

export function ShiftForm({
  navigation,
  route,
}: ShiftFormScreenNavigationProp) {
  const ref = useRef<ShiftFormRef>(null);

  const [date, setDate] = useState(route.params?.date);
  const employeeId = route.params?.employeeId;
  const mode = route.params?.mode || SHIFT_FORM_MODES.ADD;

  useLayoutEffect(() => {
    const screenTitle = date ? dayjs.utc(date).format() : 'Add Shift';

    navigation.setOptions({
      title: screenTitle,
    });
  }, [navigation, date]);

  useEffect(() => {
    const preventGoingBack = (e: any) => {
      if (!ref.current?.unsavedChanges) {
        return;
      }

      e.preventDefault();

      Alert.alert(
        'Unsaved Changes',
        'Are you sure you want to discard the changes?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
            onPress: () => {},
          },
          {
            text: 'Yes',
            style: 'destructive',
            onPress: () => navigation.dispatch(e.data.action),
          },
        ],
      );
    };

    const unsubscribe = navigation.addListener(
      'beforeRemove',
      preventGoingBack,
    );

    return unsubscribe;
  }, [navigation, ref]);

  const handleDateChange = (changedDate: string) => {
    setDate(changedDate);
  };

  if (!date) {
    return null;
  }

  return (
    <ShiftFormComponent
      ref={ref}
      shiftDate={date}
      employeeId={employeeId}
      mode={mode}
      onSaveSuccess={() => navigation.goBack()}
      onCancelPress={() => navigation.goBack()}
      onEvent={e => console.log(e)}
      onDateChange={handleDateChange}
    />
  );
}
