import { ActionType } from "typesafe-actions";
import * as busActions from "./BusActions";

export type BusActionType = ActionType<typeof busActions>;
