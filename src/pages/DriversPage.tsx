import { Component } from "react";
import { DriverCard } from "../components/DriverCard";
import { connect } from "react-redux";
import { IApplicationState } from "../redux/IApplicationState";
import { DriverModel } from "../Models/DriverModel";

export interface IDriveresPagePropsFromState {
  drivers: Array<DriverModel>;
}

class DriversPageComponent extends Component<IDriveresPagePropsFromState> {
  public render() {
    return this.props.drivers.map(driver => {
      <DriverCard name={driver.name} dateOfBirth={driver.birthDate} />;
    });
  }
}

const mapStateToProps = (
  state: IApplicationState
): IDriveresPagePropsFromState => ({
  drivers: state.driverList.drivers
});

export const DriversPage = connect<
  IDriveresPagePropsFromState,
  void,
  void,
  IApplicationState
>(
  mapStateToProps,
  null
)(DriversPageComponent);
