import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { primary } from '../../assets/colors';
import Checkmark from 'react-native-eva-icons/icons/Checkmark';

interface SortOption {
    label: string;
    value: string;
}

interface FilterSortItemProps {
    title: string;
    options: SortOption[];
    selectedOption: string;
    handleOptionPress: (value: string) => void;
}

const FilterSortItem: React.FC<FilterSortItemProps> = ({
    title,
    options,
    selectedOption,
    handleOptionPress,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={0.5}
                    style={styles.optionContainer}
                    onPress={() => handleOptionPress(option.value)}
                >
                    <Text style={styles.optionText}>{option.label}</Text>
                    {String(selectedOption).split(':')[1] === String(option.value) &&
                        <Checkmark
                            width={20}
                            height={20}
                            fill={primary}
                        />
                    }
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default FilterSortItem;