import { IBusState } from "./IBusState";
import { BusActionType } from "./BusActionType";
import { Reducer } from "redux";
import * as actions from "./BusActions";
import { InitialBusState } from "./InitialBusState";
import { getType } from "typesafe-actions";

export const BusReducer: Reducer<IBusState> = (
  state = InitialBusState,
  action: BusActionType
): IBusState => {
  switch (action.type) {
    case getType(actions.onBusBrandAdded): {
      return {
        ...state,
        brand: action.payload
      };
    }

    case getType(actions.onBusModelAdded): {
      return {
        ...state,
        model: action.payload
      };
    }

    case getType(actions.onBusReleaseYearAdded): {
      return {
        ...state,
        releaseYear: action.payload
      };
    }

    case getType(actions.onBusVelocityAdded): {
      return {
        ...state,
        velocity: action.payload
      };
    }

    default:
      return state;
  }
};
