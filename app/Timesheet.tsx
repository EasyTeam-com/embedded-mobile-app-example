import { ThemedText } from "@/components/ThemedText";
import { SHIFT_FORM_MODES, Timesheet, TimesheetRef } from "@easyteam/ui";
import { useFocusEffect } from "@react-navigation/native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function TimesheetScreen() {
  const ref = useRef<TimesheetRef>(null);
  const router = useRouter();
  const params = useLocalSearchParams();

  const employeeId = Array.isArray(params?.employeeId)
    ? params.employeeId[0]
    : params?.employeeId;
  const pStartDate = Array.isArray(params?.startDate)
    ? params.startDate[0]
    : params?.startDate;
  const pEndDate = Array.isArray(params?.endDate)
    ? params.endDate[0]
    : params?.endDate;

  const [startDate, setStartDate] = useState<string | undefined>(pStartDate);
  const [endDate, setEndDate] = useState<string | undefined>(pEndDate);

  useEffect(() => {
    setStartDate(pStartDate);
    setEndDate(pEndDate);
  }, [pStartDate, pEndDate]);

  const handleAddShift = useCallback(() => {
    if (ref.current) {
      router.push({
        pathname: "/ShiftForm",
        params: {
          employeeId: ref.current.selectedEmployeeId,
          date: startDate,
        },
      });
    }
  }, [router, startDate]);

  // Reload data when the screen comes into focus
  useFocusEffect(
    useCallback(() => {
      // This will run every time the screen comes into focus
      ref.current?.reloadData();
    }, [])
  );

  return (
    <>
      <Stack.Screen
        options={{
          title: "Timesheet",
          headerRight: () => (
            <TouchableOpacity onPress={handleAddShift} style={styles.addButton}>
              <ThemedText style={styles.addButtonText}>+</ThemedText>
            </TouchableOpacity>
          ),
        }}
      />
      <Timesheet
        ref={ref}
        employeeId={employeeId}
        startDate={startDate}
        endDate={endDate}
        onEditPress={(date: string, selectedEmployeeId: string) => {
          console.log("TimesheetScreen, edit press", date);
          router.push({
            pathname: "/ShiftForm",
            params: {
              date,
              employeeId: selectedEmployeeId,
              mode: SHIFT_FORM_MODES.EDIT,
            },
          });
        }}
        onEvent={(event) => console.log("Timesheet event:", event)}
        onDateRangeChange={(newStartDate: string, newEndDate: string) => {
          console.log(
            "onDateRangeChange log => startDate: ",
            newStartDate,
            "endDate: ",
            newEndDate
          );
          setStartDate(newStartDate);
          setEndDate(newEndDate);
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
  },
  addButtonText: {
    fontSize: 30,
    textAlign: "center",
    textAlignVertical: "center",
    paddingHorizontal: 6,
  },
});
