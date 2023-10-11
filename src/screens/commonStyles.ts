import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        marginTop: 20, 
      },
      logo: {
        width: 20, 
        height: 20, 
      },
      title: {
        fontSize: 24, 
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
        fontWeight: 'bold',
      },
      description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
        color: '#666',
      },
      buttontitle: {
        marginTop: 10,
        backgroundColor: 'black',
        padding: 20,
        width: '55%',
        borderRadius: 30,
        alignSelf: 'center',
        alignItems: 'center',
      },
      buttonDisabled: {
        opacity: 0.5,
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
      
      label: {
        marginBottom: 7,
        fontSize: 16,
        fontWeight: 'bold',
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        textAlign: 'left',
        paddingLeft: 15,
        width: '100%',
      },
      container: {
        flex: 1,
      },
      fieldContainer: {
        width: '80%',
        marginBottom: 20,
      },
      contentContainer: {
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default commonStyles;
