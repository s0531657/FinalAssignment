// page-styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
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
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20, 
    textAlign: 'center',
  },
  calendarContainer: {
    width: '100%', 
    padding: 10,
    backgroundColor: '#fff', 
    borderRadius: 10, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3, 
  },
  
  // Journal Entry Styles
  journalTitlecontainer: {
    flex: 1,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: "red",
    paddingHorizontal: 80,
    fontSize: 18,
    borderRadius: 5,
    backgroundColor: '#fff',  
    textAlign: 'right',  
  },
  journalTitle: {  
    height: 40,
    borderWidth: 1,
    marginBottom: 70,
    paddingHorizontal: 10,
    fontSize: 18,
    borderRadius: 5,
    backgroundColor: '#fff',  
    textAlign: 'right',  
  },
  journalTextArea: {  
    height: 300,
    width: 350,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 50,
    padding: 10,
    textAlignVertical: 'top',
    textAlign: "left",
    borderRadius: 5,
    backgroundColor: '#fff',  
  },
  journalButton: {  
    backgroundColor: '#0066cc',  
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  journalButtonText: {  
    color: '#ffffff',  
    fontSize: 16,
  },
  
  // History Styles
  listItem: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  // ---------------- HISTORY STYLES END HERE -------------------------
});

export default styles;
