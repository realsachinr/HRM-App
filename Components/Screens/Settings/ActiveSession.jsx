import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const loginData = [
  { id: '1', device: 'Samsung Galaxy A71', location: 'Noida, India', time: 'Yesterday at 03:19' },
  { id: '2', device: 'Samsung Galaxy S20 FE 5G', location: 'Sheopur, India', time: '30 May at 11:17' },
  { id: '3', device: 'Samsung Galaxy A71', location: 'Sheopur, India', time: '3 June at 06:32' },
  { id: '4', device: 'Windows PC', location: 'Jammu, India', time: '29 April at 05:41' },
];

const ActiveSession = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.iconContainer}>
        <MaterialIcons name="devices" size={24} color="white" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.device}>{item.device}</Text>
        <Text style={styles.details}>{item.location} • {item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account login activity</Text>
      <Text style={styles.subheader}>You're currently logged in on these devices:</Text>
      <FlatList
        data={loginData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Select devices to log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#1a1a1a',
    padding: 16,
  },
  header: {
    color: "#666",
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subheader: {
    color: "#666",
    fontSize: 14,
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  iconContainer: {
    backgroundColor: '#333333',
    padding: 8,
    borderRadius: 8,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  device: {
    color: "black",
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    color: 'gray',
    fontSize: 14,
  },
  logoutButton: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#ff3b30',
    alignItems: 'center',
    borderRadius: 8,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ActiveSession;
