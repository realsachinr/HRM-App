import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Change this import based on the icon set you want to use
import Logo from "./logo.png";
import { useNavigation } from "@react-navigation/native";

const generateDeviceId = () => {
  // Placeholder function to generate a random device ID
  // In production, consider using libraries like react-native-device-info
  return "12345-ABCDE-67890-FGHIJ";
};

const Settings = () => {
  const [deviceId, setDeviceId] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    // Fetch the device ID when the component mounts
    const id = generateDeviceId();
    setDeviceId(id);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />
        <View>
          <Text style={styles.version}>Version -4.29.0</Text>
          <Text style={styles.deviceId}>DeviceID - {deviceId}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.sectionTitle}>Main</Text>

        <View style={styles.section}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Change Password")}
          >
            <Icon name="key-outline" size={20} color="#333" />
            <Text style={styles.itemText}>Change password</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Active Session")}
          >
            <Icon name="time-outline" size={20} color="#333" />
            <Text style={styles.itemText}>Active Session Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Icon name="notifications-outline" size={20} color="#333" />
            <Text style={styles.itemText}>Notification Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}>
            <Icon name="phone-portrait-outline" size={20} color="#333" />
            <Text style={styles.itemText}>Notifications active devices</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Send Feedback")}>
            <Icon name="chatbubble-ellipses-outline" size={20} color="#333" />
            <Text style={styles.itemText}>Send feedback</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Appearance</Text>
      <View style={styles.section}>
        <TouchableOpacity style={styles.item}>
          <Icon name="color-palette-outline" size={20} color="#333" />
          <Text style={styles.itemText}>Customize</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  header: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  version: {
    marginTop: 10,
    color: "#333",
  },
  deviceId: {
    color: "#999",
  },
  section: {
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  sectionTitle: {
    fontSize: 16,
    paddingLeft: 20,
    paddingVertical: 20,
    fontWeight: "bold",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",

    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
  },
  picker: {
    width: 150,
    height: 30,
  },
});

export default Settings;
