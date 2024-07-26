import React, { useState, useCallback, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, BackHandler, Modal, PanResponder, Animated } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { AntDesign, Feather } from "@expo/vector-icons";
import UserImage from "./User.png";
import EmployeeAttendanceImage from "./EmployeeAttendance.png";
import EmployeeDirectoryImage from "./EmployeeDirectory.png";
import LeaveApplicationImage from "./LeaveApplication.png";
import DailyWorkReportImage from "./DailyWorkReport.png";
import SalaryImage from "./Salary.png";
import NoticeBoardImage from "./NoticeBoard.png";
import SideBar from "../Drawer/SideBar";

const HomeScreen = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isExitModalVisible, setIsExitModalVisible] = useState(false);
  const navigation = useNavigation();
  const pan = useRef(new Animated.ValueXY()).current;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleBackPress = () => {
    setIsExitModalVisible(true);
    return true;
  };

  const confirmExit = () => {
    BackHandler.exitApp();
  };

  const cancelExit = () => {
    setIsExitModalVisible(false);
  };

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      };
    }, [])
  );

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      if (gestureState.dx > 0 && !isSidebarOpen) {
        pan.setValue({ x: gestureState.dx, y: 0 });
      }
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx > 100 && !isSidebarOpen) {
        setIsSidebarOpen(true);
      } else if (gestureState.dx < -100 && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
      pan.setValue({ x: 0, y: 0 });
    }
  });

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <View style={styles.header}>
        <View style={styles.profileHeader}>
          <View style={styles.profile}>
            <Image source={UserImage} style={styles.profileImage} />
            <View>
              <Text style={styles.profileName}>Hi, Ibne Riead</Text>
              <Text style={styles.profileText}>Good Morning</Text>
            </View>
          </View>
          <TouchableOpacity onPress={toggleSidebar} style={styles.menuButton}>
            <Feather name="menu" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      {isSidebarOpen && <View style={styles.overlay} />}
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <View style={styles.content}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.card1}
            onPress={() => navigation.navigate("Employee Attendance")}
          >
            <View style={styles.cardIcon1}>
              <Image
                source={EmployeeAttendanceImage}
                style={styles.cardIconImage}
              />
            </View>
            <Text style={styles.cardText}>Employee Attendance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card2}>
            <View style={styles.cardIcon2}>
              <Image
                source={EmployeeDirectoryImage}
                style={styles.cardIconImage}
              />
            </View>
            <Text style={styles.cardText}>Employee Directory</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.card3}
            onPress={() => navigation.navigate("Leave Application")}
          >
            <View style={styles.cardIcon3}>
              <Image
                source={LeaveApplicationImage}
                style={styles.cardIconImage}
              />
            </View>
            <Text style={styles.cardText}>Leave Application</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card4}
            onPress={() => navigation.navigate("Daily Work Report")}
          >
            <View style={styles.cardIcon4}>
              <Image
                source={DailyWorkReportImage}
                style={styles.cardIconImage}
              />
            </View>
            <Text style={styles.cardText}>Daily Work Report</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabCardContainer}>
          <TouchableOpacity
            style={styles.tabcard1}
            onPress={() => navigation.navigate("Salary Statement")}
          >
            <View style={styles.cardIcon1}>
              <Image source={SalaryImage} style={styles.tabIconImage} />
            </View>
            <Text style={styles.tabCardText}>Salary Statement</Text>
            <AntDesign
              name="right"
              style={styles.arrowIcon}
              size={22}
              color="gray"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabcard2}
            onPress={() => navigation.navigate("Notice Board")}
          >
            <View style={styles.cardIcon2}>
              <Image source={NoticeBoardImage} style={styles.tabIconImage} />
            </View>
            <Text style={styles.tabCardText}>Notice Board</Text>
            <AntDesign
              name="right"
              style={styles.arrowIcon}
              size={22}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        transparent={true}
        visible={isExitModalVisible}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Exit Application</Text>
            <Text style={styles.modalMessage}>Are you sure you want to exit?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={confirmExit} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={cancelExit} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#567DF4",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop: 55,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  profileText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  profileName: {
    color: "#fff",
    fontSize: 16,
  },
  menuButton: {
    zIndex: 1001,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  content: {
    padding: 20,
    top: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    height: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    height: "17%",
  },
  card1: {
    width: "48%",
    height: "100%",
    backgroundColor: "#fff",
    borderLeftWidth: 5,
    borderLeftColor: "pink",
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    justifyContent: "center",
  },
  cardIcon1: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  card2: {
    width: "48%",
    height: "100%",
    backgroundColor: "#fff",
    borderLeftWidth: 5,
    borderLeftColor: "#8270F0",
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    justifyContent: "center",
  },
  cardIcon2: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#8270F0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  card3: {
    width: "48%",
    height: "100%",
    backgroundColor: "#fff",
    borderLeftWidth: 5,
    borderLeftColor: "#70DAFD",
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    justifyContent: "center",
  },
  cardIcon3: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#70DAFD",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  card4: {
    width: "48%",
    height: "100%",
    backgroundColor: "#fff",
    borderLeftWidth: 5,
    borderLeftColor: "#2AC78B",
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    justifyContent: "center",
  },
  cardIcon4: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#2AC78B",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  tabcard1: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderLeftWidth: 5,
    borderLeftColor: "pink",
    borderRadius: 10,
    padding: 15,
    paddingLeft: 22,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  tabcard2: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderLeftWidth: 5,
    borderLeftColor: "#8270F0",
    borderRadius: 10,
    padding: 15,
    paddingLeft: 22,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  cardIconImage: {
    width: 40,
    height: 40,
  },
  tabIconImage: {
    width: 36,
    height: 36,
  },
  cardText: {
    fontSize: 14,
    width: "80%",
  },
  tabCardText: {
    fontSize: 14,
    width: "80%",
    paddingLeft: 5,
  },
  tabCardContainer: {
    width: "100%",
    gap: 18,
  },
  arrowIcon: {
    right: 13,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
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
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    padding: 10,
    backgroundColor: "#567DF4",
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
  },
  modalButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default HomeScreen;
