import { rootDistanceSagas } from "./distance/DistanceSagas";
import { all, spawn } from "redux-saga/effects";

export function* rootSaga() {
  yield all([spawn(rootDistanceSagas)]);
}
