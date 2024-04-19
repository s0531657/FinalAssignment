// IndexScreen.js
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import History from './history';  // Assuming History is another component
import Journal from './journal';  // Assuming Journal is another component
import { Calendar } from 'react-native-calendars'; // Import the Calendar component
import styles from '../styles/page-styles'; // Import the styles

const IndexScreen = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Text style={styles.title}>Welcome to the Journal App</Text>
            <View style={styles.calendarContainer}>
              <Calendar
                current={today}
                minDate={'2020-01-01'}
                maxDate={'2030-01-01'}
                onDayPress={(day) => {
                  console.log('selected day', day);
                }}
                monthFormat={'yyyy MM'}
                hideExtraDays={true}
                firstDay={1}
                markedDates={{
                  [today]: {selected: true, marked: true, selectedColor: 'blue'},
                }}
              />
            </View>
          </>
        );
      case 'history':
        return <History />;
      case 'journal':
        return <Journal />;
      default:
        return <Text style={styles.title}>Welcome to the Journal App</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {renderContent()}
      <View style={styles.navigationContainer}>
        <Pressable style={styles.navigationButtons.button} onPress={() => setCurrentPage('home')}>
          <Text style={styles.navigationButtons.buttonText}>Home</Text>
        </Pressable>
        <Pressable style={styles.navigationButtons.button} onPress={() => setCurrentPage('journal')}>
          <Text style={styles.navigationButtons.buttonText}>Journal</Text>
        </Pressable>
        <Pressable style={styles.navigationButtons.button} onPress={() => setCurrentPage('history')}>
          <Text style={styles.navigationButtons.buttonText}>History</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default IndexScreen;
