import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";

import { EventDetailsShiftNotes } from "@easyteam/core-ui";
import { ShiftNotes } from "@easyteam/ui";

export default function ShiftNotesScreen() {
  const eventHandler = (event: EventDetailsShiftNotes) => {
    console.log("Event happened:", event);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.safeArea}
      keyboardVerticalOffset={86}
    >
      <ShiftNotes onEvent={eventHandler} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
});
