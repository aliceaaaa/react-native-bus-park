import React, { Component } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import { BusParkButton } from "./BusParkButton";
import { AppStyles } from "../../AppStyles";

export interface IErrorDialogProps {
  isVisible: boolean;
  text: string;
}

export class DialogWithOkButton extends Component<IErrorDialogProps> {
  public render() {
    return (
      <Modal animationType="fade" visible={this.props.isVisible} transparent>
        <View style={styles.background}>
          <View style={styles.container}>
            <Text style={styles.text}>{this.props.text}</Text>
            <BusParkButton onPress={this.onPress} title="OK" />
          </View>
        </View>
      </Modal>
    );
  }

  private onPress = () => {
    this.props.onErrorDialogHide();
  };
}

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 24,
    marginVertical: 24,
    textAlign: "center"
  },
  container: {
    backgroundColor: AppStyles.Colors.black,
    justifyContent: "center",
    alignItems: "stretch",
    marginHorizontal: 32
  },
  background: {
    flex: 1,
    justifyContent: "center"
  }
});
