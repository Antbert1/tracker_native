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

  function setData(data) {
    console.log(data);
  }

  function getItems() {
    // fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
    //   .then((response) => response.json())
    //   .then((json) => setData(json))
    fetch('http://192.168.1.128:8000/answers.json/')
      .then((response) => response.json())
      .then((json) => setData(json));
  }

  function postItems() {
    var itemToPost = {
      'question': 'sleep',
      'value': 4,
    }
    fetch('http://192.168.1.128:8000/answers.json', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(itemToPost),
    });
  }

  return (
    <View style={styles.container}>
      <Question name="Cramps" />
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={() => save()} />
        <Button title="Get Items" onPress={() => getItems()} />
        <Button title="Post Items" onPress={() => postItems()} />
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
