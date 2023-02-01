import { PayloadAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';
import { call, put, select, takeEvery } from 'redux-saga/effects';

import { locationApi } from '@/api/location.api';
import {
  resetLastCurrentWeatherRequestDate,
  setCurrentWeatherRequestStatus,
} from '@/store/reducers/current-weather.reducer';
import {
  resetForecastRequestDate,
  setForecastRequestStatus,
} from '@/store/reducers/forecast.reducer';
import {
  setLocation,
  setLocationRequestStatus,
} from '@/store/reducers/location.reducer';
import { locationSelector, weatherApiVariantSelector } from '@/store/selectors';
import { Coords, Location } from '@/types/common';
import { LocationState } from '@/types/store';
import { isCoordsChanged } from '@/utils/is-coords-changed';

import { updateCurrentWeather } from '../current-weather/current-weather.action';
import { updateForecast } from '../forecast/forecast.action';
import { UPDATE_LOCATION } from './location.action';

function* locationByCoordsWorker(action: PayloadAction<Coords>): SagaIterator {
  const coords = action.payload;
  const { latitude, longitude } = coords;

  const { latitude: prevLatitude, longitude: prevLongitude }: LocationState =
    yield select(locationSelector);

  if (isCoordsChanged({ latitude, longitude, prevLatitude, prevLongitude })) {
    const { apiVariant }: ReturnType<typeof weatherApiVariantSelector> =
      yield select(weatherApiVariantSelector);

    yield put(setLocationRequestStatus('loading'));
    yield put(setForecastRequestStatus({ status: 'loading', apiVariant }));
    yield put(
      setCurrentWeatherRequestStatus({ status: 'loading', apiVariant }),
    );

    try {
      const location: Location = yield call(
        locationApi.getLocationByCoords,
        coords,
      );

      yield put(setLocation(location));

      yield put(resetLastCurrentWeatherRequestDate());
      yield put(updateCurrentWeather());

      yield put(resetForecastRequestDate());
      yield put(updateForecast());

      yield put(setLocationRequestStatus('succeeded'));
    } catch (error) {
      yield put(setLocationRequestStatus('failed'));
    }
  }
}

export function* coordsLocationWatcher() {
  yield takeEvery(UPDATE_LOCATION, locationByCoordsWorker);
}
