import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {A} from './src/views/modules/A/A';
import {B} from './src/views/modules/B/B';

type IAProps = {};
export const App: React.FC<IAProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>App</Text>
      <A />
      <B />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontSize: 20,
  },
});

export default App;
