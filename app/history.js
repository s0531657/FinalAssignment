// history.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles/page-styles';

const History = () => {
  // Placeholder data - replace with your actual data source
  const journalEntries = [
    { id: '1', title: 'Entry 1', content: 'Content for entry 1...' },
    { id: '2', title: 'Entry 2', content: 'Content for entry 2...' },
    // ... more entries
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journal History</Text>
      <FlatList
        data={journalEntries}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default History;
