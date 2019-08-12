import React, { Component } from "react";
import { StyleSheet, View, Animated } from "react-native";

class App extends Component {
  state = {
    ballX: new Animated.Value(0),
    ballY: new Animated.Value(0),
  };

  componentDidMount() {
    const { ballX, ballY } = this.state;

    Animated.loop(
      Animated.sequence([
        Animated.timing(ballY, {
          toValue: 200,
          duration: 500,
        }),

        Animated.delay(200),

        Animated.timing(ballX, {
          toValue: 200,
          duration: 500,
        }),

        Animated.delay(200),

        Animated.timing(ballY, {
          toValue: 0,
          duration: 500,
        }),

        Animated.delay(200),

        Animated.timing(ballX, {
          toValue: 0,
          duration: 500,
        }),

        Animated.delay(200)
      ]),
      {
        iterations: 2,
      }
    ).start();
  }

  render() {
    const { ballX, ballY } = this.state;

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.ball, { top: ballY, left: ballX }]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },

  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#f00",
  },
});

export default App;
