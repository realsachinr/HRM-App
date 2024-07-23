import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const SalaryStatement = () => {
  const salaryData = {
    employeeName: "John Doe",
    employeeId: "EMP12345",
    department: "Engineering",
    month: "July 2024",
    basicSalary: 5000,
    hra: 2000,
    otherAllowances: 1000,
    deductions: 1500,
    netSalary: 6500,
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.salaryContainer}>
        <View style={styles.row}>
          <Text style={styles.label}>Employee Name:</Text>
          <Text style={styles.value}>{salaryData.employeeName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Employee ID:</Text>
          <Text style={styles.value}>{salaryData.employeeId}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Department:</Text>
          <Text style={styles.value}>{salaryData.department}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Month:</Text>
          <Text style={styles.value}>{salaryData.month}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Basic Salary:</Text>
          <Text style={styles.value}>${salaryData.basicSalary}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>HRA:</Text>
          <Text style={styles.value}>${salaryData.hra}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Other Allowances:</Text>
          <Text style={styles.value}>${salaryData.otherAllowances}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Deductions:</Text>
          <Text style={styles.value}>${salaryData.deductions}</Text>
        </View>
        <View style={[styles.row, styles.totalRow]}>
          <Text style={styles.label}>Net Salary:</Text>
          <Text style={styles.value}>${salaryData.netSalary}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: "100%",
    backgroundColor: "#f5f5f5",
  },
  salaryContainer: {
    backgroundColor: "#fff",

    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
  value: {
    fontSize: 16,
  },
  totalRow: {
    backgroundColor: "#e0ffe0",
  },
});

export default SalaryStatement;
