import { IApplicationState } from "./IApplicationState";
import { InitialDriverState } from "./driver/InitialDriverState";
import { InitialBusState } from "./bus/InitialBusState";
import { InitialDriverListState } from "./DriverList/InitialDriverListState";
import { InitialBusListState } from "./BusList/InitialBusListState";
import { InitialDistanceState } from "./distance/InitialDistanceState";

export const InitialApplicationState: IApplicationState = {
  driver: InitialDriverState,
  bus: InitialBusState,
  driverList: InitialDriverListState,
  busList: InitialBusListState,
  distance: InitialDistanceState
};
