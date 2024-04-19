// page-styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Adjusted for content and navigation
    alignItems: 'center',
    padding: 20,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    width: '100%',
  },
  navigationButtons: {
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      flex: 1, 
      margin: 5, 
    },
    buttonText: {
      fontSize: 16,
    },
  },
// ---------------- END OF HOME STYLES ----------------

title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Adds space below the title
  },
  calendarContainer: {
    width: '100%', // Ensures the calendar uses full available width
    padding: 10,
    backgroundColor: '#fff', // Adds a background color to the calendar for better visibility
    borderRadius: 10, // Optional: adds rounded corners
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3, // Shadow for Android
  }
    
});

export default styles;
