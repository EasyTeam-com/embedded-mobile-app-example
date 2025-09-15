import { users } from "@/configs/users";
import { EmployeeData } from "@easyteam/core-ui";
import React, { createContext, ReactNode, useContext, useState } from "react";

const EmployeesContext = createContext<{
  employees?: EmployeeData[];
  setEmployees?: React.Dispatch<
    React.SetStateAction<EmployeeData[] | undefined>
  >;
  isGlobalTimeTrackingEnabled?: boolean;
  setIsGlobalTimeTrackingEnabled?: React.Dispatch<
    React.SetStateAction<boolean | undefined>
  >;
}>({
  employees: users,
});

export const EmployeesProvider = ({ children }: { children: ReactNode }) => {
  const [employees, setEmployees] = useState<EmployeeData[] | undefined>(users);
  const [isGlobalTimeTrackingEnabled, setIsGlobalTimeTrackingEnabled] =
    useState<boolean | undefined>(false);

  return (
    <EmployeesContext.Provider
      value={{
        employees,
        setEmployees,
        isGlobalTimeTrackingEnabled,
        setIsGlobalTimeTrackingEnabled,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};

export const useEmployees = () => {
  return useContext(EmployeesContext);
};
