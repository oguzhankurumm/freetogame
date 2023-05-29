import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  marginTop?: number;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, marginTop }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.container, { marginTop }]}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;