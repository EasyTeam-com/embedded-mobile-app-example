import { EmployeeData } from "@easyteam/core-ui";

export type User = EmployeeData & { permissions: string[] };

export const users: User[] = [
  {
    id: "external-employee-organization-admin",
    name: "User Organization Admin",
    role: "user-admin",
    wageType: "hourly",
    wage: 40,
    features: {
      geolocation: true,
      shiftNotes: true,
    },
    permissions: [
      "LOCATION_READ",
      "LOCATION_ADMIN",
      "SHIFT_READ",
      "SHIFT_WRITE",
      "SCHEDULE_READ",
      "SCHEDULE_WRITE",
      "ORGANIZATION_ADMIN",
      "LOCATION_ADMIN",
    ],
  },
];
