import React, { Component } from "react";
import { TextInput, TextInputProps } from "react-native";
import { AppStyles } from "../../AppStyles";
import TextInputMask from "react-native-text-input-mask";

export interface IBusParkInputProps extends TextInputProps {
  isInputNumeric: boolean;
  mask?: string;
}

export class BusParkInput extends Component<IBusParkInputProps> {
  private textInputReference: TextInput | undefined;

  public focus() {
    this.textInputReference!.focus();
  }

  public render() {
    if (this.props.isInputNumeric) {
      return (
        <TextInputMask
          mask={this.props.mask}
          onChangeText={this.props.onChangeText}
        />
      );
    }

    return (
      <TextInput
        maxLength={this.props.maxLength}
        style={this.props.style}
        placeholderTextColor={AppStyles.Colors.textTransparent}
        selectionColor={AppStyles.Colors.white}
        keyboardAppearance={"dark"}
        ref={this.ref}
        {...this.props}
      />
    );
  }

  private ref = (input: TextInput) => {
    this.textInputReference = input;
  };
}
