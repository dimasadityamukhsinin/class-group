import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Styles from './style';

const LivePage = ({ navigation }) => {   

    useEffect(() => {
        AsyncStorage.getItem('user_token')
        .then((result) => {
            if(!result) {
                navigation.replace('Login')
            }
        });
    }, [])
     
    return (
        <View style={Styles.container}>
            <Text>Live Page</Text>
        </View>
    );
}

export default LivePage;