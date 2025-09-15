import { useNavigation } from "@react-navigation/native";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { locations } from "@/configs/locations";
import { Clock, ClockRef, EventDetailsClockInOut } from "@easyteam/ui";
import { useRouter } from "expo-router";

const HeaderRight = ({ hasOpenedShift }: { hasOpenedShift: boolean }) => {
  const router = useRouter();

  return hasOpenedShift ? (
    <TouchableOpacity
      style={styles.shiftNotesButton}
      onPress={() => router.push("/ShiftNotes")}
    >
      <ThemedText style={styles.shiftNotesButtonText}>Notes</ThemedText>
    </TouchableOpacity>
  ) : null;
};

export default function ClockScreen() {
  const clockRef = useRef<ClockRef>(null);
  const navigation = useNavigation();
  const [hasOpenedShift, setHasOpenedShift] = useState(false);
  const [renders, setRenders] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: HeaderRight.bind(null, { hasOpenedShift }),
    });
  }, [hasOpenedShift, navigation]);

  const onClockInOutEvent = useCallback(
    (event: EventDetailsClockInOut) => {
      console.log("Clock event received:", event);

      switch (event.event_type) {
        case "onClockIn":
          setHasOpenedShift(true);
          Alert.alert("Success", "Clock in successful!");
          break;
        case "onClockOut":
          setHasOpenedShift(false);
          Alert.alert("Success", "Clock out successful!");
          break;
      }
    },
    [setHasOpenedShift]
  );

  useLayoutEffect(() => {
    setTimeout(() => {
      if (!clockRef.current?.hasOpenedShift) {
        if (renders < 100) {
          setRenders((prev) => prev + 1);
        }
      } else {
        setHasOpenedShift(clockRef.current.hasOpenedShift);
      }
    }, 500);
  }, [renders, setRenders, setHasOpenedShift]);

  return (
    <SafeAreaView style={styles.container}>
      <Clock
        ref={clockRef}
        onEvent={onClockInOutEvent}
        longitude={locations[0].longitude}
        latitude={locations[0].latitude}
        customStrings={{
          restrictClockIn: "Restricted!",
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  shiftNotesButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  shiftNotesButtonText: {
    fontWeight: "bold",
  },
});
