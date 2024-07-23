import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LeaveStatus = ({ route }) => {
  const { leaveDays, reason } = route.params;

  const recommendLeave = () => {
    // Here you can add logic for recommending leave based on leaveDays and reason
    if (leaveDays > 5) {
      return 'Recommended: Split your leave into multiple periods to ensure continuity.';
    } else {
      return 'Your leave request looks good!';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leave Status</Text>
      <Text>Requested Leave Days: {leaveDays}</Text>
      <Text>Reason: {reason}</Text>
      <Text style={styles.recommendation}>{recommendLeave()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  recommendation: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LeaveStatus;
