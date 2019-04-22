import { ActionType } from "typesafe-actions";
import * as driverListActions from "./DriverListActions";

export type DriverListActionType = ActionType<typeof driverListActions>;
