import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

const NotificationSettings = () => {
  const [isEnabled, setIsEnabled] = useState({
    newMessages: true,
    promotional: false,
    updates: true,
    reminders: false,
  });

  const toggleSwitch = (key) => {
    setIsEnabled((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Notification Settings</Text> */}

      <View style={styles.switchContainers}>
        <View style={styles.settingContainer}>
          <Text style={styles.settingLabel}>New Messages</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#00224D" }}
            thumbColor={isEnabled.newMessages ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={() => toggleSwitch("newMessages")}
            value={isEnabled.newMessages}
          />
        </View>

        <View style={styles.settingContainer}>
          <Text style={styles.settingLabel}>Promotional Offers</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#00224D" }}
            thumbColor={isEnabled.promotional ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={() => toggleSwitch("promotional")}
            value={isEnabled.promotional}
          />
        </View>

        <View style={styles.settingContainer}>
          <Text style={styles.settingLabel}>App Updates</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#00224D" }}
            thumbColor={isEnabled.updates ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={() => toggleSwitch("updates")}
            value={isEnabled.updates}
          />
        </View>

        <View style={styles.settingContainer}>
          <Text style={styles.settingLabel}>Reminders</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#00224D" }}
            thumbColor={isEnabled.reminders ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={() => toggleSwitch("reminders")}
            value={isEnabled.reminders}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  settingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 20,
  },
  switchContainers: {
    // backgroundColor: "red",
    padding: 16,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: "white",
    elevation: 2,
    borderRadius: 10,

  },
  settingLabel: {
    fontSize: 16,
    color: "#333",
  },
});

export default NotificationSettings;
