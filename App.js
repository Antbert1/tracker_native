import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QuestionList from './src/components/QuestionList';

const App = () => {
  return (
    <View style={styles.container}>
      <QuestionList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
