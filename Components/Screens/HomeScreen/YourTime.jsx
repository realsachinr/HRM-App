import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import NoAnnouncement from "./NoAnnouncement.png";
const YourTime = () => {
  return (
    <View style={styles.container}>
      {/* Company Announcements */}
      <View style={styles.announcementContainer}>
        <Text style={styles.announcementText}>Company Announcements</Text>
        <View style={styles.announcementBox}>
          <Image source={NoAnnouncement} style={styles.noAnnouncementsImage} />
          <Text style={styles.noAnnouncementsText}>
            No announcements exists.
          </Text>
        </View>
      </View>

      {/* Time & Attendance */}
      <View>
        <Text style={styles.attendanceHeader}>Your Time & Attendance</Text>
        <View style={styles.attendanceContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={styles.timeSpent}>9:04 hrs</Text>
              <Text style={styles.timeSpentDetail}>Spent Today</Text>
              <Text style={styles.absencesText}>0 Absences in this month</Text>
              <Text style={styles.leaveDetail}>
                182.00 Maternity Leaves {"\n"}Available
              </Text>
              <Text style={styles.leaveDetail}>
                13.5 Other Leaves available
              </Text>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.applyLeaveButton}>
                <Text style={styles.buttonText}>Apply Leave</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.regularizeButton}>
                <Text style={styles.buttonText}>Regularize</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.applyOutdoorButton}>
                <Text style={styles.buttonText}>Apply Outdoor</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Frequently Used */}
      {/* <View style={styles.frequentlyUsedContainer}>
        <Text style={styles.frequentlyUsedHeader}>Frequently Used</Text>
        <View style={styles.frequentlyUsedButtons}>
          <TouchableOpacity style={styles.frequentlyUsedButton}>
            <Text>Team Attendance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.frequentlyUsedButton}>
            <Text>Employee Search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.frequentlyUsedButton}>
            <Text>Attendance</Text>
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    marginVertical: 20,
    backgroundColor: "white",
  },
  announcementContainer: {
    marginBottom: 20,
    backgroundColor: "#fff",
    // padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  announcementText: {
    fontSize: 18,
    color: "#4D5763",
    fontWeight: "bold",
    marginBottom: 8,
  },
  announcementBox: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 2,
    height: 150,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    // backgroundColor: "red",
  },
  noAnnouncementsText: {
    fontSize: 16,
    color: "#666",
  },
  noAnnouncementsImage: {
    width: 50,
    height: 50,
  },
  attendanceContainer: {
    marginBottom: 20,
    backgroundColor: "#fff",

    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  attendanceHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  viewAllText: {
    color: "#007BFF",
    fontWeight: "normal",
  },
  timeSpent: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
  },
  timeSpentDetail: {
    fontSize: 11,
    color: "#666",
    marginBottom: 8,
  },
  absencesText: {
    fontSize: 11,
    marginBottom: 8,
  },
  leaveDetail: {
    fontSize: 11,
    marginBottom: 4,
  },
  buttonContainer: {
    flexDirection: "col",
    justifyContent: "space-between",
    marginTop: 16,
  },
  applyLeaveButton: {
    backgroundColor: "#28A745",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  regularizeButton: {
    backgroundColor: "#DC3545",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  applyOutdoorButton: {
    backgroundColor: "#FFC107",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  frequentlyUsedContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  frequentlyUsedHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  frequentlyUsedButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  frequentlyUsedButton: {
    backgroundColor: "#E0E0E0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
});

export default YourTime;
