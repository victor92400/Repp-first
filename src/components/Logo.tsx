// src/components/Logo.tsx
import React, { useEffect, useRef } from 'react';
import { Image, Animated } from 'react-native';

function Logo() {
  const fadeAnim = useRef(new Animated.Value(0)).current;  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.Image
      source={require('../assets/ReppLogo.png')}
      style={{ 
        width: '70%',
        height: 150, 
        opacity: fadeAnim,
      }}
      resizeMode="contain"
    />
  );
}

export default Logo;
