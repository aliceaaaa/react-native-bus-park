import { IDriverState } from "./IDriverState";
import { DriverActionType } from "./DriverActionType";
import { Reducer } from "redux";
import * as actions from "./DriverActions";
import { InitialDriverState } from "./InitialDriverState";
import { getType } from "typesafe-actions";

export const DriverReducer: Reducer<IDriverState> = (
  state = InitialDriverState,
  action: DriverActionType
): IDriverState => {
  switch (action.type) {
    case getType(actions.onDriverNameAdded): {
      return {
        ...state,
        name: action.payload
      };
    }

    case getType(actions.onDriverDateOfBirthAdded): {
      return {
        ...state,
        dateOfBirth: action.payload
      };
    }

    default:
      return state;
  }
};
