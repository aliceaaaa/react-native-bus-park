import React, { Component } from "react";
import { applyMiddleware, createStore, Store } from "redux";
import { ApplicationReducer } from "./src/redux/ApplicationReducer";
import sagaMiddlewareFactory from "redux-saga";
import SplashScreen from "react-native-splash-screen";
import { IApplicationState } from "./src/redux/IApplicationState";
import { MainPage } from "./src/pages/MainPage";
import { Provider } from "react-redux";
import { rootSaga } from "./src/redux/rootSaga";

export interface IAppComponentState {
  store: Store<IApplicationState>;
}

export class App extends Component<{}, IAppComponentState> {
  public constructor(props: {}) {
    super(props);

    const sagas = sagaMiddlewareFactory();

    const store = createStore(ApplicationReducer, applyMiddleware(sagas));

    sagas.run(rootSaga);

    this.state = {
      store
    };
  }

  public componentDidMount() {
    SplashScreen.hide();
  }

  public render() {
    return (
      <Provider store={this.state.store}>
        <MainPage />
      </Provider>
    );
  }
}
