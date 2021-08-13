import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Switch, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Question from './Question';
import { setCurrentAnswerState, setPeriodEnabled, setShowButton } from '../redux/indexActions';

const QuestionList = () => {
  const answers = useSelector(state => state).dataReducer.currentAnswerState;
  const showButton = useSelector(state => state).dataReducer.showButton;
  const dispatch = useDispatch();
  const [periodEnabled, setPeriod] = useState(false);
  const [showTick, setShowTick] = useState(false);
  const toggleSwitch = () => {
    dispatch(setPeriodEnabled(!periodEnabled));
    setPeriod(previousState => !previousState);
  }

  // function save() {
  //   console.log(answers);
  // }

  function setData(data) {
    let activeCheck = true;
    if (data.length > 0) {
      let newData = [...questions];
      data.forEach(function (item, i) {
        if (item.value == null) {
          activeCheck = false;
        }
        newData[i].value = item.value;
      });
      dispatch(setCurrentAnswerState(newData));
      dispatch(setShowButton(activeCheck));
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
    let itemToPost = [...answers];
    itemToPost.forEach(function (v) {
      v.date = formattedToday;
      delete v.subtext;
      if (periodEnabled) {
        v.period = true;
      }
    });
    // var itemToPost = [
    //   {
    //     'question': 'sleep',
    //     'date': formattedToday,
    //     'value': 5,
    //   },
    //   {
    //     'question': 'skin',
    //     'date': formattedToday,
    //     'value': 1,
    //   }
    // ]
    fetch('http://192.168.1.128:8000/answers.json', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(itemToPost),
    }).then(response => response.json())
    setShowTick(previousState => !previousState)
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
    { question: 'Period', subtext: '1 for light, 5 for heavy', value: -1 },
    { question: 'Cramps', subtext: defaultText, value: null },
    { question: 'Boobs', subtext: '1 for normal, 5 for huge', value: null },
    { question: 'Sex Drive', subtext: '1 for bad, 5 for good', value: null },
    { question: 'Sweating', subtext: defaultText, value: null },
    { question: 'Mood', subtext: defaultText, value: null },
    { question: 'Anxiety', subtext: defaultText, value: null },
    { question: 'Appetite', subtext: '1 for bad, 5 for good', value: null },
    { question: 'Headache', subtext: defaultText, value: null },
    { question: 'Acne', subtext: defaultText, value: null },
    { question: 'Temperature', subtext: defaultText, value: null },
    { question: 'Sleep', subtext: defaultText, value: null },
    { question: 'Nightmares', subtext: defaultText, value: null },
    { question: 'Ovulation Guess', subtext: '1 for definitely not, 5 for definitely', value: null }
  ]);

  const Questions = () => {
    return questions.map((question, index) => {
      return (
        <Question question={question.question} subtext={question.subtext} value={question.value} key={index} index={index} />
      );
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>
        {nowDate.toDateString()}
      </Text>
      <View style={styles.periodCheck}>
        <Text style={styles.periodHeader}>
          Period
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={periodEnabled ? '#4289ff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={periodEnabled}
        />
      </View>
      {/* {periodEnabled &&
        <Question question={'Period'} subtext={'1 for light, 5 for heavy'} value={2} index={0} />
      } */}

      <Questions />
      <View style={styles.buttonContainer}>
        {showButton ?
          <View>
            <TouchableOpacity onPress={() => postItems()}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>SAVE</Text>
              </View>
            </TouchableOpacity>
            {showTick &&
              <View style={styles.doneTick}>
                <Text>Done</Text>
              </View>
            }
          </View>
          :
          <TouchableOpacity disabled={true}>
            <View style={[styles.button, styles.disabledButton]}>
              <Text style={styles.buttonText}>SAVE</Text>
            </View>
          </TouchableOpacity>
        }

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
  periodCheck: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  periodHeader: {
    fontSize: 16,
  },
  doneTick: {
    alignItems: 'center',
    paddingBottom: 20,
  }
});

export default QuestionList;
