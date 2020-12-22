import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Alert } from 'react-native';
import { v5 as uuidv5 } from 'uuid';

export const createGroup = (formData, navigation, data) => async() => {
    const datas = new FormData();
    datas.append('kelas_id', data.jenjang);
    datas.append('nama', formData.group);
    datas.append('thumbnail', {
      uri: data.image.uri,
      name: uuidv5.URL,
      type: 'image/jpg'
    });

    const config = {
        method: 'POST',
        headers: {
          Authorization: data.token
        },
        body: datas
      };

    fetch('http://bta70.omindtech.id/api/grup', config)
    .then(response => response.json())
    .then(data => {
        AsyncStorage.setItem('group', JSON.stringify(data.data));
        navigation.replace('Tab');
    })
    .catch(err => { 
        Alert.alert(
            'Masukkan data dengan benar'
        );
    });
}