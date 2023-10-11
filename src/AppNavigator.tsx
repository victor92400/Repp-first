// src/AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types/navigation';  // import the type
import WelcomeScreen from './screens/WelcomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import PRScreen from './screens/PRScreen';
import ProgramCreationVisual from './screens/ProgramCreationVisual'
import ProgramCreation from './screens/ProgramCreation';  // Import the new screen
import ProgramView from './screens/ProgramView'; // Import the component


const Stack = createStackNavigator<RootStackParamList>();  // use the type here

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="PR" component={PRScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ProgramCreationVisual" component={ProgramCreationVisual} />
      <Stack.Screen name="ProgramCreation" component={ProgramCreation} />
      <Stack.Screen name="ProgramView" component={ProgramView} />    
      </Stack.Navigator>
  );
}

export default AppNavigator;
