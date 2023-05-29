import React, { useState } from 'react';
import { View, FlatList, TextInput, Alert } from 'react-native';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { ListHeader, StatItem, Button } from '../../components';
import { groupMissionsByGameId } from '../../utils/groupMissions';
import missions from '../../data/stats.json';
import { sendEmail } from '../../utils/sendEmail';
import { dark } from '../../assets/colors';

const Stats: React.FC = () => {
    const [email, setEmail] = useState('');

    const sendEmailHandler = async () => {
        if (!email) return Alert.alert('Please enter your email');

        const response = await sendEmail(email);
        if (response) return Alert.alert('Success', 'Email sent successfully. Please check your inbox.');
        return Alert.alert('Error', 'Failed to send email');
    };


    return (
        <KeyboardAwareScrollView nestedScrollEnabled style={styles.keyboard}>
            <View style={styles.container}>
                <FlatList
                    data={groupMissionsByGameId(missions)}
                    keyExtractor={(item) => item.gameId}
                    ListHeaderComponent={() => <ListHeader title="Your Stats" subtitle="Learn your stats by gameId" />}
                    ListHeaderComponentStyle={styles.listHeader}
                    ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <StatItem
                            gameId={item.gameId}
                            playTime={item.playTime}
                            wins={item.wins}
                            fails={item.fails}
                        />
                    )}
                />
                <View style={styles.footerContainer}>
                    <TextInput
                        style={styles.emailInput}
                        placeholder="Enter your email"
                        placeholderTextColor={dark}
                        value={email}
                        autoCapitalize='none'
                        onChangeText={text => setEmail(text)}
                        keyboardType='email-address'
                        returnKeyType='done'
                    />
                    <Button
                        title="Send Email"
                        onPress={sendEmailHandler}
                        marginTop={8}
                    />
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default Stats;