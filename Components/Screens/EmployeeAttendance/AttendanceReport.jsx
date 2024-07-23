import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

const data = [
  {
    id: 1,
    date: "01-Jan-2022",
    inTime: "10:30 PM",
    outTime: "12:00 PM",
    status: "P",
  },
  {
    id: 2,
    date: "02-Jan-2022",
    inTime: "10:30 PM",
    outTime: "12:00 PM",
    status: "A",
  },
  {
    id: 3,
    date: "03-Jan-2022",
    inTime: "10:30 PM",
    outTime: "12:00 PM",
    status: "L",
  },
  {
    id: 4,
    date: "04-Jan-2022",
    inTime: "10:30 PM",
    outTime: "12:00 PM",
    status: "L",
  },
  // ...
];

const AttendanceReport = () => {
  const [selectedReport, setSelectedReport] = useState("Daily Report");

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.inTime}</Text>
      <Text style={styles.cell}>{item.outTime}</Text>
      <Text style={[styles.cell, styles[item.status]]}>{item.status}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            setSelectedReport(
              selectedReport === "Daily Report"
                ? "Weekly Report"
                : "Daily Report"
            );
          }}
        >
          <View style={styles.dropdown}>
            <Text style={styles.dropdownText}>{selectedReport}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.headerCell}>Date</Text>
          <Text style={styles.headerCell}>In Time</Text>
          <Text style={styles.headerCell}>Out Time</Text>
          <Text style={styles.headerCell}>Status</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.date}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 16,
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#6CAEE0",
    padding: 8,
    borderRadius: 4,
  },
  dropdownText: {
    fontSize: 16,
    color: "white",
  },
  table: {
    backgroundColor: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cell: {
    fontSize: 14,
    width: "25%",
    borderColor: "gray",
    borderWidth: 0.5,
    textAlign: "center",
  },
  headerCell: {
    fontSize: 16,
    fontWeight: "bold",
    width: "25%",
    textAlign: "center",
    borderColor: "black",
    borderWidth: 1,
    padding: 8,
  },
  P: {
    color: "#4CAF50",
  },
  A: {
    color: "#FF5722",
  },
  L: {
    color: "#FFC107",
  },
  W: {
    color: "#2196F3",
  },
  H: {
    color: "#90A4AE",
  },
});

export default AttendanceReport;
