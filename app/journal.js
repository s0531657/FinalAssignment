import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/page-styles';
import { addEntry } from './database';

const Journal = () => {
  const [entryTitle, setEntryTitle] = useState('');
  const [entryContent, setEntryContent] = useState('');

  const handleSaveEntry = async () => {
    if (!entryTitle || !entryContent) {
      alert('Please enter both a title and content for your journal entry.');
      return;
    }
    try {
      await addEntry(entryTitle, entryContent);
      alert('Entry saved!');
      setEntryTitle('');
      setEntryContent('');
    } catch (error) {
      alert('Failed to save entry: ' + error.message);
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
        style={[styles.input, styles.journalTextArea]}
        placeholder="Entry Content"
        value={entryContent}
        onChangeText={setEntryContent}
        multiline
      />
      <Button title="Save Entry" onPress={handleSaveEntry} />
    </View>
  );
};

export default Journal;
