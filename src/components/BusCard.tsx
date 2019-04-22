import React, { Component } from "react";
import { Card } from "./Card";
import { View, Text, ViewStyle, StyleSheet, TextStyle } from "react-native";
import { AppStyles } from "../../AppStyles";

export interface IBusCardProps {
  brand: string;
  model: string;
  releaseYear: string;
  velocity: string;
}

export class BusCard extends Component<IBusCardProps> {
  public render() {
    return <Card content={this.getContent()} />;
  }

  private getContent = () => (
    <View style={styles.container}>
      <Text style={styles.text}>{this.props.brand}</Text>
      <Text style={styles.text}>{this.props.model}</Text>
      <Text style={styles.text}>{this.props.releaseYear}</Text>
      <Text style={styles.text}>{this.props.velocity}</Text>
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
