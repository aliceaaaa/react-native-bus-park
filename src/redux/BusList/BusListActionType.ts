import { ActionType } from "typesafe-actions";
import * as busListActions from "./BusListActions";

export type BusListActionType = ActionType<typeof busListActions>;
