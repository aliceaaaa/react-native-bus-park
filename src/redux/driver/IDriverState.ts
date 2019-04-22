import { List } from "immutable";
import { BusModel } from "../../Models/BusModel";

export interface IDriverState {
  name: string;
  dateOfBirth?: string;
  availableBusesList: Array<BusModel>;
}
