import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ASSETS
import { boldText } from '../assets/fonts';
import { dark } from '../assets/colors';

// SCREENS
import HomeScreen from '../screens/Home';
import FilterScreen from '../screens/Filters';
import ButtonIcon from '../components/button-icon';

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC = () => {
    const screenOptions = {
        title: 'FreeToGame',
        headerTintColor: dark,
        headerTitleStyle: {
            fontFamily: boldText,
            fontSize: 16,
            lineHeight: 19,
        },
    };

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={screenOptions}
            >
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={({ navigation }) => ({
                        headerRight: () => <ButtonIcon iconName='funnel-outline' onPress={() => navigation.navigate('Filters')} />
                    })}
                />
                <Stack.Group screenOptions={{ presentation: 'modal' }}>
                    <Stack.Screen
                        name='Filters'
                        component={FilterScreen}
                        options={({ navigation }) => ({
                            title: 'Filters',
                            headerRight: () => <ButtonIcon iconName='close' onPress={() => navigation.goBack()} />
                        })}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;