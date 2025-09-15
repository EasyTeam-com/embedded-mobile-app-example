import { SHIFT_FORM_MODES, ShiftForm, ShiftFormRef } from "@easyteam/ui";
import { HeaderBackButton } from "@react-navigation/elements";
import dayjs from "dayjs";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useRef, useState } from "react";
import { Alert, Platform } from "react-native";

export default function ShiftFormScreen() {
  const ref = useRef<ShiftFormRef>(null);
  const router = useRouter();
  const params = useLocalSearchParams();

  // Grab params from routing
  const [date, setDate] = useState(
    Array.isArray(params?.date) ? params.date[0] : params?.date
  );
  const employeeId = Array.isArray(params?.employeeId)
    ? params.employeeId[0]
    : params?.employeeId;
  const modeParam = Array.isArray(params?.mode) ? params.mode[0] : params?.mode;
  const mode =
    (modeParam as unknown as SHIFT_FORM_MODES) || SHIFT_FORM_MODES.ADD;

  // Calculate the dynamic title based on the provided information
  const getScreenTitle = () => {
    if (!date) {
      return mode === SHIFT_FORM_MODES.EDIT ? "Edit Shift" : "Add Shift";
    }

    const formattedDate = dayjs(date).format("MMM D, YYYY");
    return mode === SHIFT_FORM_MODES.EDIT
      ? `Edit Shift - ${formattedDate}`
      : `Add Shift - ${formattedDate}`;
  };

  // Handle back navigation with unsaved changes check
  const handleBackPress = useCallback(() => {
    if (!ref.current?.unsavedChanges) {
      // If there are no unsaved changes, just go back
      router.back();
      return;
    }

    // Prompt the user before leaving the screen if they have unsaved changes
    Alert.alert(
      "Unsaved Changes",
      "Are you sure you want to discard the changes?",
      [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => {},
        },
        {
          text: "Yes",
          style: "destructive",
          onPress: () => {
            router.back();
          },
        },
      ]
    );
  }, [router]);

  const handleDateChange = (changedDate: string) => {
    setDate(changedDate);
  };

  if (!date) {
    return null;
  }

  return (
    <>
      <Stack.Screen 
        options={{ 
          title: getScreenTitle(),
          headerLeft: Platform.select({
            ios: () => (
              <HeaderBackButton
                tintColor="#F3BC08"
                onPress={handleBackPress}
              />
            ),
            default: undefined,
          }),
        }} 
      />
      <ShiftForm
        ref={ref}
        shiftDate={date}
        employeeId={employeeId}
        mode={mode}
        onSaveSuccess={() => router.back()}
        onCancelPress={handleBackPress}
        onEvent={(e) => console.log("Shift form event:", e)}
        onDateChange={handleDateChange}
      />
    </>
  );
}
