import React, { Component } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { AppStyles } from "../../AppStyles";

export interface ICardProps {
  content: JSX.Element;
}

export class Card extends Component<ICardProps> {
  public render() {
    return <View style={styles.container}>{this.props.content}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppStyles.Colors.black
  } as ViewStyle
});
