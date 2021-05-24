import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Colors from "../constants/colors";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={style.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={style.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          fadeDuration={1000}
          //   source={{
          //     uri: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Borah_Peak_ID_2-22-15.JPG",
          //   }}
          style={style.image}
          resizeMode="cover"
        />
      </View>
      <View style={style.resultContainer}>
        <BodyText style={style.resultText}>
          Your phone needed{" "}
          <Text style={style.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={style.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>

      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};
const style = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    margin: 30,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default GameOverScreen;
