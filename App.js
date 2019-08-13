import React, { Component } from 'react';
import { StyleSheet, View, Animated, PanResponder } from 'react-native';

class App extends Component {
  state = {
    ball: new Animated.ValueXY({ x: 0, y: 0 })
  };

  UNSAFE_componentWillMount() {
    const { ball } = this.state;

    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (e, gestureState) => true,

      onPanResponderGrant: (e, gestureState) => {
        ball.setOffset({
          x: ball.x._value,
          y: ball.y._value
        });

        ball.setValue({ x: 0, y: 0 });
      },

      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: ball.x,
            dy: ball.y,
          }
        ],
        {
          listener: (e, gestureState) => {
            console.log(gestureState);;
          },
        }
      ),

      onPanResponderRelease: () => {
        ball.flattenOffset();
      },
    });
  }

  render() {
    const { ball } = this.state;

    return (
      <View style={styles.container}>
        <Animated.View
          {...this._panResponder.panHandlers}
          style={[
            styles.ball,
            {
              transform: [
                {
                  translateX: ball.x
                },
                {
                  translateY: ball.y
                }
              ]
            },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },

  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#f00'
  }
});

export default App;
