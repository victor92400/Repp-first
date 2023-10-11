import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { ProfileNavigationProp } from '../types/navigation';
import DropdownButton from '../components/DropdownButton';
import styles, { profileDropdownStyles } from './ProfileScreenStyles';
import commonStyles from './commonStyles';


type Props = {
  navigation: ProfileNavigationProp;
};

function ProfileScreen({ navigation }: Props) {
  const [firstName, setFirstName] = useState('');  // Manage first name input
  const [lastName, setLastName] = useState('');    // Manage last name input
  const [gender, setGender] = useState('Male');        // Manage gender input
  const [email, setEmail] = useState('');          // Manage email input
  const [password, setPassword] = useState('');    // Manage password input

  // Check if all fields have a value (not empty)
  const allFieldsFilled = firstName && lastName && gender && email && password;

  return (
    <ScrollView 
        style={commonStyles.container} 
        contentContainerStyle={[commonStyles.contentContainer, { justifyContent: 'center', flexGrow: 1 }]}
    >

      <View style={commonStyles.logoContainer}>
            <Image source={require('../assets/R.png')} style={commonStyles.logo} />
      </View>

      <Text style={commonStyles.title}>Create a profile</Text>

      <Text style={commonStyles.description}>Take the first step to gain strength</Text>

      <View style={commonStyles.fieldContainer}>
          <Text style={commonStyles.label}>First Name</Text>
          <TextInput 
              style={commonStyles.input} 
              placeholder="Enter your first name"
              onChangeText={setFirstName}  // Update state when text changes
          />
      </View>

      <View style={commonStyles.fieldContainer}>
          <Text style={commonStyles.label}>Last Name</Text>
          <TextInput 
              style={commonStyles.input} 
              placeholder="Enter your last name"
              onChangeText={setLastName}    // Update state when text changes
          />
      </View>

      <View style={commonStyles.fieldContainer}>
        <Text style={commonStyles.label}>Gender</Text>
        <DropdownButton
            selectedOption={gender}
            setSelectedOption={setGender}
            options={['Male', 'Female']}
            style={profileDropdownStyles}
        />
      </View>

      <View style={commonStyles.fieldContainer}>
          <Text style={commonStyles.label}>Email</Text>
          <TextInput 
              style={commonStyles.input} 
              placeholder="Enter your email" 
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={setEmail}       // Update state when text changes
          />
      </View>

      <View style={commonStyles.fieldContainer}>
          <Text style={commonStyles.label}>Password</Text>
          <TextInput 
              style={commonStyles.input} 
              placeholder="Enter your password" 
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={setPassword}    // Update state when text changes
          />
      </View>

      <TouchableOpacity 
          style={[commonStyles.buttontitle, !allFieldsFilled && commonStyles.buttonDisabled]}
          onPress={() => navigation.navigate('PR')}
          disabled={!allFieldsFilled}   // Disable button if not all fields are filled
      >
          <Text style={commonStyles.buttonText}>Next Step</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
export default ProfileScreen;
