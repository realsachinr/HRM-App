// ImagePickerScreen.js

import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import SwipeButton from '../../EmployeeAttendance/SwipeButton';
const ImagePickerScreen = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // Request permission to access the camera
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
      return;
    }

    // Launch the camera
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
      
    });
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Launch Camera" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}

      <SwipeButton
                checkin={"Check in"}
                onSwipe={() => console.log("swippee")}
                // disabled={isCheckedIn}
              />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 500,
    marginTop: 20,
  },
});

export default ImagePickerScreen;
