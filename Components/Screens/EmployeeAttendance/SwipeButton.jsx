// SwipeButton.js
import React from 'react';
import { View, Text, StyleSheet, Animated, PanResponder } from 'react-native';

const SwipeButton = ({ onSwipe, checkin }) => {
  const pan = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [null, { dx: pan.x }],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: (e, { dx }) => {
      if (dx > 100) { // Swipe threshold
        onSwipe();
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      } else {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      }
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.button, { transform: pan.getTranslateTransform() }]}
        {...panResponder.panHandlers}
      >
        <Text style={styles.buttonText}>{checkin}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    width: 180,
    height: 80,
    backgroundColor: '#00224D',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
    borderRadius: 60,
    borderWidth: 9,
    
    borderColor: "white",
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "500",
  },
});

export default SwipeButton;
