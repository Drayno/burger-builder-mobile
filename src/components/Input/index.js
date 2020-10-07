import React, { Component } from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import { Dimensions } from "react-native";

export default class UserInput extends Component {
  render() {
    return (
      <View style={styles.inputWrapper}>
        <Image source={this.props.source} style={styles.inlineImg} />
        <TextInput
          style={styles.input}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          autoCorrect={this.props.autoCorrect}
          autoCapitalize={this.props.autoCapitalize}
          returnKeyType={this.props.returnKeyType}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    width: DEVICE_WIDTH - 30,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: "#ffffff",
  },
  inputWrapper: {
    flex: 1,
  },
  inlineImg: {
    position: "absolute",
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
});
