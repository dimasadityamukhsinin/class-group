import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    containerInput: {
        marginTop: 30,
        width: 280
    },
    title: {
        fontSize: 35
    },
    input: {
        backgroundColor:'white',
        borderWidth: 1,
        borderColor: '#dbdbdb',
        borderRadius: 50,
        marginBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonLogin: {
        alignItems: 'center',
        borderRadius: 50,
        padding: 15,
        backgroundColor: '#00BFFF',
    },
    loginText: {
        fontSize: 18,
        color: 'white'
    }
})