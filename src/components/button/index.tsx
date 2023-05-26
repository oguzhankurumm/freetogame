import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  absolute?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, absolute }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.container, absolute && styles.absolute]}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;