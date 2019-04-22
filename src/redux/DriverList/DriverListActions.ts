import { createAction } from "typesafe-actions";
import { DriverModel } from "../../Models/DriverModel";

export const onDriverAddWanted = createAction(
  "driverList/ON_DRIVER_ADD_WANTED",
  resolve => (driver: DriverModel) => resolve(driver)
);
