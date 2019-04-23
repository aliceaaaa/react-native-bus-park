import { GoogleAutoComplete } from "react-native-google-autocomplete";
import { Component } from "react";
import { BusParkInput } from "./BusParkInput";
import { BusParkButton } from "./BusParkButton";
import { IApplicationState } from "../redux/IApplicationState";
import { connect } from "react-redux";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Dispatch, bindActionCreators } from "redux";
import {
  onDepartureCityChanged,
  onDestinationCityChanged,
  onCitiesClearWanted
} from "../redux/distance/DistanceActions";
import { AppStyles } from "../../AppStyles";
import { googleApiKey } from "../KeyStorage/GoogleApiKey";

export interface IGoogleCitiesSearcherPropsFromState {
  departureCity: string;
  destinationCity: string;
}

export interface IGoogleCitiesSearcherPropsFromDispatch {
  onDepartureCityChanged: typeof onDepartureCityChanged;
  onCitiesClearWanted: typeof onCitiesClearWanted;
  onDestinationCityChanged: typeof onDestinationCityChanged;
}

export interface IGoogleCitiesSearcherProps
  extends IGoogleCitiesSearcherPropsFromState,
    IGoogleCitiesSearcherPropsFromDispatch {}

class GoogleCitiesSearcherComponent extends Component<
  IGoogleCitiesSearcherProps
> {
  render() {
    return (
      <GoogleAutoComplete apiKey={googleApiKey} debounce={500} minLength={3}>
        {() => (
          <View style={styles.container}>
            <BusParkInput
              isInputNumeric={false}
              placeholder="Enter departure city"
              onChangeText={this.props.onDepartureCityChanged}
              value={this.props.departureCity}
            />
            <BusParkInput
              isInputNumeric={false}
              placeholder="Enter destination city"
              onChangeText={this.props.onDestinationCityChanged}
              value={this.props.departureCity}
            />
            <BusParkButton title="Clear" onPress={this.clearInputs} />
          </View>
        )}
      </GoogleAutoComplete>
    );
  }

  private clearInputs = () => {
    this.props.onCitiesClearWanted();
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppStyles.Colors.black
  } as ViewStyle
});

const mapStateToProps = (state: IApplicationState) => ({
  departureCity: state.distance.departureCity,
  destinationCity: state.distance.destinationCity
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onCitiesClearWanted,
      onDestinationCityChanged,
      onDepartureCityChanged
    },
    dispatch
  );

export const GoogleCitiesSearcher = connect<
  IGoogleCitiesSearcherPropsFromState,
  IGoogleCitiesSearcherPropsFromDispatch,
  void,
  IApplicationState
>(
  mapStateToProps,
  mapDispatchToProps
)(GoogleCitiesSearcherComponent);
