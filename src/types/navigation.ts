import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Welcome: undefined;
  PR: undefined;
  Profile: undefined;
  ProgramCreationVisual: undefined;
  ProgramCreation: undefined;
  ProgramView: undefined;
};

// Create navigation prop types for each screen
export type PRNavigationProp = StackNavigationProp<RootStackParamList, 'PR'>;
export type ProfileNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;
export type ProgramCreationVisualProp = StackNavigationProp<RootStackParamList, 'ProgramCreationVisual'>;
export type ProgramCreationNavigationProp = StackNavigationProp<RootStackParamList, 'ProgramCreation'>;
export type ProgramViewNavigationProp = StackNavigationProp<RootStackParamList, 'ProgramView'>;

