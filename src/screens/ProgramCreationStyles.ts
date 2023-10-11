import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      marginTop: 10,
      backgroundColor: 'black',
      padding: 15,
      width: '40%',
      borderRadius: 10,
      alignSelf: 'flex-start',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    optionButton: {
      marginBottom: 10,
    },
    scrollContainer: {
      padding: 20,
    },
    textContainer: {
      marginTop: 20,
    },
    text: {
      fontSize: 16,
      textAlign: 'center',
      padding: 10,
    },
    title: {
      fontSize: 25,
    },
  });

export default styles;
