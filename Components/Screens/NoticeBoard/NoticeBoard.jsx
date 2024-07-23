import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const notices = [
  { id: '1', title: 'Meeting at 5 PM', description: 'All employees must attend the meeting at 5 PM.' },
  { id: '2', title: 'Office Holiday', description: 'The office will be closed on July 25th.' },
  { id: '3', title: 'New Policy Update', description: 'Please review the updated policies in your email.' },
  // Add more notices as needed
];

const NoticeBoard = () => {
  const renderItem = ({ item }) => (
    <View style={styles.noticeItem}>
      <Text style={styles.noticeTitle}>{item.title}</Text>
      <Text style={styles.noticeDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notices}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  noticeItem: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  noticeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  noticeDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default NoticeBoard;
