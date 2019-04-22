import { Reducer } from "redux";
import { IBusListState } from "./IBusListState";
import { InitialBusListState } from "./InitialBusListState";
import { BusListActionType } from "./BusListActionType";
import { getType } from "typesafe-actions";
import * as actions from "./BusListActions";

export const BusListReducer: Reducer<IBusListState> = (
  state = InitialBusListState,
  action: BusListActionType
): IBusListState => {
  switch (action.type) {
    case getType(actions.onBusAddWanted): {
      return {
        ...state,
        buses: [...state.buses, action.payload]
      };
    }

    default:
      return state;
  }
};
