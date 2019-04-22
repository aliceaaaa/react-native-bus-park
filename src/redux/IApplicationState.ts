import { IDriverState } from "./driver/IDriverState";
import { IBusState } from "./bus/IBusState";
import { IDriverListState } from "./DriverList/IDriverListState";
import { IBusListState } from "./BusList/IBusListState";

export interface IApplicationState {
  bus: IBusState;
  busList: IBusListState;
  driver: IDriverState;
  driverList: IDriverListState;
}
