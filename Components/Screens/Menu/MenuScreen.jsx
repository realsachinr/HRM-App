import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const MenuScreen = () => {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');

  const handleSearch = (text) => {
    setQuery(text);
  };
  const menuItems = [
    { title: 'Attendance', icon: 'calendar-today', route: 'My Attendance' },
    { title: 'Team Attendance', icon: 'group', route: '' },
    { title: 'Face Attendance', icon: 'face', route: '' },
    { title: 'Holiday List', icon: 'event', route: '' },
    { title: 'Claims', icon: 'account-balance-wallet', route: '' },
    { title: 'Employee Search', icon: 'search', route: '' },
    { title: 'Help Desk', icon: 'help', route: 'HelpDesk' },
    { title: 'Pending Actions', icon: 'pending-actions', route: '' },
    { title: 'HR Handbook', icon: 'book', route: '' },
    { title: 'Transaction History', icon: 'history', route: '' },
    { title: 'BOT', icon: 'android', route: 'BOT' },
    { title: 'Zing Productivity', icon: 'trending-up', route: '' },
    { title: 'Digital ID', icon: 'badge', route: '' },
    { title: 'Device Mapping', icon: 'devices', route: '' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profileImage} />
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>Ms. Jyoti Pandey</Text>
          <Text style={styles.profileEmail}>jyoti.pandey@velocis.co.in</Text>
          <Text style={styles.lastLogin}>Last Login: Jul 26 2024 6:07PM</Text>
        </View>
        <TouchableOpacity style={styles.logoutButton}>
          <Icon name="power-settings-new" size={24} color="red" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchSection}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={query}
        onChangeText={handleSearch}
      />
      </View>
      <View style={styles.menuSection}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => navigation.navigate(item.route)}
          >
            <Icon name={item.icon} size={30} color="black" />
            <Text style={styles.menuTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileDetails: {
    flex: 1,
    marginLeft: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 14,
    color: 'gray',
  },
  lastLogin: {
    fontSize: 12,
    color: 'gray',
  },
  logoutButton: {
    padding: 10,
  },
  searchSection: {
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
  },
  searchText: {
    color: 'gray',
  },
  menuSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuItem: {
    width: '30%',
    alignItems: 'center',
    marginVertical: 10,
  },
  menuTitle: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default MenuScreen;
