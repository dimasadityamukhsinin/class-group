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
    bodyKosong: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        flex: 1
    },
    buttonCreate: {
        alignSelf: 'flex-end',
        marginTop: 50,
        paddingRight: 20
    },
    loginText: {
        textAlign: 'right',
        fontSize: 18,
        color: 'white',
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        color: '#bdbdbd'
    },
    card: {
        padding: 15,
        margin: 10, 
        display: 'flex', 
        flexDirection: 'row', 
        borderWidth: 1, 
        borderRadius: 1, 
        borderColor: '#d9d9d9', 
        borderRadius: 10
    },
    cardContent: {
        marginLeft: 5,
        flexDirection: 'column',
        padding: 5
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    image: {
        width: 100, 
        height: 100
    },
    column: {
        flexDirection: 'column'
    },
    content: {
        marginTop: 2
    }
})