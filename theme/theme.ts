import { CustomerTheme } from "@easyteam/ui";

export const theme: CustomerTheme = {
  tokens: {
    text: {
      main: 'green',
    },
    colors: {
      background: {
        main: '#ffffff',
        tertiary: '#F5F3EF',
        secondary: '#F5F3EF',
        quaternary: '#F5F3EF',
      },
      text: {
        main: '#000',
        primary: '#000',
        secondary: '#505054',
        tertiary: '#000',
        quaternary: '#000',
        disabled: '#919292',
      },

      dot: {
        main: '#FFD100',
      },
      primary: {
        main: '#FFD100',
      },
      switch: {
        thumb: '#FFD100',
        track: {
          unchecked: 'black',
          checked: 'black',
        },
      },
      border: {
        main: '#E7E8DE',
        lighter: '#E7E8DE',
      },
      button: {
        primary: {
          background: {
            main: '#F3BC08',
          },
          active: {
            background: {
              main: 'red',
            },
          },
        },
        default: {
          background: {
            main: '#F3BC08',
          },
          active: {
            background: {
              main: '#F3BC08',
            },
          },
        },
      },
    },
  },
  shiftForm: {
    timePicker: {
      borderColor: '#E7E8DE',
      borderWidth: 1,
    },
    addBreakButton: {
      borderWidth: 0,
    },
  },
  button: {
    backgroundColor: '#ffffff',
    color: '#000',
    borderColor: '#E7E8DE',
    borderWidth: 2,
    borderRadius: 150,
    fontWeight: '700',
  },
  primaryButton: {
    backgroundColor: '#F3BC08',
    borderRadius: 150,
    fontWeight: '700',
    _disabled: {
      backgroundColor: '#E7E8DE',
    },
  },
  outlineButton: {
    borderRadius: 150,
    fontWeight: '700',
  },
  destructiveOutlineButton: {
    borderRadius: 15,
  },
  clock: {
    breakPicker: {
      backgroundColor: '#FFF',
      color: '#000',
    },
  },
  employeeList: {
    employeeListSummaryWrapper: {
      backgroundColor: '#F5F3EF',
      borderColor: '#000',
      borderWidth: 1,
    },
    employeeListSummaryColumnValue: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: 16,
    },
  },
  calendar: {
    container: {
      backgroundColor: '#FFFFFF',
    },
    monthOverlayContainer: {
      backgroundColor: '#FFFFFF',
      borderRadius: 0,
    },
    monthContainer: {
      backgroundColor: '#FFFFFF',
      borderRadius: 0,
    },
    dayText: {
      fontFamily: 'regular',
      color: '#000',
    },
    dayNameText: {
      fontFamily: 'regular',
      color: '#000',
    },
    monthNameText: {
      fontFamily: 'regular',
      color: '#000',
    },
    selectedBetweenDayBackgroundTextColor: '#FFD100',
    holidayColor: '#000',
    selectedDayTextColor: '#000',
    selectedBetweenDayTextColor: '#000',
    selectedDayBackgroundColor: '#F3BC08',
    todayColor: 'text.primary',
    disabledTextColor: 'text.disabled',
  },
  shiftNotes: {
    menu: {
      backgroundColor: '#FFFFFF',
      borderColor: 'border.main',
      borderWidth: 1,
    },
    menuItemText: {
      color: '#000',
    },
  },
  agendaSchedule: {
    backgroundColor: '#ffffff',
    locationSelectorWrapper: {
      backgroundColor: '#FFF',
    },
    locationSelectorText: {
      color: '#000',
      fontWeight: '700',
      fontSize: 16,
      lineHeight: 24,
    },
    todayButton: {
      fontWeight: '700',
      fontSize: 16,
      lineHeight: 24,
    },
    monthWrapper: {
      backgroundColor: '#F5F3EF',
      borderColor: '#DBDBDB',
      borderWidth: 1,
    },
    monthText: {
      color: '#000',
      fontWeight: '700',
      fontSize: 16,
      lineHeight: 24,
    },
    weekDaySelectorWrapper: {
      backgroundColor: '#FFF',
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 0,
      paddingBottom: 0,
      borderColor: '#DBDBDB',
      borderWidth: 0.5,
    },
    weekDayText: {
      color: '#000',
    },
    weekDayToday: {
      fontWeight: 'bold',
    },
    dayButton: {
      backgroundColor: '#FFF',
      fontWeight: 'bold',
    },
    daySelectedButton: {
      backgroundColor: '#FFD100',
    },
    dayEntryTitleWrapper: {
      backgroundColor: '#F5F3EF',
      borderColor: '#DBDBDB',
      borderWidth: 1,
    },
    scheduleItemWrapper: {},
    optionSwitch: {
      trackUnchecked: '#FFD100',
      trackChecked: '#FFD100',
      thumb: '#fff',
    },
    shiftOptionSelector: {
      borderColor: '#CBD5E0',
      borderWidth: 1,
      borderRadius: 8,
    },
    shiftOptionSelectorTitle: {
      fontWeight: 'bold',
      fontSize: 14,
    },
    shiftOptionSelectorLabel: {
      fontSize: 14,
      borderWidth: 1,
    },
    shiftOptionSelectorItemText: {
      fontSize: 14,
    },
    timeoffTotalHoursContainer: {
      backgroundColor: '#fff',
      borderColor: '#CBD5E0',
      borderWidth: 1,
      borderRadius: 8,
    },
    timeoffTotalHoursLabel: {
      color: '#000',
      fontSize: 14,
    },
    timeoffEditTotalHoursButton: {
      backgroundColor: '#fff',
      borderColor: '#CBD5E0',
      borderWidth: 1,
      borderRadius: 8,
      paddingLeft: 20,
      paddingRight: 20,
    },
    timeoffEditTotalHoursButtonText: {
      color: '#000',
      fontWeight: 'bold',
    },
    managerNoteInput: {
      backgroundColor: '#fff',
      borderColor: '#CBD5E0',
      borderWidth: 1,
      borderRadius: 8,
      paddingLeft: 16,
      paddingRight: 16,
      fontSize: 14,
    },
    summaryContainer: {
      backgroundColor: '#F5F3EF',
      borderColor: '#E7E8DE',
      borderWidth: 1,
      borderRadius: 8,
    },
    summaryContainerLabel: {
      fontSize: 14,
    },
    summaryContainerValue: {
      fontSize: 14,
    },
    summarySeparator: {
      color: '#E7E8DE',
    },
    footer: {
      borderColor: '#E7E8DE',
      gap: 10,
    },
    bottomSheetTitle: {
      fontSize: 18,
      fontWeight: '900',
    },
    totalHoursContainer: {
      backgroundColor: '#F5F3EF',
    },
    tabText: {
      color: '#000',
      fontSize: 18,
    },
    selectedTabText: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: 18,
    },
    selectedTabContainer: {
      borderColor: '#F3BC08',
    },
    shiftOptionDropdown: {
      backgroundColor: '#F5F3EF',
      borderColor: '#E7E8DE',
      borderWidth: 1,
      borderRadius: 12,
    },
    shiftOptionSelectorItem: {
      borderColor: '#E7E8DE',
      borderWidth: 1,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 1,
    },
    dropdownMenuStyle: {
      borderRadius: 12,
      borderColor: '#E7E8DE',
      borderWidth: 1,
    },
  },
  calendarSync: {
    backgroundColor: '#ffffff',
    addCalendarSyncButton: {
      backgroundColor: '#F3BC08',
    },
    addCalendarSyncButtonDisabled: {
      backgroundColor: '#E7E8DE',
    },
  },
}