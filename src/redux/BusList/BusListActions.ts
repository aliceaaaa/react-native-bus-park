import { createAction } from "typesafe-actions";
import { BusModel } from "../../Models/BusModel";

export const onBusAddWanted = createAction(
  "busList/ON_BUS_ADD_WANTED",
  resolve => (bus: BusModel) => resolve(bus)
);
