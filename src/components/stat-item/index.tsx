import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

type Stat = {
    fails: number;
    gameId: string;
    playTime: number;
    wins: number;
};

const StatItem: React.FC<Stat> = ({ fails, gameId, playTime, wins }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Game ID: {gameId}</Text>
            <View style={styles.statsContainer}>
                <View style={styles.statItemContainer}>
                    <Text style={styles.statItemDescription}>Play Time</Text>
                    <Text style={styles.statItemTitle}>{playTime}</Text>
                </View>
                <View style={styles.statItemContainer}>
                    <Text style={styles.statItemDescription}>Wins</Text>
                    <Text style={styles.statItemTitle}>{wins}</Text>
                </View>
                <View style={styles.statItemContainer}>
                    <Text style={styles.statItemDescription}>Fails</Text>
                    <Text style={styles.statItemTitle}>{fails}</Text>
                </View>
            </View>
        </View>
    );
};

export default StatItem;