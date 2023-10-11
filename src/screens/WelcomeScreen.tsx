// src/screens/WelcomeScreen.tsx
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import styles from './WelcomeScreenStyles';


type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList,'Welcome'>;

function WelcomeScreen() {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
        <Image 
            source={require('../assets/ReppLogo.png')}
            style={styles.logoWelcome}
            resizeMode="contain"
        />
        <Text style={styles.whitetext}>
            Create custom workout routines that make you stronger
        </Text>
        <View style={styles.buttonContainer}>
        <TouchableOpacity 
            style={styles.whitebutton}
            onPress={() => navigation.navigate('Profile')}
        >
            <Text style={styles.whitebuttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.whitebutton}
            onPress={() => navigation.navigate('ProgramCreationVisual')}
        >
            <Text style={styles.whitebuttonText}>Login</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
}

export default WelcomeScreen;
