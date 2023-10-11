import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ProgramCreationVisualProp } from '../types/navigation';
import commonStyles from './commonStyles';
import styles from './ProgramCreationVisualStyles';

type Props = {
    navigation: ProgramCreationVisualProp;
  };

const ProgramCreationVisual = ({ navigation }: Props) => {
  return (
    <ScrollView 
    style={commonStyles.container} 
    contentContainerStyle={[commonStyles.contentContainer, { justifyContent: 'center', flexGrow: 1 }]}>
      
      <View>
            <Image source={require('../assets/StreetLiftingVisual.png')} style={styles.streetvisual} />
      </View>

      <Text style={commonStyles.title}>Create your first workout</Text>

      <Text style={commonStyles.description}>Create your first workout and become a machine.</Text>

      <TouchableOpacity 
          style={[commonStyles.buttontitle]}
          onPress={() => navigation.navigate('ProgramCreation')}>
          <Text style={commonStyles.buttonText}>Create your program</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProgramCreationVisual;
