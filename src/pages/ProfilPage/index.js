import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import Styles from './style';

const ProfilPage = ({ navigation }) => {
    const [user, setUser] = useState('');

    const logout = () => {
        AsyncStorage.clear();
        navigation.replace('Login')
    }

    useEffect(() => {
        AsyncStorage.getItem('user')
        .then((result) => setUser(JSON.parse(result)));
    }, []);

    return (
        <View style={Styles.container}>
            <View style={Styles.header}/>
            <Image style={Styles.avatar}
                source={{
                uri: `http://bta70.omindtech.id/${user.foto}`,
                }}
            />
            <View style={Styles.body}>
                <View style={Styles.bodyContent}>
                    <Text style={Styles.name}>{user.nama}</Text>
                    <Text style={Styles.info}>{user.lokasi_mengajar}</Text>
                    <View style={{ width: 200, height: 55, marginTop: 15 }}>
                        <TouchableOpacity
                            style={Styles.button}
                            onPress={logout}
                        >
                            <Text style={Styles.buttonText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ProfilPage;