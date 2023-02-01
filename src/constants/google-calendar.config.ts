import { apiTokens } from './api-tokens';
import { urls } from './api-urls';

export const MAX_CALENDAR_EVENTS_DISPLAY = 10;

export const apiCalendarConfig = {
  clientId: apiTokens.googleCliendId,
  apiKey: apiTokens.googleApiKey,
  scope: urls.googleScope,
  discoveryDocs: urls.googleDiscoveryDocs,
};
