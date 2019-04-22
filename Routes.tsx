import { Router, Scene } from "react-native-router-flux";
import { Component } from "react";
import { AddTheBusPage } from "./src/pages/AddTheBusPage";
import { LoadingPage } from "./src/pages/LoadingPage";
import { AddTheDriverPage } from "./src/pages/AddTheDriverPage";
import { MainPage } from "./src/pages/MainPage";
import { BusesPage } from "./src/pages/BusesPage";
import { DriversPage } from "./src/pages/DriversPage";
import { getTheComponentName } from "./getTheComponentName";

class Routes extends Component {
  public render() {
    return (
      <Router>
        <Scene key={"root"} hideNavBar initial>
          <Scene
            key={getTheComponentName({ LoadingPage })}
            component={LoadingPage}
            hideNavBar
            initial
          />
          <Scene key={"main"}>
            <Scene
              key={getTheComponentName({ MainPage })}
              component={MainPage}
              hideNavBar
              initial
            />
            <Scene
              key={getTheComponentName({ AddTheBusPage })}
              component={AddTheBusPage}
              hideNavBar
            />
            <Scene
              key={getTheComponentName({ AddTheDriverPage })}
              component={AddTheDriverPage}
              hideNavBar
            />
            <Scene
              key={getTheComponentName({ BusesPage })}
              component={BusesPage}
              hideNavBar
            />
            <Scene
              key={getTheComponentName({ DriversPage })}
              component={DriversPage}
              hideNavBar
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}
