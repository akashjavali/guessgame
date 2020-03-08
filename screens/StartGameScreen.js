import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import colors from '../components/colors';
import Input from '../components/Input';
import Card from '../components/Card';
import NumberWrapper from '../components/NumberWrapper';

const StartGameScreen = props => {
  const [num, setNum] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNum, setSelectedNum] = useState();

  const handelNumber = inputNum => {
    setNum(inputNum.replace(/[^0-9]/g, ''));
  };

  const handelReset = () => {
    setNum('');
    setConfirmed(false);
  };

  const handelConfirm = () => {
    const chosenNumber = parseInt(num);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number!',
        'Number has to be a number between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: handelReset }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNum(chosenNumber);
    setNum('');
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summeryWrap}>
        <Text>You Selected</Text>
        <NumberWrapper>{selectedNum}</NumberWrapper>
        <Button
          title='START GAME'
          color={colors.sc}
          onPress={() => props.onStartGame(selectedNum)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.root}>
        <Text style={styles.heading}>Start a New Game</Text>
        <Card style={styles.inputWrap}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            value={num}
            onChangeText={handelNumber}
          />
          <View style={styles.btnWrap}>
            <View style={styles.button}>
              <Button title='Reset' color={colors.sc} onPress={handelReset} />
            </View>
            <View style={styles.button}>
              <Button
                title='Confirm'
                color={colors.pc}
                onPress={handelConfirm}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  heading: {
    fontSize: 20,
    marginBottom: 10
  },
  inputWrap: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    padding: 20,
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 10
  },
  btnWrap: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 10
  },
  button: {
    width: 100
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  summeryWrap: {
    marginTop: 20,
    alignItems: 'center'
  }
});

export default StartGameScreen;
