import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles/page-styles';
import { fetchEntries } from './database';

const History = () => {
  const [journalEntries, setJournalEntries] = useState([]);

  useEffect(() => {
    const loadJournalEntries = async () => {
      const entries = await fetchEntries();
      setJournalEntries(entries);
    };

    loadJournalEntries();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journal History</Text>
      <FlatList
        data={journalEntries}
        keyExtractor={item => item.id.toString()}
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
