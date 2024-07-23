import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const EmployeeAttendance = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("My Attendance")}>
          <View style={styles.iconContainer}>
            <Image
              source={require("./AttendanceIcon.png")}
              style={styles.icon}
            />
          </View>
          <Text style={styles.buttonText}>My Attendance</Text>
          <MaterialIcons name="keyboard-arrow-right" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate("Attendance Report")}>
          <View style={styles.iconContainer}>
            <Image
              source={require("./ReportAttendance.png")}
              style={styles.icon}
            />
          </View>
          <Text style={styles.buttonText}>Attendance Report</Text>
          <MaterialIcons name="keyboard-arrow-right" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // bottom: 20,
    // borderTopLeftRadius:30,
    // borderTopRightRadius:30,
    zIndex:100,
    height:"100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#6A5ACD",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
  },
  backArrow: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 15,
  },
  button1: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    borderLeftColor: "orange",
    borderLeftWidth: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  button2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    borderLeftColor: "violet",
    borderLeftWidth: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  iconContainer: {
    // backgroundColor: "#E0E0E0",
    padding: 8,
    borderRadius: 5,
    marginRight: 15,
  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
  },
  arrowIcon: {
    width: 15,
    height: 15,
    resizeMode: "contain",
    marginLeft: "auto",
  },
});

export default EmployeeAttendance;
