import React from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from '../components/Logo';
import styles from './LoadingScreenStyles';


const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Logo/>
    </View>
  );
};

export default LoadingScreen;
