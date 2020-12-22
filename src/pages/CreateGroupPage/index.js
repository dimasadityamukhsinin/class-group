import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Styles from './style';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import * as ImagePicker from 'expo-image-picker';
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';
import { createGroup } from '../../config/redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

const CreateGroup = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [jenjang, setJenjang] = useState('0');
    const [token, setToken] = useState('');
    const dispatch = useDispatch();
    
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage({
                uri: result.uri,
                type: result.type,
                name: 'test.jpg'
            });
        }
    };
    
    let data = {
        token: token, 
        image: image,
        jenjang: jenjang
    }

    useEffect(() => {
        AsyncStorage.getItem('user_token').then((result) => setToken(result));
    }, [])
    
    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                    style={Styles.buttonCreate}
                >
                    <Text style={Styles.loginText}>{'<'} Buat Group</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.body}> 
                <Formik
                    initialValues={{ group: '' }}
                    onSubmit={values => !image ? Alert.alert('Silahkan input gambar!') : dispatch(createGroup(values, navigation, data))}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <>
                            {image ? 
                                <Image source={{ uri: image.uri }} style={Styles.image} /> : 
                                <View style={Styles.containerImage}>
                                    <TouchableOpacity
                                        onPress={pickImage}
                                        style={Styles.inputImage}
                                    >
                                        <FontAwesomeIcon icon={ faVideo } color="#808080" size={32}/>
                                    </TouchableOpacity>
                                </View>
                            }
                            <Text style={Styles.title}>Tambahkan Foto Group</Text>
                            <View style={Styles.containerInput}>
                                <TextInput 
                                    style={Styles.input}
                                    placeholder="Nama Group"
                                    onChangeText={handleChange('group')}
                                    onBlur={handleBlur('group')}
                                    value={values.group}
                                />
                                <View style={Styles.picker}>
                                    <Picker
                                        style={{ color: '#949494' }}
                                        selectedValue={jenjang}
                                        onValueChange={(itemValue) => setJenjang(itemValue)}
                                    >
                                        <Picker.Item label='Jenjang' value='0' />
                                        <Picker.Item label="1" value="1" />
                                        <Picker.Item label="2" value="2" />
                                        <Picker.Item label="3" value="3" />
                                    </Picker>
                                </View>
                                <TouchableOpacity
                                    style={Styles.buttonLogin}
                                    onPress={handleSubmit}
                                >
                                    <Text style={Styles.loginText}>Buat Group</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )}
                </Formik>
            </View>
        </View>
    );
}

export default CreateGroup;