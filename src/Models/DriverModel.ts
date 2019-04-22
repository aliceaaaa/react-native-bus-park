import { List } from "immutable";
import { BusModel } from "./BusModel";

export interface DriverModel {
  name?: string;
  birthDate?: string;
  busesAvailable?: Array<BusModel>;
}
