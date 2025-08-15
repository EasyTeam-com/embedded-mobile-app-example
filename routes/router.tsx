import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes, RootStackParamList } from './routes';
import { Home } from '../screens/Home';
import { Employees } from '../screens/Employees';
import { Timesheet } from '../screens/Timesheet';
import { ShiftForm } from '../screens/ShiftForm';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.HOME}>
        <Stack.Screen
          name={Routes.HOME}
          component={Home}
          options={{ title: 'Eeasyteam', headerShown: false }}
        />
        <Stack.Screen
          name={Routes.EMPLOYEES}
          component={Employees}
          options={{ title: 'Employees' }}
        />
        <Stack.Screen
          name={Routes.TIMESHEET}
          component={Timesheet}
          options={{ title: 'Timesheet' }}
        />
        <Stack.Screen
          name={Routes.SHIFT_FORM}
          component={ShiftForm}
          options={{ title: 'Shift Form' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
