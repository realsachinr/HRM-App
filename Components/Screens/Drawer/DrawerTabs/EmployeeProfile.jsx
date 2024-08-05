import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView, TextInput } from 'react-native';

const EmployeeProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Wallden Vicu',
    email: 'wallden@gmail.com',
    phone: '+9854785625',
    dob: '21st Feb, 2001',
    gender: 'Male',
    address: '775 Rolling Green Rd.',
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (key, value) => {
    setProfileData({ ...profileData, [key]: value });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with the actual profile image URL
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{profileData.name}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Name</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={profileData.name}
              onChangeText={(value) => handleChange('name', value)}
            />
          ) : (
            <Text style={styles.infoValue}>{profileData.name}</Text>
          )}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Email</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={profileData.email}
              onChangeText={(value) => handleChange('email', value)}
            />
          ) : (
            <Text style={styles.infoValue}>{profileData.email}</Text>
          )}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Phone</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={profileData.phone}
              onChangeText={(value) => handleChange('phone', value)}
            />
          ) : (
            <Text style={styles.infoValue}>{profileData.phone}</Text>
          )}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Date Of Birth</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={profileData.dob}
              onChangeText={(value) => handleChange('dob', value)}
            />
          ) : (
            <Text style={styles.infoValue}>{profileData.dob}</Text>
          )}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Gender</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={profileData.gender}
              onChangeText={(value) => handleChange('gender', value)}
            />
          ) : (
            <Text style={styles.infoValue}>{profileData.gender}</Text>
          )}
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Address</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={profileData.address}
              onChangeText={(value) => handleChange('address', value)}
            />
          ) : (
            <Text style={styles.infoValue}>{profileData.address}</Text>
          )}
        </View>
        <View style={styles.editButtonContainer}>
          <Button
            title={isEditing ? 'Save Profile' : 'Edit Profile'}
            color="#1E90FF"
            onPress={handleEdit}
          />
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
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
    padding: 8,
    marginTop: 4,
  },
  editButtonContainer: {
    marginTop: 16,
    width: '100%',
    alignItems: 'center',
  },
});

export default EmployeeProfile;
