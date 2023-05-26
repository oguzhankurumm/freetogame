import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles';
import { black } from '../../assets/colors';
import { Icon } from 'react-native-eva-icons';

interface ButtonIconProps {
  iconName: string;
  onPress: () => void;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={onPress}
    >
      <Icon name={iconName} fill={black} width={24} height={24} />
    </TouchableOpacity>
  );
};

export default ButtonIcon;