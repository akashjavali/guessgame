import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNum, setUserNum] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const newGameHandler = () => {
    setGuessRounds(0);
    setUserNum(null);
  };

  const startGameHandler = selectedNumber => {
    setUserNum(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNum && guessRounds <= 0) {
    content = <GameScreen userChoice={userNum} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        numRounds={guessRounds}
        userNum={userNum}
        newGame={newGameHandler}
        restartGame={newGameHandler}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header title='Guess The Game' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
