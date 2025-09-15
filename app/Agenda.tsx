import { ThemedText } from "@/components/ThemedText";
import { AgendaRef, AgendaSchedule } from "@easyteam/ui";
import { useHeaderHeight } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import { useLayoutEffect, useRef } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const HeaderRight = ({
  agendaRef,
}: {
  agendaRef: React.RefObject<AgendaRef | null>;
}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => agendaRef?.current?.openAddEditShift()}>
        <ThemedText style={styles.addButton}>+</ThemedText>
      </TouchableOpacity>
    </View>
  );
};

export default function AgendaScheduleScreen() {
  const navigation = useNavigation();
  const agendaRef = useRef<AgendaRef>(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: HeaderRight.bind(null, { agendaRef }),
    });
  }, [navigation]);

  const headerHeight = useHeaderHeight();
  const keyboardVerticalOffset = headerHeight - 1;
  return (
    <SafeAreaView
      style={[
        styles.container,
        Platform.select({ android: { paddingBottom: 24 } }),
      ]}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={[
          {
            height:
              Platform.OS === "android"
                ? Dimensions.get("window").height -
                  (StatusBar.currentHeight ?? 0)
                : "100%",
            alignItems: "center",
          },
          styles.keyboardAvoidingView,
        ]}
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <AgendaSchedule
          ref={agendaRef}
          startDate={dayjs().toDate()}
          onEvent={(event) => console.log(event)}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  keyboardAvoidingView: {
    flex: 1,
    backgroundColor: "white",
  },
  addButton: {
    fontSize: 30,
  },
});
