import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const leaveApplications = [
  { id: '1', type: 'Annual Leave', dates: 'From 16, May 2021 to 20, May 2021', applyDate: 'Apply Date) 15, May 2021', status: 'Approved' },
  { id: '2', type: 'Exam Leave', dates: 'From 16, May 2021 to 20, May 2021', applyDate: 'Apply Date) 15, May 2021', status: 'Pending' }
];

const MyLeaveApplication = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={leaveApplications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.type}>{item.type}</Text>
            <Text style={styles.dates}>{item.dates}</Text>
            <Text style={styles.applyDate}>{item.applyDate}</Text>
            <Text style={[styles.status, item.status === 'Approved' ? styles.approved : styles.pending]}>{item.status}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('Leave Application Information')}>
        <Icon name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5'
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2
  },
  type: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dates: {
    fontSize: 14,
    color: '#777',
  },
  applyDate: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 4,
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  },
  approved: {
    color: 'green',
  },
  pending: {
    color: 'orange',
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 56,
    height: 56,
    backgroundColor: '#007bff',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
});

export default MyLeaveApplication;
