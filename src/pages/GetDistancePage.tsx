import { Component } from "react";
import { View, Text } from "react-native";
import { BusParkButton } from "../components/BusParkButton";
import axios from "axios";
import { connect } from "react-redux";
import { IApplicationState } from "../redux/IApplicationState";
import { Dispatch, bindActionCreators } from "redux";
import {
  onDistanceChanged,
  onGetDistanceWanted
} from "../redux/distance/DistanceActions";
import { GoogleCitiesSearcher } from "../components/GoogleCitiesSearcher";

export interface IGetDistancePagePropsFromState {
  departureCity: string;
  destinationCity: string;
  distance: number;
  timeToTravel: number;
}

export interface IGetDistancePagePropsFromDispatch {
  onGetDistanceWanted: typeof onGetDistanceWanted;
}

export interface IGetDistancePageOwnProps
  extends IGetDistancePagePropsFromState,
    IGetDistancePagePropsFromDispatch {}

class GetDistancePageComponent extends Component<IGetDistancePageOwnProps> {
  render() {
    return (
      <View>
        <GoogleCitiesSearcher />
        <BusParkButton
          title={"Calculate the distance"}
          onPress={this.sendCities}
        />

        <Text>Distance: {this.props.distance}</Text>
        <Text>Time to travel: {this.props.timeToTravel}</Text>
      </View>
    );
  }

  private sendCities = () => {
    this.props.onGetDistanceWanted();
  };
}

const mapStateToProps = (state: IApplicationState) => ({
  departureCity: state.distance.departureCity,
  destinationCity: state.distance.destinationCity,
  distance: state.distance.distance,
  timeToTravel: state.distance.timeToTravel
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ onGetDistanceWanted }, dispatch);

export const GetDistancePage = connect<
  IGetDistancePagePropsFromState,
  IGetDistancePagePropsFromDispatch,
  IGetDistancePageOwnProps,
  IApplicationState
>(
  mapStateToProps,
  mapDispatchToProps
)(GetDistancePageComponent);
