import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import Icon from "react-native-vector-icons/FontAwesome";
import moment from "moment";

const Summary = () => {
  const currentDate = moment().format('YYYY-MM-DD');

  const markedDates = {
    [currentDate]: {
      selected: true,
      selectedColor: '#00adf5', // Customize the color as needed
      selectedTextColor: 'white',
    },
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={[styles.box, styles.absents]}>
            <Icon name="user-times" size={24} color="white" />
            <Text style={styles.boxText}>0</Text>
            <Text style={styles.boxText}>Absents</Text>
          </View>
          <View style={[styles.box, styles.onLeave]}>
            <Icon name="plane" size={24} color="white" />
            <Text style={styles.boxText}>0</Text>
            <Text style={styles.boxText}>On Leave</Text>
          </View>
          <View style={[styles.box, styles.halfDays]}>
            <Icon name="clock-o" size={24} color="white" />
            <Text style={styles.boxText}>0</Text>
            <Text style={styles.boxText}>Half Days</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.box}>
            <Icon name="clock-o" size={24} color="black" />
            <Text style={styles.employeeUpdate}>0</Text>
            <Text style={styles.employeeTitles}>Late In</Text>
          </View>
          <View style={styles.box}>
            <Icon name="sign-out" size={24} color="black" />
            <Text style={styles.employeeUpdate}>0</Text>
            <Text style={styles.employeeTitles}>Early Out</Text>
          </View>
          <View style={styles.box}>
            <Icon name="hourglass-end" size={24} color="black" />
            <Text style={styles.employeeUpdate}>18:0</Text>
            <Text style={styles.employeeTitles}>Deficit Hours</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.box}>
            <Icon name="clock-o" size={24} color="black" />
            <Text style={styles.employeeUpdate}>163.15</Text>
            <Text style={styles.employeeTitles}>Total WH</Text>
          </View>
          <View style={styles.box}>
            <Icon name="calendar-check-o" size={24} color="black" />
            <Text style={styles.employeeUpdate}>19</Text>
            <Text style={styles.employeeTitles}>Day(s) Worked</Text>
          </View>
          <View style={styles.box}>
            <Icon name="clock-o" size={24} color="black" />
            <Text style={styles.employeeUpdate}>8.59</Text>
            <Text style={styles.employeeTitles}>Avg. WH</Text>
          </View>
        </View>
      </View>
      <View style={styles.calendarContainer}>
        <Calendar
          style={styles.calendarBox}
          current={currentDate}
          minDate={'2022-05-10'}
          maxDate={'2024-12-31'}
          onDayPress={(day) => {
            console.log('selected day', day);
          }}
          onMonthChange={(month) => {
            console.log('month changed', month);
          }}
          hideArrows={false}
          renderArrow={(direction) => (
            <Icon name={direction === 'left' ? 'arrow-left' : 'arrow-right'} size={24} color="black" />
          )}
          hideExtraDays={true}
          disableMonthChange={true}
          hideDayNames={false}
          showWeekNumbers={false}
          onPressArrowLeft={(subtractMonth) => subtractMonth()}
          onPressArrowRight={(addMonth) => addMonth()}
          disableArrowLeft={false}
          disableArrowRight={false}
          disableAllTouchEventsForDisabledDays={true}
          enableSwipeMonths={true}
          markedDates={markedDates}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f9",
    padding: 10,
  },
  employeeTitles: {
    color: "#797979",
  },
  calendarBox: {
    borderRadius: 20,
    paddingBottom: 20,
  },
  employeeUpdate: {
    color: "#404040",
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "white",
  },
  absents: {
    backgroundColor: "#f44336",
  },
  onLeave: {
    backgroundColor: "#9c27b0",
  },
  halfDays: {
    backgroundColor: "#ffeb3b",
  },
  boxText: {
    color: "white",
    fontWeight: "bold",
  },
  calendarContainer: {
    marginTop: 20,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
});

export default Summary;
