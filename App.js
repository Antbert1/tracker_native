import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/redux/store';
import { StyleSheet, Text, View } from 'react-native';
import QuestionList from './src/components/QuestionList';

const App = () => {

  return (
    <StoreProvider store={store}>
      <View style={styles.container}>
        <QuestionList />
      </View>
    </StoreProvider>
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
