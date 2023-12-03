import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../../components/Button/Button';

type IAProps = {};

export const A: React.FC<IAProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>A</Text>
      <Button onPress={() => console.log('Button A pressed')}>Button A</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontSize: 20,
  },
});
