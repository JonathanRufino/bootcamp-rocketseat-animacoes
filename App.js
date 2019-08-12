import React, { Component } from "react";
import { StyleSheet, View, Animated } from "react-native";

const ballY = new Animated.Value(0);
// divide, multiply, subtract, add
const ballX = Animated.divide(ballY, 2);

class App extends Component {
  state = {
    ballY: ballY,
    ballX: ballX,
  };

  componentDidMount() {
    const { ballY } = this.state;

    Animated.decay(ballY, {
      velocity: 0.5,
    }).start();
  }

  render() {
    const { ballY, ballX } = this.state;

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
