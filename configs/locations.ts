export const locations = [
  {
    id: "external-location-id-1",
    name: "Location 1",
    longitude: -74.0061,
    latitude: 40.7128,
    timezone: "America/New_York",
    employees: {
      "external-employee-organization-admin": {
        roles: ["Manager"],
      },
      "external-employee-location-admin": {
        roles: ["Cook", "Waiter"],
      },
      "external-employee-manager-write": {
        roles: ["Bartender"],
      },
      "external-employee-id-read-only": {
        roles: ["Waiter", "Bartender"],
      },
      "external-employee-manager-standard": {
        roles: ["Manager"],
      },
      "external-employee-id-read-only-long-name": {
        roles: ["Cook"],
      },
    },
  },
  {
    id: "external-location-id-2",
    name: "Location 2",
    longitude: -71.0061,
    latitude: 38.7128,
    timezone: "America/New_York",
    employees: {
      "external-employee-organization-admin": { roles: ["user-admin"] },
      "external-employee-location-admin": { roles: ["user-location-admin"] },
      "external-employee-manager-write": { roles: ["user-manager-write"] },
      "external-employee-manager-standard": {
        roles: ["user-manager-standard"],
      },
      "external-employee-id-read-only": { roles: ["readonly"] },
      "external-employee-id-read-only-long-name": { roles: ["readonly"] },
    },
  },
  // {
  //   id: "external-location-id-3",
  //   name: "Location 3",
  //   longitude: -71.0061,
  //   latitude: 38.7128,
  //   timezone: "America/New_York",
  //   employees: {
  //     "external-employee-organization-admin": { roles: ["user-admin"] },
  //     "external-employee-location-admin": { roles: ["user-location-admin"] },
  //   },
  // },
];
