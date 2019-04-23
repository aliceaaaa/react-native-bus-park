import { AnyAction, combineReducers } from "redux";
import { IApplicationState } from "./IApplicationState";
import { InitialApplicationState } from "./InitialApplicationState";
import { DriverReducer } from "./driver/DriverReducer";
import { BusReducer } from "./bus/BusReducer";
import { DriverListReducer } from "./DriverList/DriverListReducer";
import { BusListReducer } from "./BusList/BusListReducer";
import { DistanceReducer } from "./distance/DistanceReducer";

export const ApplicationReducer = (
  state = InitialApplicationState,
  action: AnyAction
) => {
  return combineReducers<IApplicationState>({
    driver: DriverReducer,
    bus: BusReducer,
    busList: BusListReducer,
    driverList: DriverListReducer,
    distance: DistanceReducer
  })(state, action);
};
