import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Modal} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import styles from './ProgramCreationStyles';

type Day = {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
};

interface DropdownButtonProps {
  selectedExercise: string;
  setSelectedExercise: (exercise: string) => void;
}

function DropdownButton({ selectedExercise, setSelectedExercise }: DropdownButtonProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const exercises = ['Muscle Up', 'Pull Up/Chin Up', 'Dip', 'Squat'];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>{selectedExercise}</Text>
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
            {exercises.map((exercise) => (
              <TouchableOpacity
                key={exercise}
                style={styles.optionButton}
                onPress={() => {
                  setSelectedExercise(exercise);
                  setModalVisible(false);
                }}>
                <Text style={styles.modalText}>{exercise}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
}

function ProgramCreation() {
  const navigation = useNavigation();
  const [selectedDay, setSelectedDay] = useState<Day | null>(null);
  const [savedDates, setSavedDates] = useState<{ [key: string]: { selected: true, selectedColor: string } }>({});
  const [selectedExercise, setSelectedExercise] = useState('Add Exercise');


  const onDayPress = (day: Day) => {
    setSelectedDay(day);
  };

  useEffect(() => {
    const today = new Date();
    const formattedDate = {
      dateString: today.toISOString().split('T')[0],
      day: today.getDate(),
      month: today.getMonth() + 1,
      year: today.getFullYear(),
      timestamp: today.getTime(),
    };
    setSelectedDay(formattedDate);
  }, []);
  

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Calendar 
        onDayPress={(day) => onDayPress(day)}
        markedDates={{
          ...savedDates,
          [selectedDay?.dateString || '']: !savedDates[selectedDay?.dateString || '']
            ? { selected: true, selectedColor: 'purple' }
            : { ...savedDates[selectedDay?.dateString || ''] },
        }}
      />
      {selectedDay && (
        <View style={styles.textContainer}>
          <Text style={styles.title}>Workout</Text>
          <DropdownButton 
            selectedExercise={selectedExercise} 
            setSelectedExercise={setSelectedExercise} 
          />
        </View>
      )}
      <Button 
        title="Save" 
        onPress={() => {
          if (selectedDay) {
            setSavedDates((prev) => ({
              ...prev,
              [selectedDay.dateString]: { selected: true, selectedColor: 'green' }
            }));
          }
        }}
      />
      <Button 
        title="Finish" 
        //onPress={() => navigation.navigate('ProgramView')} 
      />
    </ScrollView>
  );
}

export default ProgramCreation;
