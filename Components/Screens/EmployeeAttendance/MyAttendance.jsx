import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Alert,
} from "react-native";

import { Ionicons, Entypo } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";

const MyAttendance = () => {
  const [isOffice, setIsOffice] = useState(true);
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [isCheckedOut, setIsCheckedOut] = useState(true);
  const [animation] = useState(new Animated.Value(1));
  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState(null);
  const [locationName, setLocationName] = useState("Location not found!");
  const [errorMsg, setErrorMsg] = useState(null);

  let [fontsLoaded] = useFonts({
    DigitalClock: require("./DigitalClock.ttf"),
  });

  useEffect(() => {
    if (!fontsLoaded) return;
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, [fontsLoaded]);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1.1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [animation]);

  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      fetchLocationName(location.coords.latitude, location.coords.longitude);
    } catch (error) {
      console.error(error);
      setErrorMsg("An error occurred while fetching the location.");
    }
  };

  const fetchLocationName = async (lat, lon) => {
    try {
      const address = await Location.reverseGeocodeAsync({
        latitude: lat,
        longitude: lon,
      });
      if (address.length > 0) {
        const { formattedAddress } = address[0];
        const fullAddress = `${formattedAddress || ""},`;
        setLocationName(fullAddress.trim() || "Address not available");
      } else {
        setLocationName("Unable to get the place name.");
      }
    } catch (error) {
      console.error(error);
      setLocationName("An error occurred while fetching the place name.");
    }
  };

  const handlePress = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Camera permission is required to check in."
      );
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setIsCheckedIn(true);
      setIsCheckedOut(false);
      setIsOffice(false);
      console.log(result.uri);
    }
  };

  const handleCheckOut = () => {
    setIsCheckedOut(true);
    setIsCheckedIn(false);
    setIsOffice(true);
  };

  const formatTime = (date) => {
    const timeString = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    const [time, period] = timeString.split(" ");
    return `${time} ${period ? period.toUpperCase() : ""}`;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString([], {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  function getGreeting() {
    const hours = currentTime.getHours();
    if (hours < 12) return <Text style={styles.morningText}>Good Morning</Text>;
    if (hours < 18)
      return <Text style={styles.morningText}>Good Afternoon</Text>;
    return <Text style={styles.morningText}>Good Evening</Text>;
  }

  const refreshLocation = () => {
    fetchLocation();
  };

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Entypo
          name="location-pin"
          size={40}
          style={styles.refreshIcon}
          color="#567DF4"
        />
        <Text style={styles.locationText}>{locationName}</Text>
        {/* <TouchableOpacity onPress={refreshLocation}>
          <Ionicons
            name="refresh-circle"
            size={30}
            style={styles.refreshIcon}
            color="#567DF4"
          />
        </TouchableOpacity> */}
      </View>
      <View style={styles.body}>
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Choose your Attendance mode</Text>
          <View style={styles.switchOptions}>
            <TouchableOpacity
              onPress={() => setIsOffice(true)}
              style={[
                styles.switchOption,
                isOffice ? styles.active : styles.inactive,
              ]}
              disabled={!isCheckedOut}
            >
              <Text style={isOffice ? styles.activeText : styles.inactiveText}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsOffice(false)}
              style={[
                styles.switchOption,
                !isOffice ? styles.active : styles.inactive,
              ]}
              disabled={isCheckedOut || !isCheckedIn}
            >
              <Text style={!isOffice ? styles.activeText : styles.inactiveText}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {isOffice ? (
          <View style={styles.contentContainer}>
            <View style={styles.timeContainer}>
              <Text style={styles.greetingText}>{getGreeting()}</Text>
              <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
              <Text style={styles.dateText}>{formatDate(currentTime)}</Text>
            </View>
            <Animated.View
              style={[
                styles.buttonContainer,
                { transform: [{ scale: animation }] },
              ]}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={handlePress}
                disabled={isCheckedIn}
              >
                <Text style={styles.buttonText}>Check-in</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        ) : (
          <View style={styles.contentContainer}>
            <View style={styles.timeContainer}>
              <Text style={styles.greetingText}>{getGreeting()}</Text>
              <Text style={styles.dateText}>{formatDate(currentTime)}</Text>
              <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
            </View>
            <Animated.View
              style={[
                styles.buttonContainer,
                { transform: [{ scale: animation }] },
              ]}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={handleCheckOut}
                disabled={isCheckedOut}
              >
                <Text style={styles.buttonText}>Check-out</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  contentContainer: {
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#E4EAF1",
    paddingHorizontal: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 10,
  },

  timeContainer: {
    alignItems: "center",
    backgroundColor: "#D9DCE1",
    justifyContent:"center",
    gap: 10,
    padding: 20,
    borderRadius: 5,
    marginBottom: 30,
  },
  morningText: {
    fontFamily: "DigitalClock",
  },
  headingLocation: {
    fontWeight: "bold",
    color: "black",
  },
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    margin: 30,
    gap: 30,
    paddingVertical: 25,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  locationText: {
    color: "#666",
    backgroundColor: "#E4EAF1",
    width: "90%",
    paddingVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  switchContainer: {
    marginBottom: 30,
    alignItems: "center",
  },
  switchText: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#A3A299",
  },
  switchOptions: {
    flexDirection: "row",
  },
  switchOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  active: {
    backgroundColor: "#1E90FF",
  },
  inactive: {
    backgroundColor: "#E0E0E0",
  },
  activeText: {
    color: "#fff",
    fontWeight: "bold",
  },
  inactiveText: {
    color: "#666",
    fontWeight: "bold",
  },
  greetingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2B2A61",
  },
  dateText: {
    fontSize: 20,
    fontFamily: "DigitalClock", // here is the Font
    color: "#00224D",
    marginBottom: 10,
  },
  timeText: {
    fontSize: 52,

    fontFamily: "DigitalClock", // here is the Font
    color: "#00224D",
  },
  checkinButton: {
    backgroundColor: "#1E90FF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonContainer: {
    borderRadius: 50,
    overflow: "hidden",
  },
  button: {
    backgroundColor: "#09BC85",
    width: 130,
    height: 130,
    borderWidth: 10,
    borderColor: "#DAF5EE",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 75,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default MyAttendance;
