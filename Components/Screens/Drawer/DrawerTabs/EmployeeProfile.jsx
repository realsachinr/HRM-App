import React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';

const EmployeeProfile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
  
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with the actual profile image URL
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Wallden Vicu</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Name</Text>
          <Text style={styles.infoValue}>Wallden Vicu</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Email</Text>
          <Text style={styles.infoValue}>wallden@gmail.com</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Phone</Text>
          <Text style={styles.infoValue}>+9854785625</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Date Of Birth</Text>
          <Text style={styles.infoValue}>21st Feb, 2001</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Gender</Text>
          <Text style={styles.infoValue}>Male</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Address</Text>
          <Text style={styles.infoValue}>775 Rolling Green Rd.</Text>
        </View>
        <View style={styles.editButtonContainer}>
          <Button title="Edit Profile" color="#1E90FF" onPress={() => {}} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  profileContainer: {
    alignItems: 'center',
    padding: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  infoContainer: {
    width: '100%',
    padding: 16,

    backgroundColor: '#FFFFFF',
    marginBottom: 8,
    borderRadius: 8,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555555',
  },
  infoValue: {
    fontSize: 16,
    color: '#555555',
    marginTop: 4,
  },
  editButtonContainer: {
    marginTop: 16,
    width: '100%',
    alignItems: 'center',
  },
});

export default EmployeeProfile;
