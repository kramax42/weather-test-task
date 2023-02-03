import { SagaIterator } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';

import { getDailyWeather, getHourlyWeather } from '@/api/forecast.api';
import {
  setDailyForecast,
  setForecastRequestStatus,
  setHourlyForecast,
  updateLastRequestDailyDate,
  updateLastRequestHourlyDate,
} from '@/store/reducers/forecast.reducer';
import {
  forecastSelector,
  forecastSelectorIsDailyActive,
  locationSelector,
  weatherApiVariantSelector,
} from '@/store/selectors';
import { Coords } from '@/types/common';
import { Forecast } from '@/types/store';
import {
  DailyForecastResponse,
  HourlyForecastResponse,
} from '@/types/weather-api/meteosource.types';
import {
  formatDailyForecastResponse,
  formatHourlyForecastResponse,
} from '@/utils/format-api-response';
import { isCacheRequestOutdated } from '@/utils/is-cache-outdated';

import { UPDATE_FORECAST } from './forecast.action';

function* updateForecastWorker(): SagaIterator {
  const { latitude, longitude } = yield select(locationSelector);

  const coords: Coords = {
    latitude,
    longitude,
  };

  if (latitude && longitude) {
    const { apiVariant } = yield select(weatherApiVariantSelector);

    const isDailyForecastActive: ReturnType<
      typeof forecastSelectorIsDailyActive
    > = yield select(forecastSelectorIsDailyActive);

    if (isDailyForecastActive) {
      const { lastRequestDailyDate }: Forecast = yield select(
        forecastSelector(apiVariant),
      );

      if (isCacheRequestOutdated(lastRequestDailyDate)) {
        yield put(setForecastRequestStatus({ status: 'loading', apiVariant }));

        try {
          const dailyWeather: DailyForecastResponse = yield call(
            getDailyWeather,
            coords,
            apiVariant,
          );

          const convertedDailyForecast = formatDailyForecastResponse(
            dailyWeather,
            apiVariant,
          );

          yield put(
            setDailyForecast({ daily: convertedDailyForecast, apiVariant }),
          );
          yield put(
            setForecastRequestStatus({ status: 'succeeded', apiVariant }),
          );
        } catch (error) {
          yield put(setForecastRequestStatus({ status: 'failed', apiVariant }));
        }

        yield put(updateLastRequestDailyDate(apiVariant));
      }
    } else {
      const { lastRequestHourlyDate }: Forecast = yield select(
        forecastSelector(apiVariant),
      );

      if (isCacheRequestOutdated(lastRequestHourlyDate)) {
        yield put(setForecastRequestStatus({ status: 'loading', apiVariant }));

        try {
          const hourlyForecast: HourlyForecastResponse = yield call(
            getHourlyWeather,
            coords,
            apiVariant,
          );

          const convertedHourlyForecast = formatHourlyForecastResponse(
            hourlyForecast,
            apiVariant,
          );

          yield put(
            setHourlyForecast({ hourly: convertedHourlyForecast, apiVariant }),
          );

          yield put(
            setForecastRequestStatus({ status: 'succeeded', apiVariant }),
          );
        } catch (error) {
          yield put(setForecastRequestStatus({ status: 'failed', apiVariant }));
        }
        yield put(updateLastRequestHourlyDate(apiVariant));
      }
    }
  }
}

export function* forecastWatcher() {
  yield takeEvery(UPDATE_FORECAST, updateForecastWorker);
}
