import * as actions from "./DistanceActions";
import { InitialDistanceState } from "./InitialDistanceState";
import { DistanceActionType } from "./DistanceActionType";
import { getType } from "typesafe-actions";
import { Reducer } from "redux";
import { IDistatnceState } from "./IDistanceState";

export const DistanceReducer: Reducer<IDistatnceState> = (
  state = InitialDistanceState,
  action: DistanceActionType
) => {
  switch (action.type) {
    case getType(actions.onDistanceChanged): {
      return {
        ...state,
        distance: action.payload,
        timeToTravel: action.payload / 1000 / 480
      };
    }
    case getType(actions.onDepartureCityChanged): {
      return {
        ...state,
        departureCity: action.payload
      };
    }

    case getType(actions.onDestinationCityChanged): {
      return {
        ...state,
        destinationCity: action.payload
      };
    }

    case getType(actions.onCitiesClearWanted): {
      return {
        ...state,
        destinationCity: "",
        departureCity: ""
      };
    }

    default:
      return state;
  }
};
