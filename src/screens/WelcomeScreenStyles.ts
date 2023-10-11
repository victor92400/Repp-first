import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    contentContainer: {
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoWelcome: {
        width: 150,
        height: 150,
    },
    whitetext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 40,
    },
    whitebutton: {
        marginTop: 10,
        backgroundColor: 'white',
        padding: 20,
        width: '40%',
        borderRadius: 20,
        margin: 10,
    },
    whitebuttonText: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
  });

export default styles;
