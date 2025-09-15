import { EmployeeListRef, EmployeesTimesheet } from "@easyteam/ui";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useMemo, useRef } from "react";

export default function EmployeesScreen() {
  const ref = useRef<EmployeeListRef>(null);
  const router = useRouter();
  const params = useLocalSearchParams();

  const startDate = useMemo(() => {
    return Array.isArray(params?.startDate)
      ? params.startDate[0]
      : params?.startDate;
  }, [params?.startDate]);

  const endDate = useMemo(() => {
    return Array.isArray(params?.endDate) ? params.endDate[0] : params?.endDate;
  }, [params?.endDate]);

  // Reload data when the screen comes into focus
  useFocusEffect(
    useCallback(() => {
      // This will run every time the screen comes into focus
      ref.current?.reloadData();
    }, [])
  );

  return (
    <EmployeesTimesheet
      ref={ref}
      onEmployeeReportPress={({
        employeeId,
        startDate: currentStartDate,
        endDate: currentEndDate,
      }) =>
        router.push({
          pathname: "/Timesheet",
          params: {
            employeeId,
            startDate: currentStartDate,
            endDate: currentEndDate,
          },
        })
      }
      onEvent={(event) => console.log("Employees event:", event)}
      startDate={startDate}
      endDate={endDate}
    />
  );
}
