import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Question from './Question';
import { setCurrentAnswerState } from '../redux/indexActions';

const QuestionList = () => {
  const answers = useSelector(state => state);
  const dispatch = useDispatch();
  function save() {
    console.log(answers);
  }

  function setData(data) {
    if (data.length > 0) {
      let newData = [...questions];
      data.forEach(function (item, i) {
        newData[i].value = item.value;
      });
      dispatch(setCurrentAnswerState(newData));
      setQuestions(newData);
    }
  }

  // function getItems() {
  //   // fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
  //   //   .then((response) => response.json())
  //   //   .then((json) => setData(json))
  //   fetch('http://192.168.1.128:8000/answers.json/')
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // }

  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  function postItems() {
    var today = new Date();
    let formattedToday = formatDate(today);
    var itemToPost = [
      {
        'question': 'sleep',
        'date': formattedToday,
        'value': 5,
      },
      {
        'question': 'skin',
        'date': formattedToday,
        'value': 1,
      }
    ]
    fetch('http://192.168.1.128:8000/answers.json', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(itemToPost),
    });
  }
  const defaultText = '1 for fine/nothing, 5 for worst';
  var nowDate = new Date();

  useEffect(() => {
    let date = new Date();
    let dateToUse = formatDate(date);
    fetch('http://192.168.1.128:8000/answers/?date=' + dateToUse)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const [questions, setQuestions] = useState([
    { name: 'Cramps', subtext: defaultText, value: null },
    { name: 'Boobs', subtext: '1 for normal, 5 for huge', value: null },
    { name: 'Sex Drive', subtext: '1 for bad, 5 for good', value: null },
    { name: 'Sweating', subtext: defaultText, value: null },
    { name: 'Mood', subtext: defaultText, value: null },
    { name: 'Anxiety', subtext: defaultText, value: null },
    { name: 'Appetite', subtext: '1 for bad, 5 for good', value: null },
    { name: 'Headache', subtext: defaultText, value: null },
    { name: 'Acne', subtext: defaultText, value: null },
    { name: 'Temperature', subtext: defaultText, value: null },
    { name: 'Sleep', subtext: defaultText, value: null },
    { name: 'Nightmares', subtext: defaultText, value: null },
    { name: 'Ovulation Guess', subtext: '1 for definitely not, 5 for definitely', value: null },
  ]);

  const Questions = () => {
    return questions.map((question, index) => {
      return (
        <Question name={question.name} subtext={question.subtext} value={question.value} key={index} index={index} />
      );
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>
        {nowDate.toDateString()}
      </Text>
      {/* <Question name={"TEST"} subtext={questions[0].subtext} value={questions[0].value} /> */}
      <Questions />
      <View style={styles.buttonContainer}>
        <TouchableOpacity disabled={true}>
          <View style={[styles.button, styles.disabledButton]}>
            <Text style={styles.buttonText}>SAVE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => save()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>SAVE</Text>
          </View>
        </TouchableOpacity>
        <Button title="Save" onPress={() => save()} />
        {/* <Button title="Get Items" onPress={() => getItems()} /> */}
        {/* <Button title="Post Items" onPress={() => postItems()} /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0DAB83',
    width: 100,
    padding: 10,
    alignItems: 'center',
    margin: 20,
  },
  disabledButton: {
    backgroundColor: '#C8FAD9',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
});

export default QuestionList;
