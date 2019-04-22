import React, { Component } from "react";
import { View, ViewStyle, ActivityIndicator } from "react-native";
import { AppStyles } from "../../AppStyles";

export class LoadingPage extends Component {
  public render() {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = {
  activityIndicatorContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppStyles.Colors.black,
    flex: 1
  } as ViewStyle
};
