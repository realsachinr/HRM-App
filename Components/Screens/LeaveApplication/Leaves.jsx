import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const LeaveScreen = () => {
  const leaveData = [
    {
      date: "01 May Friday",
      type: "Sick Leave",
      days: "2 Days",
      status: "Approved",
    },
    {
      date: "01 May Friday",
      type: "Sick Leave",
      days: "2 Days",
      status: "Approved",
    },
    {
      date: "01 May Friday",
      type: "Sick Leave",
      days: "2 Days",
      status: "Approved",
    },
    {
      date: "01 May Friday",
      type: "Sick Leave",
      days: "2 Days",
      status: "Approved",
    },
    {
      date: "01 May Friday",
      type: "Sick Leave",
      days: "2 Days",
      status: "Approved",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.leaveCountContainer}>
        <View style={styles.leaveCount}>
          <Text style={styles.leaveNumber}>12</Text>
          <Text style={styles.leaveType}>Sick Leave</Text>
        </View>
        <View style={styles.leaveCount}>
          <Text style={styles.leaveNumber}>14</Text>
          <Text style={styles.leaveType}>Casual Leave</Text>
        </View>
        <View style={styles.leaveCount}>
          <Text style={styles.leaveNumber}>06</Text>
          <Text style={styles.leaveType}>Paid Leave</Text>
        </View>
        <View style={styles.leaveCount}>
          <Text style={styles.leaveNumber}>10</Text>
          <Text style={styles.leaveType}>Unpaid Leave</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.applyLeaveButton}>
        <Text style={styles.applyLeaveButtonText}>Apply Leave</Text>

      </TouchableOpacity>
    
      


      <ScrollView style={styles.previousLeavesContainer}>
        <Text style={styles.PrevLeaves}>Previous Leaves</Text>
        <View style={styles.tableHeader}>
          <Text style={styles.headerCell}>Date</Text>
          <Text style={styles.headerCell}>Type</Text>
          <Text style={styles.headerCell}>Days</Text>
          <Text style={styles.headerCell}>Status</Text>
        </View>
        {leaveData.map((leave, index) => (
          <View key={index} style={styles.leaveRow}>
            <Text style={styles.leaveCell}>{leave.date}</Text>
            <Text style={styles.leaveCell}>{leave.type}</Text>
            <Text style={styles.leaveCell}>{leave.days}</Text>
            <Text style={styles.leaveCell}>{leave.status}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  PrevLeaves: {
    fontSize: 20,
    fontWeight: "500",
    color: "#646464",
    marginTop: 10,
  },
  leaveCountContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  leaveCount: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 6,
    width: "48%",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  leaveNumber: {
    fontSize: 24,
    color: "#00224D",
    fontWeight: "bold",
  },
  leaveType: {
    fontSize: 14,
    color: "#666",
  },
  applyLeaveButton: {
    backgroundColor: "#00224D",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 16,
  },
  applyLeaveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  previousLeavesContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  tableHeader: {
    flexDirection: "row",
    borderRadius: 6,
    marginTop: 5,
    backgroundColor: "#f0f0f0",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    justifyContent: "space-between",
  },
  headerCell: {
    width: "25%",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  leaveRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  leaveCell: {
    width: "25%",
    textAlign: "center",
    color: "gray",
    fontSize: 14,
  },
});

export default LeaveScreen;
