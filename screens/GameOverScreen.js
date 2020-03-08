import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = ({ numRounds, userNum, restartGame }) => {
  return (
    <View style={styles.root}>
      <Text>The Game is Over!</Text>
      <Text>Number of Rounds: {numRounds}</Text>
      <Text>Number was {userNum}</Text>
      <Button title='NEW GAME' onPress={restartGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default GameOverScreen;
