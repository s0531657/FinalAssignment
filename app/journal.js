// journal.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/page-styles';

const Journal = () => {
  const [entryTitle, setEntryTitle] = useState('');
  // Start with the preset text
  const [entryContent, setEntryContent] = useState('New Entry Text');

  const handleSaveEntry = () => {
    // Logic to save the journal entry
    alert('Entry saved!');
    // Clear the form
    setEntryTitle('');
    setEntryContent('');
  };

  const clearPresetText = () => {
    // Clear the preset text when the user starts typing, but only if it's the preset
    if (entryContent === 'New Entry Text') {
      setEntryContent('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Journal Entry</Text>
      <TextInput
        style={styles.input}
        placeholder="Entry Title"
        value={entryTitle}
        onChangeText={setEntryTitle}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Entry Content"
        value={entryContent}
        onChangeText={setEntryContent}
        multiline
        // Add the onFocus handler
        onFocus={clearPresetText}
      />
      <Button title="Save Entry" onPress={handleSaveEntry} />
    </View>
  );
};

export default Journal;
