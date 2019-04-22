import { Component } from "react";
import { View } from "react-native";
import { BusParkButton } from "../components/BusParkButton";
import { Actions } from "react-native-router-flux";
import { getTheComponentName } from "../../getTheComponentName";
import { AddTheBusPage } from "./AddTheBusPage";
import { AddTheDriverPage } from "./AddTheDriverPage";
import { BusesPage } from "./BusesPage";
import { DriversPage } from "./DriversPage";

export class MainPage extends Component {
  public render() {
    return (
      <View>
        <BusParkButton
          title={"Add a new bus"}
          onPress={this.onAddANewBusPress}
        />
        <BusParkButton
          title={"Add a bus driver"}
          onPress={this.onAddDriverPress}
        />
        <BusParkButton
          title={"Open Buses list"}
          onPress={this.onOpenBusesList}
        />
        <BusParkButton
          title={"Open Drivers List"}
          onPress={this.onOpenDriversList}
        />
      </View>
    );
  }

  private onAddANewBusPress = () => {
    Actions.push(getTheComponentName({ AddTheBusPage }));
  };

  private onAddDriverPress = () => {
    Actions.push(getTheComponentName({ AddTheDriverPage }));
  };

  private onOpenBusesList = () => {
    Actions.push(getTheComponentName({ BusesPage }));
  };

  private onOpenDriversList = () => {
    Actions.push(getTheComponentName({ DriversPage }));
  };
}
