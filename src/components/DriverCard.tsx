import React, { Component } from "react";
import { Card } from "./Card";
import { View, Text, ViewStyle, StyleSheet, TextStyle } from "react-native";
import { AppStyles } from "../../AppStyles";

export interface IDriverCardProps {
  name: string;
  dateOfBirth: string;
}

export class DriverCard extends Component<IDriverCardProps> {
  public render() {
    return <Card content={this.getContent()} />;
  }

  private getContent = () => (
    <View style={styles.container}>
      <Text style={styles.text}>{this.props.name}</Text>
      <Text style={styles.text}>{this.props.dateOfBirth}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12
  } as ViewStyle,
  text: {
    marginTop: 4,
    color: AppStyles.Colors.white,
    fontWeight: "bold",
    fontSize: 12
  } as TextStyle
});
