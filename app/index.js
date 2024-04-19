import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Image, Alert } from 'react-native';
import History from './history';
import Journal from './journal';
import { Calendar } from 'react-native-calendars';
import { launchCamera } from 'react-native-image-picker';
import styles from '../styles/page-styles';
import { initDB } from './database';

const IndexScreen = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [imageUri, setImageUri] = useState(null);
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    initDB().catch((error) => console.error('Failed to initialize the database', error));
  }, []);

  const handleTakePicture = async () => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };

    try {
      const response = await launchCamera(options);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.error('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setImageUri(source.uri);
      }
    } catch (error) {
      Alert.alert("Camera Error", "There was an error using the camera.");
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Text style={styles.title}>Welcome to the Journal App</Text>
            <Pressable onPress={handleTakePicture}>
              <Text style={styles.navigationButtons.buttonText}>Take Picture</Text>
            </Pressable>
            {imageUri && <Image source={{ uri: imageUri }} style={styles.imageStyle} />}
            <View style={styles.calendarContainer}>
              <Calendar
                current={today}
                minDate={'2020-01-01'}
                maxDate={'2030-01-01'}
                onDayPress={(day) => console.log('selected day', day)}
                monthFormat={'yyyy MM'}
                hideExtraDays={true}
                firstDay={1}
                markedDates={{[today]: {selected: true, marked: true, selectedColor: 'blue'}}}
              />
            </View>
          </>
        );
      case 'journal':
        return <Journal />;
      case 'history':
        return <History />;
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
