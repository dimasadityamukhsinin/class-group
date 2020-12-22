import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Styles from './style';

const DiskusiPage = ({ navigation }) => {
    const [group, setGroup] = useState();
    
    useEffect(() => {
        AsyncStorage.getItem('user_token')
        .then((result) => {
            if(!result) {
                navigation.replace('Login')
            }
        });
        AsyncStorage.getItem('group').then((result) => setGroup(JSON.parse(result)));;
    }, [])

    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('CreateGroupPage')}
                    style={Styles.buttonCreate}
                >
                    <Text style={Styles.loginText}>Tambah Group {'>'}</Text>
                </TouchableOpacity>
            </View>
            <View style={!group ? Styles.bodyKosong : Styles.body}> 
                {
                    !group? <Text style={Styles.title}>Grup Kosong</Text> :
                    <View style={Styles.column}>
                        <View style={Styles.card}>
                            <Image source={{ uri: `http://bta70.omindtech.id/${group.thumbnail}` }} style={Styles.image} />
                            <View style={Styles.cardContent}>
                                <Text style={Styles.cardTitle}>{group.nama}</Text>
                                <Text style={Styles.content}>{group.kode}</Text>
                                <Text style={Styles.content}>{`Anggota: ${group.anggota_grup}`}</Text>
                            </View>
                        </View>
                    </View>
                }
            </View>
        </View>
    );
}

export default DiskusiPage;