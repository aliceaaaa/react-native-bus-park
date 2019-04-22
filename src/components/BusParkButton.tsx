import { Component } from "react";
import { Button, StyleSheet, ViewStyle } from "react-native";
import { AppStyles } from "../../AppStyles";

export interface IBusParkButtonProps {
  isDisabled?: boolean;
  title: string;
  onPress(): void;
}

export class BusParkButton extends Component<IBusParkButtonProps> {
  render() {
    return (
      <Button
        color={AppStyles.Colors.lightBlue}
        onPress={this.props.onPress}
        title={this.getTitle()}
        disabled={this.props.isDisabled}
      />
    );
  }

  private getTitle = (): string =>
    this.props.isDisabled ? "" : this.props.title;
}
