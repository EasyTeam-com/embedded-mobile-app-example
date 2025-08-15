import { EmployeesTimesheet, EmployeeListRef } from '@easyteam/ui';
import { useLayoutEffect, useMemo, useRef } from 'react';
import { EmployeesScreenNavigationProp, Routes } from '../../routes';
import { SafeAreaContainer } from '../../components/SafeAreaContainer';

export function Employees({
  navigation,
  route,
}: EmployeesScreenNavigationProp) {
  const ref = useRef<EmployeeListRef>(null);

  const startDate = useMemo(() => {
    if (route.params) {
      return route.params.startDate;
    }
    return undefined;
  }, [route.params]);

  const endDate = useMemo(() => {
    if (route.params) {
      return route.params.endDate;
    }
    return undefined;
  }, [route.params]);

  useLayoutEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      ref.current?.reloadData();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaContainer>
      <EmployeesTimesheet
        ref={ref}
        onEmployeeReportPress={({
          employeeId,
          startDate: currentStartDate,
          endDate: currentEndDate,
        }) =>
          navigation.navigate(Routes.TIMESHEET, {
            employeeId,
            startDate: currentStartDate,
            endDate: currentEndDate,
          })
        }
        onEvent={event => console.log(event)}
        startDate={startDate}
        endDate={endDate}
      />
    </SafeAreaContainer>
  );
}
