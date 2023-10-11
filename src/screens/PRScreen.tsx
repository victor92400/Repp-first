// src/screens/PRScreen.tsx
import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { PRNavigationProp } from '../types/navigation';  // Import the type
import styles from './PRScreenStyles';
import commonStyles from './commonStyles';

type Props = {
  navigation: PRNavigationProp;
};

function PRScreen({ navigation }: Props) {
  const [values, setValues] = useState({
    muscleUp: '',
    pullUp: '',
    dips: '',
    squat: '',
  });

  function mapLabelToKey(label: string): keyof typeof values {
    switch(label) {
      case 'PR Muscle Up': return 'muscleUp';
      case 'PR Pull Up/Chin Up': return 'pullUp';
      case 'PR Dips': return 'dips';
      case 'PR Squat': return 'squat';
      default: throw new Error('Invalid label');
    }
  }

  const handleInputChange = (name: keyof typeof values, value: string) => {
    setValues({ ...values, [name]: value });
  };

  const allFieldsFilled = Object.values(values).every(value => value !== '');

  return (
    <ScrollView 
        style={commonStyles.container} 
        contentContainerStyle={[commonStyles.contentContainer, { justifyContent: 'center', flexGrow: 1 }]}
        >

      <View style={commonStyles.logoContainer}>
            <Image source={require('../assets/R.png')} style={commonStyles.logo} />
      </View>

      <Text style={commonStyles.title}>Create an account</Text>

      <Text style={commonStyles.description}>Tell us about your PRs. {'\n'} This information is important as your program will be calculated via % of your 1RM.</Text>
      
      {['PR Muscle Up', 'PR Pull Up/Chin Up', 'PR Dips', 'PR Squat'].map((label, index) => (
        <View key={index} style={commonStyles.fieldContainer}>
          <Text style={commonStyles.label}>{label}</Text>
          <TextInput
            style={commonStyles.input}
            keyboardType="numeric"
            placeholder="kg"
            value={values[mapLabelToKey(label)]}
            onChangeText={(value) => handleInputChange(mapLabelToKey(label), value)}
          />
        </View>
      ))}
      <TouchableOpacity 
          style={[commonStyles.buttontitle, !allFieldsFilled && commonStyles.buttonDisabled]}
          onPress={() => navigation.navigate('ProgramCreationVisual')}
          disabled={!allFieldsFilled}   // Disable button if not all fields are filled
      >
          <Text style={commonStyles.buttonText}>Validate</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default PRScreen;
