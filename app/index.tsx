import { useRouter } from "expo-router";
import { Alert, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import ComponentButton from "@/components/ComponentButton";
import { HeaderImage } from "@/components/HeaderImage";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import dayjs from "dayjs";

import { CoreUIVersion, UIVersion } from "@easyteam/ui";
import Constants from "expo-constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { version } from "../package.json";

const VERSION_SEPARATOR = "   -   ";

export default function Home() {
  const router = useRouter();
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingBottom: bottom }]}>
      <StatusBar barStyle="light-content" />
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#f0f0f0", dark: "#303131" }}
        headerImage={<HeaderImage />}
      >
        <View style={styles.row}>
          <ComponentButton
            name="Clock"
            description="Clock in and out, take breaks, add shift notes."
            icon="timer"
            onPress={() => router.push("/Clock")}
          />
          <ComponentButton
            name="Agenda"
            description="Manage schedules, open shifts, time offs, etc."
            icon="calendar"
            onPress={() => router.push("/Agenda")}
          />
        </View>
        <View style={styles.row}>
          <ComponentButton
            name="Employees"
            description="View list of employees and their timesheets."
            icon="people"
            onPress={() => router.push("/Employees")}
          />
          <ComponentButton
            name="Timesheet"
            description="Manage employee shifts and notes."
            icon="person"
            onPress={() =>
              router.push({
                pathname: "/Timesheet",
                params: {
                  employeeId: "external-employee-organization-admin",
                  startDate: dayjs()
                    .startOf("week")
                    .subtract(1, "day")
                    .format(),
                  endDate: dayjs().endOf("week").subtract(1, "day").format(),
                },
              })
            }
          />
        </View>
        <View style={styles.row}>
          <ComponentButton
            name="Settings"
            description="Manage your settings for geolocation, breaks, etc."
            icon="cog"
            onPress={() => router.push("/Settings")}
          />
          <ComponentButton
            name="Calendar Sync"
            description="Sync your calendar with your selected provider."
            icon="sync"
            onPress={() => router.push("/CalendarSync")}
          />
        </View>
      </ParallaxScrollView>
      <TouchableOpacity
        activeOpacity={1}
        onLongPress={() => {
          Alert.alert(
            "Build Info",
            `Project ID: ${Constants.expoConfig?.extra?.eas?.projectId || "local"} \nAPI Base Path: ${Constants.expoConfig?.extra?.apiBasePath}`,
            [
              {
                text: "Cancel",
                style: "cancel",
              },
            ]
          );
        }}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Text style={styles.packageName}>
          Demo <Text style={styles.version}>{version}</Text>
        </Text>
        <Text style={styles.packageName}>
          CoreUI <Text style={styles.version}>{CoreUIVersion}</Text>
          {VERSION_SEPARATOR}
          UI <Text style={styles.version}>{UIVersion}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  packageName: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  version: {
    fontSize: 12,
    color: "#303131",
  },
  row: {
    flexDirection: "row",
    gap: 16,
    flex: 1,
    justifyContent: "space-between",
  },
});
