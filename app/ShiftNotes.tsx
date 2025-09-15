import { useHeaderHeight } from "@react-navigation/elements";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
} from "react-native";

import { EventDetailsShiftNotes } from "@easyteam/core-ui";
import { ShiftNotes } from "@easyteam/ui";

export default function ShiftNotesScreen() {
  const eventHandler = (event: EventDetailsShiftNotes) => {
    console.log("Event happened:", event);
  };

  const headerHeight = useHeaderHeight();
  const keyboardVerticalOffset = headerHeight - 1;

  return (
    <SafeAreaView style={styles.safeArea}>
      {Platform.OS === "android" ? (
        <KeyboardAvoidingView
          behavior="height"
          style={styles.keyboardAvoidingView}
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          <ShiftNotes onEvent={eventHandler} />
        </KeyboardAvoidingView>
      ) : (
        <ShiftNotes onEvent={eventHandler} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "transparent",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
});
