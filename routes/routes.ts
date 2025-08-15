import { SHIFT_FORM_MODES } from '@easyteam/ui';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum Routes {
  HOME = 'Home',
  TIMESHEET = 'Timesheet',
  EMPLOYEES = 'Employees',
  SHIFT_FORM = 'Shift Form',
}

export type RootStackParamList = {
  [Routes.HOME]: undefined;
  [Routes.EMPLOYEES]: { startDate?: string; endDate?: string } | undefined;
  [Routes.TIMESHEET]:
    | {
        employeeId?: string;
        startDate?: string;
        endDate?: string;
      }
    | undefined;
  [Routes.SHIFT_FORM]: {
    date?: string;
    employeeId: string;
    mode?: SHIFT_FORM_MODES;
  };
};

export type EmployeesScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  Routes.EMPLOYEES
>;

export type TimesheetScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  Routes.TIMESHEET
>;

export type ShiftFormScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  Routes.SHIFT_FORM
>;
