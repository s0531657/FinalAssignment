import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Pressable, Image, Alert, Animated } from 'react-native';
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
  const scaleAnim = useRef(new Animated.Value(1)).current;  // Animated value for button press effect

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

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true
    }).start();
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
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <Pressable style={styles.navigationButtons.button} onPress={() => setCurrentPage('home')} onPressIn={handlePressIn} onPressOut={handlePressOut}>
            <Text style={styles.navigationButtons.buttonText}>Home</Text>
          </Pressable>
          <Pressable style={styles.navigationButtons.button} onPress={() => setCurrentPage('journal')} onPressIn={handlePressIn} onPressOut={handlePressOut}>
            <Text style={styles.navigationButtons.buttonText}>Journal</Text>
          </Pressable>
          <Pressable style={styles.navigationButtons.button} onPress={() => setCurrentPage('history')} onPressIn={handlePressIn} onPressOut={handlePressOut}>
            <Text style={styles.navigationButtons.buttonText}>History</Text>
          </Pressable>
        </Animated.View>
      </View>
    </View>
  );
};

export default IndexScreen;
