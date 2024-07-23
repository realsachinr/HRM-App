import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const DailyWorkReport = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [employeeID, setEmployeeID] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [date, setDate] = useState("");
  const [tasksCompleted, setTasksCompleted] = useState("");
  const [hoursWorked, setHoursWorked] = useState("");
  const [challengesFaced, setChallengesFaced] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const handleSubmit = () => {
    // Handle form submission logic
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.label}>Employee Name</Text>
        <TextInput
          style={styles.input}
          value={employeeName}
          onChangeText={setEmployeeName}
        />

        <Text style={styles.label}>Employee ID</Text>
        <TextInput
          style={styles.input}
          value={employeeID}
          onChangeText={setEmployeeID}
        />

        <Text style={styles.label}>Department</Text>
        <TextInput
          style={styles.input}
          value={department}
          onChangeText={setDepartment}
        />

        <Text style={styles.label}>Designation</Text>
        <TextInput
          style={styles.input}
          value={designation}
          onChangeText={setDesignation}
        />

        <Text style={styles.label}>Date</Text>
        <TextInput
          style={styles.input}
          value={date}
          onChangeText={setDate}
        />

        <Text style={styles.label}>Tasks Completed</Text>
        <TextInput
          style={styles.textArea}
          value={tasksCompleted}
          onChangeText={setTasksCompleted}
          multiline
        />

        <Text style={styles.label}>Hours Worked</Text>
        <TextInput
          style={styles.input}
          value={hoursWorked}
          onChangeText={setHoursWorked}
        />

        <Text style={styles.label}>Challenges Faced</Text>
        <TextInput
          style={styles.textArea}
          value={challengesFaced}
          onChangeText={setChallengesFaced}
          multiline
        />

        <Text style={styles.label}>Additional Notes</Text>
        <TextInput
          style={styles.textArea}
          value={additionalNotes}
          onChangeText={setAdditionalNotes}
          multiline
        />

        <View style={styles.buttonContainer}>
          <Button title="Submit Report" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    height: 100,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 30, // Adds space below the button
  },
});

export default DailyWorkReport;
