import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomePage, LivePage, DiskusiPage, ProfilPage } from '../../pages';
import { Icon } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

const Tab = createMaterialBottomTabNavigator();

const TabNav = () => {
    return(
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#00BFFF"
            shifting={false}
            barStyle={{ borderTopWidth: 1, borderTopColor: '#e8e8e8', backgroundColor: 'white' }}
        >
            <Tab.Screen
                name="Home"
                component={HomePage}
                options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <Icon name='home' color={color} />
                ),
                }}
            />
            <Tab.Screen
                name="Live"
                component={LivePage}
                options={{
                tabBarLabel: 'Live',
                tabBarIcon: ({ color }) => (
                    <FontAwesomeIcon icon={ faVideo } color={color} />
                ),
                }}
            />
            <Tab.Screen
                name="Diskusi"
                component={DiskusiPage}
                options={{
                tabBarLabel: 'Diskusi',
                tabBarIcon: ({ color }) => (
                    <Icon name='comments' type="font-awesome" color={color} />
                ),
                }}
            />
            <Tab.Screen
                name="Profil"
                component={ProfilPage}
                options={{
                tabBarLabel: 'Profil',
                tabBarIcon: ({ color }) => (
                    <Icon name='user' type="font-awesome" color={color} />
                ),
                }}
            />
        </Tab.Navigator>
    );
}

export default TabNav;