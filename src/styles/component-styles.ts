import { colors } from './colors';
import { fontSizes, spaces } from './sizes';

export const defaultStyles = {
  smallWidget: {
    height: 48,
  },
  border: {
    radius: 5,
  },
  boxShadow: `${colors.shadow} 0px 10px 22px`,
  backdropFilter: {
    blur: 60,
  },
  icon: {
    color: colors.transparent.light,
    width: 20,
    height: 20,
  },
  contentLoader: {
    color: {
      backgroundColor: colors.transparent.lightest,
      foregroundColor: colors.transparent.lighter,
    },
    speed: 3,
  },
} as const;

export const componentStyles = {
  appContainer: {
    padding: {
      desktop: spaces[4],
      tablet: spaces[3],
      mobileL: spaces[2],
    },
    widgets: {
      width: 1080,
    },
    background: {
      filter: {
        blur: 2,
        contrast: 85,
        opacity: 0.85,
      },
      trasnform: {
        scale: 1.025,
      },
    },
    overlay: {
      color: colors.blueviolet,
      opacity: 0.05,
    },
  },
  weatherApiSelect: {
    fontSize: 18,
    color: {
      background: colors.transparent.dark,
      text: colors.white,
    },
    padding: 8,
  },
  dailyHourlySwitcher: {
    container: {
      gap: 12,
    },
    title: {
      color: {
        active: colors.white,
        inActive: colors.transparent.light,
      },
      fontSize: 18,
      letterSpacing: 1,
    },
    switch: {
      width: 42,
      height: 22,
      color: {
        background: colors.transparent.lighter,
      },
      padding: 4,
      border: {
        radius: 32,
      },
      tumbler: {
        width: 14,
        height: 14,
        position: {
          top: 11,
          left: 4,
        },
        border: {
          radius: 32,
        },
        color: {
          background: colors.white,
        },
      },
    },
  },
  forecastWidget: {
    minHeight: 164,
  },
  forecast: {
    weatherIcon: {
      width: 40,
      height: 40,
    },
    item: {
      gap: 6,
      fontSize: {
        dayOrTime: 16,
        temperature: {
          desktop: 22,
          laptop: 20,
        },
        summary: 16,
      },
      color: {
        dayOrTime: colors.transparent.light,
        temperature: colors.white,
        summary: colors.transparent.light,
      },
    },
  },
  currentWeatherWidget: {
    date: {
      color: {
        text: colors.transparent.light,
      },
      fontSize: 16,
    },
    time: {
      color: {
        text: colors.transparent.light,
      },
      fontSize: 16,
    },
    location: {
      font: {
        weight: 300,
        size: {
          desktop: 22,
          tablet: 18,
        },
      },
    },
    temperature: {
      color: {
        text: colors.white,
      },
      fontSize: {
        desktop: 72,
        tablet: 64,
        mobileL: 52,
      },
    },
    errorMessage: {
      color: {
        text: colors.white,
      },
      fontSize: {
        desktop: 28,
        tablet: 22,
        mobileL: 16,
      },
    },
    weatherVariant: {
      icon: {
        width: 40,
        height: 40,
      },
      color: {
        text: colors.transparent.light,
      },
      fontSize: {
        desktop: 24,
        tablet: 20,
      },
    },
  },
  extendedWeatherItem: {
    color: {
      text: colors.transparent.light,
    },
    font: {
      size: 18,
    },
  },
  searchLocation: {
    input: {
      color: {
        background: colors.transparent.dark,
        text: colors.white,
        placeholder: colors.transparent.light,
      },
      padding: {
        top: 10,
        bottom: 10,
        left: 42,
        right: 100,
      },
    },
    suggestedLocation: {
      padding: 12,
      color: {
        background: colors.transparent.dark,
        text: colors.white,
        hover: {
          background: colors.transparent.darker,
        },
      },
    },
    searchIcon: {
      position: {
        top: 12,
        left: 12,
      },
    },
    searchButton: {
      position: {
        top: 0,
        bottom: 0,
        right: 0,
      },
      padding: {
        vertical: 0,
        horizontal: 16,
      },
      color: {
        background: colors.white,
        text: colors.transparent.dark,
        hover: {
          background: colors.orange,
          text: colors.white,
        },
      },
    },
  },
  divider: {
    verticalMargin: 10,
    opacity: 0.1,
  },
  widget: {
    background: colors.transparent.dark,
    header: {
      icon: {
        width: 24,
        height: 24,
        color: colors.transparent.lighter,
      },
    },
    padding: spaces[3],
  },
  calendarEvents: {
    authButton: {
      color: {
        background: colors.transparent.lighter,
        text: colors.white,
        hover: {
          background: colors.transparent.light,
        },
      },
      padding: {
        vertical: 6,
        horizontal: 12,
      },
    },
    eventItem: {
      fontSize: fontSizes[2],
      dateTime: {
        color: colors.transparent.light,
      },
      summary: {
        color: colors.white,
      },
    },
  },
  findMeButton: {
    fontSize: 18,
    color: {
      background: colors.transparent.dark,
      text: colors.white,
      hover: {
        background: colors.transparent.darker,
      },
    },
  },
} as const;
