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
import SwipeButton from "./SwipeButton";
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
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);
  const [totalWorkingTime, setTotalWorkingTime] = useState("--:--");
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
    if (checkInTime) {
      Alert.alert("Check-In", "You have already checked in today.");
      return;
    }

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
      cameraType: ImagePicker.CameraType.front,
    });

    if (!result.cancelled) {
      const currentTime = new Date();
      setCheckInTime(currentTime);
      setIsCheckedIn(true);
      setIsCheckedOut(false);
      setIsOffice(false);
      console.log(result.uri);
    }
  };

  const handleCheckOut = () => {
    if (checkOutTime) {
      Alert.alert("Check-Out", "You have already checked out today.");
      return;
    }

    const currentTime = new Date();
    setCheckOutTime(currentTime);
    setIsCheckedOut(true);
    setIsCheckedIn(false);
    setIsOffice(true);

    if (checkInTime) {
      const timeDifference = currentTime - checkInTime;
      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      setTotalWorkingTime(`${hours}:${minutes < 10 ? "0" : ""}${minutes}`);
    }
  };

  const formatTime = (date) => {
    const timeString = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const [time, period] = timeString.split(" ");
    return { time, period: period ? period.toUpperCase() : "" };
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
    if (hours < 16)
      return <Text style={styles.morningText}>Good Afternoon</Text>;

    return <Text style={styles.morningText}>Good Evening</Text>;
  }

  const refreshLocation = () => {
    fetchLocation();
  };

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const { time, period } = formatTime(currentTime);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Entypo
          name="location-pin"
          size={40}
          color="#00224D"
        />
        <Text style={styles.locationText}>{locationName}</Text>
      </View>
      <View style={styles.body}>
        {isOffice ? (
          <View style={styles.contentContainer}>
            <View style={styles.timeContainer}>
              <Text style={styles.greetingText}>{getGreeting()}</Text>
              <View style={styles.ctContainer}>
                <Text style={styles.timeText}>{time}</Text>
                <Text style={styles.periodText}>{period}</Text>
              </View>
              <Text style={styles.dateText}>{formatDate(currentTime)}</Text>
            </View>
            <View style={styles.styleBtn}>
              <SwipeButton
                checkin={"Check in"}
                onSwipe={handlePress}
                disabled={isCheckedIn}
              />
            </View>
          </View>
        ) : (
          <View style={styles.contentContainer}>
            <View style={styles.timeContainer}>
              <Text style={styles.greetingText}>{getGreeting()}</Text>
              <View style={styles.ctContainer}>
                <Text style={styles.timeText}>{time}</Text>
                <Text style={styles.periodText}>{period}</Text>
              </View>
              <Text style={styles.dateText}>{formatDate(currentTime)}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <SwipeButton
                checkin={"Check Out"}
                onSwipe={handleCheckOut}
                disabled={isCheckedOut}
              />
            </View>
          </View>
        )}
      </View>
      <View style={styles.bottomBar}>
        <View style={styles.bottomBarItem}>
          <Ionicons name="time-outline" size={24} color="#00224D" />
          <Text style={styles.bottomBarText}>
            {checkInTime ? formatTime(checkInTime).time : "--:--"}
          </Text>
          <Text>Check In</Text>
        </View>
        <View style={styles.bottomBarItem}>
          <Ionicons name="time-outline" size={24} color="#00224D" />
          <Text style={styles.bottomBarText}>
            {checkOutTime ? formatTime(checkOutTime).time : "--:--"}
          </Text>
          <Text>Check Out</Text>
        </View>
        <View style={styles.bottomBarItem}>
          <Ionicons name="refresh-circle-outline" size={24} color="#00224D" />
          <Text style={styles.bottomBarText}>
            {totalWorkingTime}
          </Text>
          <Text>Working Hours</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  ctContainer: {
    flexDirection: "row",
    gap: 10,
  },

  // styleBtn: {
  //   flex: 1,
  //   backgroundColor: "red",
  //   alignItems: "flex-start",
  //   justifyContent: "flex-start",
  // },
  bottomBarText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bottomBarItem: {
    alignItems: "center",
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#D9DCE1",
    paddingVertical: 10,
  },
  statusBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#D9DCE1",
    paddingVertical: 10,
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
    justifyContent: "center",
    gap: 10,
    padding: 20,
    width: 350,
    paddingHorizontal: 50,
    bottom: 20,
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
    margin: 30,
    gap: 30,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    backgroundColor: "#fff",
  },
  footerItem: {
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginTop: 8,
  },
  footerLabel: {
    fontSize: 14,
    color: "#999",
  },
  locationText: {
    color: "#666",
    backgroundColor: "#E4EAF1",
    fontSize: 10.1,
    textTransform: "uppercase",
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
    fontFamily: "DigitalClock",
    color: "#00224D",
    marginBottom: 10,
    width: "100%",
  },
  timeText: {
    fontSize: 82,
    fontFamily: "DigitalClock",
    color: "#00224D",
  },
  periodText: {
    fontSize: 20,
    top: 50,
    color: "#00224D",
    fontFamily: "DigitalClock",
  },
  checkinButton: {
    backgroundColor: "#00224D",
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
