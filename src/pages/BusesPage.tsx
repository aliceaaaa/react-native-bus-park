import { Component } from "react";
import { BusCard } from "../components/BusCard";
import { connect } from "react-redux";
import { IApplicationState } from "../redux/IApplicationState";
import { BusModel } from "../Models/BusModel";

export interface IBusesPagePropsFromState {
  buses: Array<BusModel>;
}

class BusesPageComponent extends Component<IBusesPagePropsFromState> {
  public render() {
    return this.props.buses.map(bus => {
      <BusCard
        brand={bus.brand}
        model={bus.model}
        releaseYear={bus.releaseYear}
        velocity={bus.velocity}
      />;
    });
  }
}

export const mapStateToProps = (
  state: IApplicationState
): IBusesPagePropsFromState => ({
  buses: state.busList.buses
});

export const BusesPage = connect<
  IBusesPagePropsFromState,
  void,
  void,
  IApplicationState
>(
  mapStateToProps,
  null
)(BusesPageComponent);
