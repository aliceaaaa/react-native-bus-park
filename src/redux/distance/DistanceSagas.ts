import * as effects from "redux-saga/effects";
import * as actions from "./DistanceActions";
import { DistanceService } from "../../Services/GetDistanceService";
import { IApplicationState } from "../IApplicationState";
import { Storage } from "../../KeyStorage/Storage";
import { getType } from "typesafe-actions";
import { googleApiKey } from "../../KeyStorage/GoogleApiKey";

export function* findIfGoogleApiKeyExists() {
  const api = yield effects.call(Storage.getKeyAsync);

  if (api === undefined) {
    return;
  }

  yield effects.put(actions.onEnableSearchButton());
}

export function* watchGetDistanceWanted() {
  yield effects.takeLatest(getType(actions.onGetDistanceWanted), getDistance);
}

export function* getDistance() {
  yield effects.call(Storage.setKeyAsync, googleApiKey);

  const state: IApplicationState = yield effects.select();

  let distance: number;

  try {
    distance = yield effects.call(
      DistanceService.get,
      state.distance.departureCity,
      state.distance.destinationCity
    );

    yield effects.put(actions.onDistanceChanged(distance));
  } catch (error) {
    console.log(error);

    yield effects.put(actions.onGetDistanceRequestFailed());
  }

  return;
}

export function* rootDistanceSagas() {
  yield effects.all([effects.spawn(watchGetDistanceWanted)]);
}
