import { WeatherConfig, WeatherVariant } from '@/types/common';

import clear1920 from '@/assets/backgrounds/clear/clear-1920.webp';
import clear1220 from '@/assets/backgrounds/clear/clear-1220.webp';
import clear920 from '@/assets/backgrounds/clear/clear-920.webp';
import clear640 from '@/assets/backgrounds/clear/clear-640.webp';
import clear360 from '@/assets/backgrounds/clear/clear-360.webp';

import rain1920 from '@/assets/backgrounds/rain/rain-1920.webp';
import rain1220 from '@/assets/backgrounds/rain/rain-1220.webp';
import rain920 from '@/assets/backgrounds/rain/rain-920.webp';
import rain640 from '@/assets/backgrounds/rain/rain-640.webp';
import rain360 from '@/assets/backgrounds/rain/rain-360.webp';

import overcast1920 from '@/assets/backgrounds/overcast/overcast-1920.webp';
import overcast1220 from '@/assets/backgrounds/overcast/overcast-1220.webp';
import overcast920 from '@/assets/backgrounds/overcast/overcast-920.webp';
import overcast640 from '@/assets/backgrounds/overcast/overcast-640.webp';
import overcast360 from '@/assets/backgrounds/overcast/overcast-360.webp';

import snow1920 from '@/assets/backgrounds/snow/snow-1920.webp';
import snow1220 from '@/assets/backgrounds/snow/snow-1220.webp';
import snow920 from '@/assets/backgrounds/snow/snow-920.webp';
import snow640 from '@/assets/backgrounds/snow/snow-640.webp';
import snow360 from '@/assets/backgrounds/snow/snow-360.webp';

import cloudy1920 from '@/assets/backgrounds/cloudy/cloudy-1920.webp';
import cloudy1220 from '@/assets/backgrounds/cloudy/cloudy-1220.webp';
import cloudy920 from '@/assets/backgrounds/cloudy/cloudy-920.webp';
import cloudy640 from '@/assets/backgrounds/cloudy/cloudy-640.webp';
import cloudy360 from '@/assets/backgrounds/cloudy/cloudy-360.webp';

import fog1920 from '@/assets/backgrounds/fog/fog-1920.webp';
import fog1220 from '@/assets/backgrounds/fog/fog-1220.webp';
import fog920 from '@/assets/backgrounds/fog/fog-920.webp';
import fog640 from '@/assets/backgrounds/fog/fog-640.webp';
import fog360 from '@/assets/backgrounds/fog/fog-360.webp';

import storm1920 from '@/assets/backgrounds/storm/storm-1920.webp';
import storm1220 from '@/assets/backgrounds/storm/storm-1220.webp';
import storm920 from '@/assets/backgrounds/storm/storm-920.webp';
import storm640 from '@/assets/backgrounds/storm/storm-640.webp';
import storm360 from '@/assets/backgrounds/storm/storm-360.webp';

export const CURRENT_WEATHER_EXTENDED_ITEMS = {
  humidity: {
    title: 'humidity',
    iconName: 'humidity',
    unit: '%',
  },
  pressure: {
    title: 'pressure',
    iconName: 'barometer',
    unit: 'hPa',
  },
  windSpeed: {
    title: 'wind',
    iconName: 'wind',
    unit: 'km/h',
  },
  minTemp: {
    title: 'min temperature',
    iconName: 'min-thermometer',
    unit: '°C',
  },
  maxTemp: {
    title: 'max temperature',
    iconName: 'max-thermometer',
    unit: '°C',
  },
  feelsLike: {
    title: 'feels like',
    iconName: 'thermometer',
    unit: '°',
  },
} as const;

export const WEATHER_VARIANTS = [
  'clear',
  'cloudy',
  'overcast',
  'fog',
  'rain',
  'storm',
  'snow',
] as const;

export const WEATHER_CONFIG: Record<
  WeatherVariant,
  WeatherConfig<WeatherVariant>
> = {
  clear: {
    backgroundSrc: {
      sm: clear360,
      md: clear640,
      lg: clear920,
      xl: clear1220,
      xxl: clear1920,
    },
    icons: {
      day: 'clear-day',
      night: 'clear-night',
    },
    apiIcons: {
      day: {
        meteosource: ['2', '3', '4'],
        openweather: ['01d', '02d'],
      },
      night: {
        meteosource: ['26', '27', '28'],
        openweather: ['01n', '02n'],
      },
    },
  },
  cloudy: {
    backgroundSrc: {
      sm: cloudy360,
      md: cloudy640,
      lg: cloudy920,
      xl: cloudy1220,
      xxl: cloudy1920,
    },
    icons: {
      day: 'cloudy-day',
      night: 'cloudy-night',
    },
    apiIcons: {
      day: {
        meteosource: ['5', '6'],
        openweather: ['03d'],
      },
      night: {
        meteosource: ['29', '30'],
        openweather: ['03n'],
      },
    },
  },
  overcast: {
    backgroundSrc: {
      sm: overcast360,
      md: overcast640,
      lg: overcast920,
      xl: overcast1220,
      xxl: overcast1920,
    },
    icons: {
      day: 'overcast-day',
      night: 'overcast-night',
    },
    apiIcons: {
      day: {
        meteosource: ['7', '8'],
        openweather: ['04d'],
      },
      night: {
        meteosource: ['31'],
        openweather: ['04n'],
      },
    },
  },
  fog: {
    backgroundSrc: {
      sm: fog360,
      md: fog640,
      lg: fog920,
      xl: fog1220,
      xxl: fog1920,
    },
    icons: {
      day: 'fog-day',
      night: 'fog-night',
    },
    apiIcons: {
      day: {
        meteosource: ['9'],
        openweather: ['50d'],
      },
      night: {
        meteosource: ['9'],
        openweather: ['50n'],
      },
    },
  },
  rain: {
    backgroundSrc: {
      sm: rain360,
      md: rain640,
      lg: rain920,
      xl: rain1220,
      xxl: rain1920,
    },
    icons: {
      day: 'rain-day',
      night: 'rain-night',
    },
    apiIcons: {
      day: {
        meteosource: ['10', '11', '12', '13'],
        openweather: ['09d', '10d'],
      },
      night: {
        meteosource: ['32'],
        openweather: ['09n', '10n'],
      },
    },
  },
  snow: {
    backgroundSrc: {
      sm: snow360,
      md: snow640,
      lg: snow920,
      xl: snow1220,
      xxl: snow1920,
    },
    icons: {
      day: 'snow-day',
      night: 'snow-night',
    },
    apiIcons: {
      day: {
        meteosource: [
          '16',
          '17',
          '18',
          '19',
          '20',
          '21',
          '22',
          '23',
          '24',
          '25',
          '26',
        ],
        openweather: ['13d'],
      },
      night: {
        meteosource: ['34', '35', '36'],
        openweather: ['13n'],
      },
    },
  },
  storm: {
    backgroundSrc: {
      sm: storm360,
      md: storm640,
      lg: storm920,
      xl: storm1220,
      xxl: storm1920,
    },
    icons: {
      day: 'storm-day',
      night: 'storm-night',
    },
    apiIcons: {
      day: {
        meteosource: ['14', '15'],
        openweather: ['11d'],
      },
      night: {
        meteosource: ['33'],
        openweather: ['11n'],
      },
    },
  },
};
