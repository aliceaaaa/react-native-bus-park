import { IDriverState } from "./driver/IDriverState";
import { IBusState } from "./bus/IBusState";
import { IDriverListState } from "./DriverList/IDriverListState";
import { IBusListState } from "./BusList/IBusListState";
import { IDistatnceState } from "./distance/IDistanceState";

export interface IApplicationState {
  bus: IBusState;
  busList: IBusListState;
  driver: IDriverState;
  driverList: IDriverListState;
  distance: IDistatnceState;
}
