import React from 'react';
import { LoginPage, CreateGroupPage } from '../../pages';
import TabNav from './TabNav';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" headerMode={false}> 
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="Tab" component={TabNav}/>
                <Stack.Screen name="CreateGroupPage" component={CreateGroupPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;