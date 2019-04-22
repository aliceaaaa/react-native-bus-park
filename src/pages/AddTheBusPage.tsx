import { View, StyleSheet, ViewStyle } from "react-native";
import { BusParkInput } from "../components/BusParkInput";
import { Component } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { IApplicationState } from "../redux/IApplicationState";
import {
  onBusBrandAdded,
  onBusModelAdded,
  onBusReleaseYearAdded,
  onBusVelocityAdded
} from "../redux/bus/BusActions";
import { BusParkButton } from "../components/BusParkButton";
import { onBusAddWanted } from "../redux/BusList/BusListActions";
import { BusModelBuilder } from "../Models/BusModelBuilder";
import { Actions } from "react-native-router-flux";
import { AppStyles } from "../../AppStyles";

export interface IAddBusPropsFromState {
  brand: string;
  model: string;
  releaseYear: string;
  velocity: string;
}

export interface IAddBusPropsFromDispatch {
  onBusBrandAdded: typeof onBusBrandAdded;
  onBusModelAdded: typeof onBusModelAdded;
  onBusReleaseYearAdded: typeof onBusReleaseYearAdded;
  onBusVelocityAdded: typeof onBusVelocityAdded;
  onBusAddWanted: typeof onBusAddWanted;
}

export interface IAddBusOwnProps
  extends IAddBusPropsFromState,
    IAddBusPropsFromDispatch {}

class AddTheBusComponent extends Component<IAddBusOwnProps> {
  public render() {
    return (
      <View style={styles.container}>
        <BusParkInput
          isInputNumeric={false}
          maxLength={100}
          numberOfLines={1}
          onChangeText={this.props.onBusBrandAdded}
          placeholder={"Enter bus brand"}
          value={this.props.brand}
        />
        <BusParkInput
          isInputNumeric={false}
          maxLength={100}
          numberOfLines={1}
          onChangeText={this.props.onBusModelAdded}
          placeholder={"Enter bus model"}
        />
        <BusParkInput
          isInputNumeric={true}
          keyboardType={"numeric"}
          mask={"dd.mm.yyyy"}
          maxLength={4}
          numberOfLines={1}
          onChangeText={this.props.onBusReleaseYearAdded}
          placeholder={"Enter release year of the bus"}
          value={this.props.releaseYear}
        />
        <BusParkInput
          isInputNumeric={true}
          keyboardType={"numeric"}
          maxLength={3}
          numberOfLines={1}
          onChangeText={this.props.onBusVelocityAdded}
          placeholder={"Add bus velocity"}
          value={this.props.velocity}
        />
        <BusParkButton title={"Add a bus"} onPress={this.onAddBusPress} />
        <BusParkButton
          title={"Main page"}
          onPress={this.onNavigateToMainPage}
        />
      </View>
    );
  }

  private onAddBusPress = () => {
    this.props.onBusAddWanted(
      BusModelBuilder.build(
        this.props.brand,
        this.props.model,
        this.props.releaseYear,
        this.props.velocity
      )
    );
  };

  private onNavigateToMainPage = () => {
    Actions.pop();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.Colors.black
  } as ViewStyle
});

const mapStateToProps = (state: IApplicationState): IAddBusPropsFromState => ({
  brand: state.bus.brand,
  model: state.bus.model,
  releaseYear: state.bus.releaseYear,
  velocity: state.bus.velocity
});

const mapDispatchToProps = (dispatch: Dispatch): IAddBusPropsFromDispatch =>
  bindActionCreators(
    {
      onBusBrandAdded,
      onBusModelAdded,
      onBusReleaseYearAdded,
      onBusVelocityAdded,
      onBusAddWanted
    },
    dispatch
  );

export const AddTheBusPage = connect<
  IAddBusPropsFromState,
  IAddBusPropsFromDispatch,
  IAddBusOwnProps,
  IApplicationState
>(
  mapStateToProps,
  mapDispatchToProps
)(AddTheBusComponent);
