import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  View,
  LogBox,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';

import { API_BASE_PATH, JWT_PRIVATE_KEY, PARTNER_ID } from '@env';

import { EasyTeamProvider } from '@easyteam/ui';
import { EmployeeData } from '@easyteam/core-ui';

import { EmployeesProvider } from './providers/EmployeesContext';

import { users } from './configs/users';
import { locations } from './configs/locations';
import { roles } from './configs/roles';
import { organization } from './configs/organization';
import { theme } from './theme';
import { encodeJWT } from './utils/encodeJWT';
import { Router } from './routes';

// Suppress SafeAreaView deprecation warning from @easyteam/ui
LogBox.ignoreLogs(['SafeAreaView has been deprecated']);

enableScreens();

function App() {
  const [token, setToken] = useState<string | null>(null);
  const [isSigningToken, setIsSigningToken] = useState(false);

  useEffect(() => {
    setIsSigningToken(true);

    try {
      const generatedToken = encodeJWT(
        users[0],
        locations[0],
        organization,
        PARTNER_ID,
        JWT_PRIVATE_KEY,
      );

      setToken(generatedToken);
    } catch (error) {
      Alert.alert(
        `${API_BASE_PATH}`,
        `Error signing token for partner: ${PARTNER_ID}`,
      );
    } finally {
      setIsSigningToken(false);
    }
  }, []);

  const userEmployees: EmployeeData[] = users.map(user => ({
    id: user.id,
    role: user.role,
    name: user.name,
    wageType: user.wageType,
    wage: user.wage,
  }));
  console.log(9821, userEmployees);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider>
        {token && !isSigningToken ? (
          <EmployeesProvider>
            <EasyTeamProvider
              token={token}
              theme={theme}
              employees={userEmployees}
              locations={locations}
              roles={roles}
              organization={organization}
              basePath={API_BASE_PATH}
            >
              <Router />
            </EasyTeamProvider>
          </EmployeesProvider>
        ) : (
          <View style={styles.loadingContiner}>
            <Text>Signing token...</Text>
            <ActivityIndicator size="large" color="#FF3479" />
          </View>
        )}
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  loadingContiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    gap: 20,
  },
});

export default App;
