import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('journal.db');


const initDB = async () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS entries (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT);',
      [],
      () => console.log('Table created successfully'),
      (_, error) => console.log('Error creating table', error)
    );
  });
};


const addEntry = async (title, content) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO entries (title, content) VALUES (?, ?);',
        [title, content],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};


const fetchEntries = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM entries;',
        [],
        (_, { rows: { _array } }) => resolve(_array),
        (_, error) => reject(error)
      );
    });
  });
};

export { initDB, addEntry, fetchEntries };
