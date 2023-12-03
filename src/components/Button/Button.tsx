import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type IButtonProps = {
  // Props
  children: React.ReactNode;
  onPress: () => void;
  style?: object;
  textStyle?: object;
  disabled?: boolean;
};
export const Button: React.FC<IButtonProps> = ({
  // Props
  children,
  onPress,
  style,
  textStyle,
  disabled,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      disabled={disabled}
      {...props}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
