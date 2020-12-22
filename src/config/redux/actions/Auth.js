import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Alert } from 'react-native';

export const login = (formData, navigation) => async() => {
    axios.post('http://bta70.omindtech.id/api/tentor/login', formData)
    .then(res=> {
        AsyncStorage.setItem('user_token', res.data.data.token_access);
        AsyncStorage.setItem('user', JSON.stringify(res.data.data.user));
        navigation.replace('Tab');
    })
    .catch(()=>{
        Alert.alert(
            'Email atau password salah'
        );
    })

}

export const logout = (history) => async () => {
    localStorage.removeItem("menagerie");
    localStorage.removeItem("admin");
    history.push("/");
};