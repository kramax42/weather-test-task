import { spawn } from 'redux-saga/effects';

import { weatherWatcher } from './current-weather/current-weather.saga';
import { forecastWatcher } from './forecast/forecast.saga';
import { coordsLocationWatcher } from './location/location.saga';

export function* rootSaga() {
  yield spawn(coordsLocationWatcher);
  yield spawn(weatherWatcher);
  yield spawn(forecastWatcher);
}
