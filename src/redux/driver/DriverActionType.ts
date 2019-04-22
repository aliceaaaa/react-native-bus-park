import { ActionType } from "typesafe-actions";
import * as driverActions from "./DriverActions";

export type DriverActionType = ActionType<typeof driverActions>;
