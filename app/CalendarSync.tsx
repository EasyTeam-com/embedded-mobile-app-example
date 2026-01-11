import { EventDetailsCalendarSync } from "@easyteam/core-ui";
import { CalendarSync } from "@easyteam/ui";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CalendarSyncScreen() {
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingBottom: bottom }]}>
      <CalendarSync onEvent={(e: EventDetailsCalendarSync) => console.log(e)} />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
