import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';

// Interface to specify what properties are expected in style prop
interface Style {
    container?: StyleProp<ViewStyle>;
    button?: StyleProp<ViewStyle>;
    buttonText?: StyleProp<TextStyle>;
  }

interface DropdownButtonProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  options: string[];
  style?: Style;  // Using the new Style interface
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ selectedOption, setSelectedOption, options, style }) => {
    const [modalVisible, setModalVisible] = useState(false);

return (
    <View style={[styles.container, style?.container]}>
        <TouchableOpacity
            style={[styles.button, style?.button]}
            onPress={() => setModalVisible(true)}>
            <Text style={[styles.buttonText, style?.buttonText]}>{selectedOption}</Text>
        </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {options.map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.optionButton}
                onPress={() => {
                  setSelectedOption(option);
                  setModalVisible(false);
                }}>
                <Text style={styles.modalText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

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
});
export default DropdownButton;
