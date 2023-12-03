import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../../components/Button/Button';

type IBProps = {};

export const B: React.FC<IBProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>B</Text>
      <Button onPress={() => console.log('Button B pressed')}>Button B</Button>
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
