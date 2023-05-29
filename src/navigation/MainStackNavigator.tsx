import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ASSETS
import { boldText } from '../assets/fonts';
import { dark } from '../assets/colors';

// COMPONENTS
import { ButtonIcon } from '../components';

// SCREENS
import { Filters } from '../screens';
import BottomTabNavigator from '../navigation/BottomTabNavigator';

const Stack = createNativeStackNavigator();

const MainStackNavigator: React.FC = () => {
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
                initialRouteName="HomeScreen"
                screenOptions={screenOptions}
            >
                <Stack.Screen
                    name="HomeScreen"
                    component={BottomTabNavigator}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <ButtonIcon
                                iconName="funnel-outline"
                                onPress={() => navigation.navigate('Filters')}
                            />
                        ),
                    })}
                />
                <Stack.Group screenOptions={{ presentation: 'modal' }}>
                    <Stack.Screen
                        name="Filters"
                        component={Filters}
                        options={({ navigation }) => ({
                            title: 'Filters',
                            headerRight: () => (
                                <ButtonIcon
                                    iconName="close"
                                    onPress={() => navigation.goBack()}
                                />
                            ),
                        })}
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainStackNavigator;