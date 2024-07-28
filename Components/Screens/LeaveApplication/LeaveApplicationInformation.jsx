import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
const LeaveApplicationInformation = () => {
  const [leaveType, setLeaveType] = React.useState('');
  const [fromDate, setFromDate] = React.useState(new Date());
  const [toDate, setToDate] = React.useState(new Date());
  const [showFromDatePicker, setShowFromDatePicker] = React.useState(false);
  const [showToDatePicker, setShowToDatePicker] = React.useState(false);
  const [dayType, setDayType] = React.useState('Full Day');
  const [description, setDescription] = React.useState('');

  const onFromDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || fromDate;
    setShowFromDatePicker(false);
    setFromDate(currentDate);
  };

  const onToDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || toDate;
    setShowToDatePicker(false);
    setToDate(currentDate);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Leave Application Information</Text>
        
        <Text style={styles.subLabel}>Leave Type</Text>
        <Picker
          selectedValue={leaveType}
          style={styles.picker}
          onValueChange={(itemValue) => setLeaveType(itemValue)}
        >
          <Picker.Item label="Select leave type" value="" />
          <Picker.Item label="Sick Leave" value="sick" />
          <Picker.Item label="Casual Leave" value="casual" />
        </Picker>
        
        <Text style={styles.subLabel}>From Date</Text>
        <TouchableOpacity onPress={() => setShowFromDatePicker(true)}>
          <View style={styles.datePicker}>
            <Text>{fromDate.toDateString()}</Text>
            <Icon name="calendar" size={20} />
          </View>
        </TouchableOpacity>
        {showFromDatePicker && (
          <DateTimePicker
            value={fromDate}
            mode="date"
            display="default"
            onChange={onFromDateChange}
          />
        )}

        <Text style={styles.subLabel}>To Date</Text>
        <TouchableOpacity onPress={() => setShowToDatePicker(true)}>
          <View style={styles.datePicker}>
            <Text>{toDate.toDateString()}</Text>
            <Icon name="calendar" size={20} />
          </View>
        </TouchableOpacity>
        {showToDatePicker && (
          <DateTimePicker
            value={toDate}
            mode="date"
            display="default"
            onChange={onToDateChange}
          />
        )}

        <View style={styles.dayTypeContainer}>
          <TouchableOpacity onPress={() => setDayType('Full Day')}>
            <View style={styles.radioButton}>
              <Icon name={dayType === 'Full Day' ? 'dot-circle-o' : 'circle-o'} size={20} />
              <Text style={styles.radioText}>Full Day</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setDayType('Half Day')}>
            <View style={styles.radioButton}>
              <Icon name={dayType === 'Half Day' ? 'dot-circle-o' : 'circle-o'} size={20} />
              <Text style={styles.radioText}>Half Day</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.subLabel}>Description</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type Description"
          value={description}
          onChangeText={setDescription}
        />

        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply For Leave</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
  formContainer: {
    backgroundColor: '#fff',
    margin: 20,
    top: 30,
    marginBottom: 50,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subLabel: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  picker: {
    height: 50,
    marginBottom: 15,
  },
  datePicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  dayTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioText: {
    marginLeft: 5,
  },
  textInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  applyButton: {
    backgroundColor: '#00224D',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LeaveApplicationInformation;
