import { Formik } from 'formik';
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { login } from '../../config/redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from './style';

const LoginPage = ({ navigation }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        AsyncStorage.getItem('user_token')
        .then((result) => {
            if(result) {
                navigation.replace('Tab')
            }
        });
    }, [])

    return(
        <View style={Styles.container}>
            <Text style={Styles.title}>Class Group</Text>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => dispatch(login(values, navigation))}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View style={Styles.containerInput}>
                        <TextInput 
                            style={Styles.input}
                            placeholder="Email"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
                        <TextInput 
                            secureTextEntry={true}
                            style={Styles.input}
                            placeholder="Password"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
                        <TouchableOpacity
                            style={Styles.buttonLogin}
                            onPress={handleSubmit}
                        >
                            <Text style={Styles.loginText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    );
}

export default LoginPage;