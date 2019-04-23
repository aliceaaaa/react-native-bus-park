import { createAction } from "typesafe-actions";

export const onDistanceChanged = createAction(
  "distance/ON_DISTANCE_CHANGED",
  resolve => (distance: number) => resolve(distance)
);

export const onDepartureCityChanged = createAction(
  "distance/ON_DEPARTURE_CITY_CHANGED",
  resolve => (departureCity: string) => resolve(departureCity)
);

export const onDestinationCityChanged = createAction(
  "distance/ON_DESTINATION_CITY_CHANGED",
  resolve => (destinationCity: string) => resolve(destinationCity)
);

export const onCitiesClearWanted = createAction(
  "distance/ON_CITIES_CLEAR_WANTED"
);

export const onEnableSearchButton = createAction(
  "distance/ON_ENABLE_SEARCH_BUTTON"
);

export const onGetDistanceWanted = createAction(
  "distance/ON_GET_DISTANCE_WANTED"
);

export const onGetDistanceRequestFailed = createAction(
  "distance/ON_GET_DISTANCE_REQUEST_FAILED"
);
