import { Inter_500Medium } from "@expo-google-fonts/inter";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import "react-native-reanimated";

import { locations } from "@/configs/locations";
import { organization } from "@/configs/organization";
import { roles } from "@/configs/roles";
import { users } from "@/configs/users";
import { EmployeesProvider } from "@/providers/EmployeesContext";
import { defaultBackgroundColor, defaultTextColor } from "@/theme/theme";
import { encodeJWT } from "@/utils/encodeJWT";
import { EasyTeamProvider } from "@easyteam/ui";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const [isSigningToken, setIsSigningToken] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [loaded] = useFonts({
    Inter: Inter_500Medium,
  });

  const apiBasePath =
    Constants.expoConfig?.extra?.apiBasePath ||
    "https://www.easyteam.io/sandbox/embed";

  useEffect(() => {
    setIsSigningToken(true);

    const privateKey = Constants.expoConfig?.extra?.jwtPrivateKey || "";
    const partnerId = Constants.expoConfig?.extra?.partnerId || "";
    try {
      const generatedToken = encodeJWT(
        users[0],
        locations[0],
        organization,
        partnerId,
        privateKey
      );

      setToken(generatedToken);
    } catch (error) {
      console.error(error);

      Alert.alert(
        `${apiBasePath}`,
        `Error signing token for partner: ${partnerId}`
      );
    } finally {
      setIsSigningToken(false);
    }
  }, [apiBasePath]);

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return token && !isSigningToken ? (
    <View style={[styles.container]}>
      <EmployeesProvider>
        <EasyTeamProvider
          token={token}
          // theme={theme}
          employees={users}
          locations={locations}
          roles={roles}
          organization={organization}
          basePath={apiBasePath}
        >
          <Stack
            screenOptions={{
              contentStyle: { backgroundColor: defaultBackgroundColor },
              headerStyle: { backgroundColor: defaultBackgroundColor },
              headerTintColor: defaultTextColor,
            }}
          >
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="Clock"
              options={{ title: "Clock In/Out", headerBackTitle: "Home" }}
            />
            <Stack.Screen
              name="ShiftNotes"
              options={{ title: "Shift Notes" }}
            />
            <Stack.Screen
              name="Agenda"
              options={{ title: "Agenda", headerBackTitle: "Home" }}
            />
            <Stack.Screen
              name="CalendarSync"
              options={{ title: "Calendar Sync", headerBackTitle: "Home" }}
            />
            <Stack.Screen name="Timesheet" />
            <Stack.Screen
              name="Employees"
              options={{ title: "Employees", headerBackTitle: "Home" }}
            />
            <Stack.Screen name="ShiftForm" />
            <Stack.Screen
              name="Settings"
              options={{ title: "Settings", headerBackTitle: "Home" }}
            />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </EasyTeamProvider>
      </EmployeesProvider>
    </View>
  ) : (
    <SafeAreaView style={styles.container}>
      <View style={styles.loadingContainer}>
        <Text>Signing token...</Text>
        <ActivityIndicator size="large" color="#FF3479" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    gap: 20,
  },
});
