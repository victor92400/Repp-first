// src/App.tsx
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from './screens/LoadingScreen';
import AppNavigator from './AppNavigator';  // Import AppNavigator

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      {loading ? <LoadingScreen /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export default App;
