import { EmployeeData } from "@easyteam/core-ui";

export type User = EmployeeData & { permissions: string[] };

export const users: User[] = [
  {
    id: "external-employee-organization-admin",
    name: "Mike Michaels",
    role: "Manager",
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
  {
    id: "external-employee-read-only",
    name: "Ann Davis",
    role: "Waiter",
    wageType: "hourly",
    wage: 40,
    features: {
      geolocation: true,
      shiftNotes: true,
    },
    permissions: ["LOCATION_READ", "SHIFT_READ", "SCHEDULE_READ"],
  },
  {
    id: "external-employee-read-only-2",
    name: "Dave Green",
    role: "Cook",
    wageType: "hourly",
    wage: 40,
    features: {
      geolocation: true,
      shiftNotes: true,
    },
    permissions: ["LOCATION_READ", "SHIFT_READ", "SCHEDULE_READ"],
  },
];
