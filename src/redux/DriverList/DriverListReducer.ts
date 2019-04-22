import { DriverListActionType } from "./DriverListActionType";
import * as actions from "./DriverListActions";
import { getType } from "typesafe-actions";
import { InitialDriverListState } from "./InitialDriverListState";
import { IDriverListState } from "./IDriverListState";

export const DriverListReducer = (
  state = InitialDriverListState,
  action: DriverListActionType
): IDriverListState => {
  switch (action.type) {
    case getType(actions.onDriverAddWanted):
      return {
        ...state,
        drivers: [...state.drivers, action.payload]
      };
    default:
      return state;
  }
};
