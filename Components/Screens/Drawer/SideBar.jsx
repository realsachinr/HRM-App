import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
  PanResponder,
  Modal,
} from "react-native";
import {
  Entypo,
  Ionicons,
  Feather,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
const { width } = Dimensions.get("window");

const SideBar = ({ isOpen, toggleSidebar }) => {
  const navigation = useNavigation();
  const sidebarWidth = width * 0.7;
  const translateX = useRef(new Animated.Value(-sidebarWidth)).current;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLogoutClick = () => {
    setIsModalVisible(true);
  };

  const handleConfirmLogout = () => {
    // Handle the logout process here
    navigation.navigate("SignInScreen");
    console.log("Logged out");
    setIsModalVisible(false);
  };

  const handleCancelLogout = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isOpen ? 0 : -sidebarWidth,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        // Activate pan responder when a swipe is detected
        return Math.abs(gestureState.dx) > 10;
      },
      onPanResponderMove: (evt, gestureState) => {
        // Update the sidebar position as the user swipes
        if (gestureState.dx < 0) {
          translateX.setValue(Math.max(-sidebarWidth, gestureState.dx));
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        // Close the sidebar if the swipe is significant
        if (gestureState.dx < -sidebarWidth * 0.3) {
          toggleSidebar();
        } else {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateX }] }]}
      {...panResponder.panHandlers}
    >
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <View>
            <Image
              source={require("./User.png")} // Replace with your profile image
              style={styles.profileImage}
            />
          </View>
          <View>
            <Text style={styles.name}>Ibne Riead</Text>
            <Text style={styles.role}>Employee</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Image
            // source={require('./notification-icon.png')} // Replace with your notification icon
            style={styles.notificationIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeButton} onPress={toggleSidebar}>
          <Entypo name="cross" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.attendance}>
        <View style={styles.attendanceItem}>
          <LinearGradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={styles.attendanceCircle}
          >
            <Text style={styles.attendanceNumber}>22</Text>
            <Text style={styles.attendanceLabel}>Days</Text>
          </LinearGradient>
          <Text style={styles.attendanceTitle}>Presents</Text>
        </View>
        <View style={styles.attendanceItem}>
          <LinearGradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={styles.attendanceCircle}
          >
            <Text style={styles.attendanceNumber}>3</Text>
            <Text style={styles.attendanceLabel}>Days</Text>
          </LinearGradient>
          <Text style={styles.attendanceTitle}>Late</Text>
        </View>
        <View style={styles.attendanceItem}>
          <LinearGradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={styles.attendanceCircle}
          >
            <Text style={styles.attendanceNumber}>5</Text>
            <Text style={styles.attendanceLabel}>Days</Text>
          </LinearGradient>
          <Text style={styles.attendanceTitle}>Absent</Text>
        </View>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("My Profile")}
        >
          <Ionicons name="person" size={23} color="black" />
          <Text style={styles.menuItemText}>My Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Notification")}>
          <Ionicons name="notifications-outline" size={23} color="black" />
          <Text style={styles.menuItemText}>Notification</Text>
          <View style={styles.arrowBtn}>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={23}
              color="black"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Terms And Services")}
        >
          <Feather name="alert-circle" size={23} color="black" />
          <Text style={styles.menuItemText}>Terms of Services</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Privacy Policy")}
        >
          <Feather name="alert-triangle" size={23} color="black" />
          <Text style={styles.menuItemText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={handleLogoutClick}>
          <AntDesign name="logout" size={23} color="black" />
          <Text style={styles.menuItemText}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <Modal
        transparent={true}
        // animationType="slide"
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm Logout</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to log out?
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={handleConfirmLogout}
                style={styles.confirmButton}
              >
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleCancelLogout}
                style={styles.cancelButton}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: "70%",
    backgroundColor: "#fff",
    zIndex: 1000,
    paddingTop: 50,
  },
  arrowBtn: {
    right: -70,
  },
  menuButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 1001,
  },
  attendanceCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  closeButton: {
    padding: 10,
    right: 0,
    top: 0,
    position: "absolute",
  },
  closeIcon: {
    width: 20,
    height: 20,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    justifyContent: "center",
    width: "100%",
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 20,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 100,
    borderColor: "orange",
    borderWidth: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  role: {
    fontSize: 14,
    color: "#888",
  },
  notificationButton: {
    padding: 10,
  },
  notificationIcon: {
    width: 20,
    height: 20,
  },
  attendance: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    borderBottomEndRadius: 50,
    backgroundColor: "#567DF4",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  attendanceItem: {
    alignItems: "center",
  },
  attendanceNumber: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  attendanceLabel: {
    fontSize: 12,
    color: "white",
    bottom: 6,
  },
  attendanceTitle: {
    fontSize: 14,
    color: "white",
  },
  menuContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuItemText: {
    fontSize: 16,
    paddingLeft: 12,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  confirmButton: {
    backgroundColor: "#FF3B30",
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: "#E0E0E0",
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default SideBar;
