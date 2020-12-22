import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    header:{
      backgroundColor: "#00BFFF",
      height: 90,
    },
    body: {
        flex: 1,
        alignItems: 'center'
    },
    buttonCreate: {
        alignSelf: 'flex-start',
        marginTop: 50,
        paddingLeft: 20
    },
    loginText: {
        textAlign: 'right',
        fontSize: 18,
        color: 'white',
    },
    title: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 20,
        color: '#9c9c9c'
    },
    containerImage: {
        marginTop: 40,
        backgroundColor: '#e8e8e8',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    inputImage: {
        padding: 30
    },
    image: {
        marginTop: 40,
        width: 150, 
        height: 150
    },
    containerInput: {
        marginTop: 10,
        width: 320
    },
    input: {
        backgroundColor: '#e8e8e8',
        borderRadius: 10,
        marginBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    picker: {
        width: 150,
        backgroundColor: '#e8e8e8',
        borderRadius: 10,
        marginBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        color: 'white'
    },
    buttonLogin: {
        alignItems: 'center',
        borderRadius: 10,
        padding: 15,
        backgroundColor: '#00BFFF',
    },
    loginText: {
        fontSize: 18,
        color: 'white'
    }
})