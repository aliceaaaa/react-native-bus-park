import { View, TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import { BusParkInput } from "../components/BusParkInput";
import { Component } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { IApplicationState } from "../redux/IApplicationState";
import {
  onDriverDateOfBirthAdded,
  onDriverNameAdded
} from "../redux/driver/DriverActions";
import { BusParkButton } from "../components/BusParkButton";
import { onDriverAddWanted } from "../redux/DriverList/DriverListActions";
import { DriverModelBuilder } from "../Models/DriverModelBuilder";

export interface IAddDriverPropsFromState {
  name: string;
  dateOfBirth: string;
}

export interface IAddDriverPropsFromDispatch {
  onDriverAddWanted: typeof onDriverAddWanted;
  onDriverNameAdded: typeof onDriverNameAdded;
  onDriverDateOfBirthAdded: typeof onDriverDateOfBirthAdded;
}

export interface IAddDriverOwnProps
  extends IAddDriverPropsFromState,
    IAddDriverPropsFromDispatch {}

class AddTheDriverComponent extends Component<IAddDriverOwnProps> {
  private dateOfBirthInput: BusParkInput | undefined;

  public render() {
    return (
      <View>
        <BusParkInput
          autoFocus
          isInputNumeric={false}
          maxLength={254}
          numberOfLines={1}
          onChangeText={this.props.onDriverNameAdded}
          onSubmitEditing={this.onSubmitEditing}
          placeholder={"Enter bus driver full name"}
          value={this.props.name}
        />
        <BusParkInput
          isInputNumeric={true}
          mask={"dd.mm.yyyy"}
          maxLength={10}
          numberOfLines={1}
          onChangeText={this.props.onDriverDateOfBirthAdded}
          placeholder={"Enter bus driver date of birth"}
          ref={this.ref}
          value={this.props.dateOfBirth}
        />

        <BusParkButton title={"Add driver"} onPress={this.onAddDriverPress} />
      </View>
    );
  }

  private ref = (input: BusParkInput) => {
    this.dateOfBirthInput = input;
  };

  private onSubmitEditing = () => {
    this.dateOfBirthInput!.focus();
  };

  private onAddDriverPress = () => {
    this.props.onDriverAddWanted(
      DriverModelBuilder.build(this.props.name, this.props.dateOfBirth)
    );
  };
}

const mapStateToProps = (
  state: IApplicationState
): IAddDriverPropsFromState => ({
  name: state.driver.name,
  dateOfBirth: state.driver.dateOfBirth
});

const mapDispatchToProps = (dispatch: Dispatch): IAddDriverPropsFromDispatch =>
  bindActionCreators(
    {
      onDriverAddWanted,
      onDriverNameAdded,
      onDriverDateOfBirthAdded
    },
    dispatch
  );

export const AddTheDriverPage = connect<
  IAddDriverPropsFromState,
  IAddDriverPropsFromDispatch,
  IAddDriverOwnProps,
  IApplicationState
>(
  mapStateToProps,
  mapDispatchToProps
)(AddTheDriverComponent);
