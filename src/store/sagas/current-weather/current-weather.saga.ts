import { call, put, select, takeEvery } from 'redux-saga/effects';

import { getCurrentWeather } from '@/api/current-weather.api';
import {
  setCurrentWeather,
  setCurrentWeatherRequestStatus,
  updateLastRequestDate,
} from '@/store/reducers/current-weather.reducer';
import {
  currentWeatherSelector,
  locationSelector,
  weatherApiVariantSelector,
} from '@/store/selectors';
import {
  CurrentWeatherResponse,
  FormattedCurrentWeatherResponse,
} from '@/types/api';
import { Coords } from '@/types/common';
import { CurrentWeatherObj } from '@/types/store';
import { CurrentWeatherResponseMeteosource } from '@/types/weather-api/meteosource.types';
import { CurrentWeatherResponseOpenweather } from '@/types/weather-api/openweather.types';
import {
  formatMeteosourceResponse,
  formatOpenweatherResponse,
} from '@/utils/format-api-response';
import { isCacheRequestOutdated } from '@/utils/is-cache-outdated';

import { UPDATE_CURRENT_WEATHER } from './current-weather.action';

function* updateCurrentWeatherWorker() {
  const { latitude, longitude } = yield select(locationSelector);

  const coords: Coords = {
    latitude,
    longitude,
  };

  if (latitude && longitude) {
    const { apiVariant }: ReturnType<typeof weatherApiVariantSelector> =
      yield select(weatherApiVariantSelector);

    const { lastRequestDate }: CurrentWeatherObj = yield select(
      currentWeatherSelector(apiVariant),
    );

    if (isCacheRequestOutdated(lastRequestDate)) {
      yield put(
        setCurrentWeatherRequestStatus({ status: 'loading', apiVariant }),
      );

      try {
        const currentWeather: CurrentWeatherResponse = yield call(
          getCurrentWeather,
          coords,
          apiVariant,
        );

        const formattedCurrentWeather: FormattedCurrentWeatherResponse =
          apiVariant === 'openweather'
            ? formatOpenweatherResponse(
                currentWeather as CurrentWeatherResponseOpenweather,
              )
            : formatMeteosourceResponse(
                currentWeather as CurrentWeatherResponseMeteosource,
              );

        yield put(
          setCurrentWeather({ ...formattedCurrentWeather, apiVariant }),
        );

        yield put(
          setCurrentWeatherRequestStatus({ status: 'succeeded', apiVariant }),
        );

        yield put(updateLastRequestDate(apiVariant));
      } catch (error) {
        yield put(
          setCurrentWeatherRequestStatus({ status: 'failed', apiVariant }),
        );
      }
    }
  }
}

export function* weatherWatcher() {
  yield takeEvery(UPDATE_CURRENT_WEATHER, updateCurrentWeatherWorker);
}
