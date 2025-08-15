import { Timesheet as TimesheetComponent, TimesheetRef } from '@easyteam/ui';
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SHIFT_FORM_MODES } from '@easyteam/ui';
import { Routes, TimesheetScreenNavigationProp } from '../../routes';
import { rawTheme } from '../../theme';
import dayjs from 'dayjs';

export function Timesheet({
  navigation,
  route,
}: TimesheetScreenNavigationProp) {
  const ref = useRef<TimesheetRef>(null);
  const {
    employeeId,
    startDate: pStartDate,
    endDate: pEndDate,
  } = route.params ?? {};

  const [startDate, setStartDate] = useState<string | undefined>(pStartDate);
  const [endDate, setEndDate] = useState<string | undefined>(pEndDate);

  const handleAddPress = useCallback(() => {
    if (ref.current) {
      navigation.navigate(Routes.SHIFT_FORM, {
        employeeId: ref.current.selectedEmployeeId,
        date: dayjs().format('YYYY-MM-DD'),
        mode: SHIFT_FORM_MODES.ADD,
      });
    }
  }, [navigation]);

  const HeaderRightButton = useCallback(
    () => (
      <TouchableOpacity style={styles.addButton} onPress={handleAddPress}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    ),
    [handleAddPress],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: HeaderRightButton,
    });
  }, [navigation, HeaderRightButton]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      ref.current?.reloadData();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <TimesheetComponent
      ref={ref}
      employeeId={employeeId}
      startDate={startDate}
      endDate={endDate}
      onEditPress={(date: string, selectedEmployeeId: string) => {
        console.log('TimesheetScreen, edit press', date);
        navigation.navigate(Routes.SHIFT_FORM, {
          date,
          employeeId: selectedEmployeeId,
          mode: SHIFT_FORM_MODES.EDIT,
        });
      }}
      onEvent={event => console.log(event)}
      onDateRangeChange={(newStartDate: string, newEndDate: string) => {
        console.log(
          'onDateRangeChange log => startDate: ',
          newStartDate,
          'endDate: ',
          newEndDate,
        );
        setStartDate(newStartDate);
        setEndDate(newEndDate);
      }}
    />
  );
}

const styles = StyleSheet.create({
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  addButtonText: {
    color: rawTheme.tokens.colors.text.primary,
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: 6,
  },
});
