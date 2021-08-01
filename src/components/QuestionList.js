import React from 'react';
import { useSelector } from 'react-redux'
import { Button, StyleSheet, Text, View } from 'react-native';
import Question from './Question';

const QuestionList = () => {
  const answers = useSelector(state => state);

  function save() {
    debugger;
    console.log(answers);
  }

  return (
    <View style={styles.container}>
      <Question name="Cramps" />
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={() => save()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
  }
});

export default QuestionList;
