// App.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

const holidays = [
  { date: '15 Aug', name: 'Independence Day', day: 'Thursday', color: '#00BFFF' },
  { date: '19 Aug', name: 'Raksha Bandhan', day: 'Monday', color: '#7CFC00' },
  { date: '26 Aug', name: 'Janmashtami', day: 'Monday', color: '#40E0D0' },
  { date: '02 Oct', name: 'Gandhi Jayanti', day: 'Wednesday', color: '#9370DB' },
  { date: '13 Oct', name: 'Dussehra', day: 'Sunday', color: '#1E90FF' },
  { date: '01 Nov', name: 'Diwali', day: 'Friday', color: '#008000' },
  { date: '03 Nov', name: 'Bhai Dooj', day: 'Sunday', color: '#00BFFF' }
];

const HolidayItem = ({ holiday }) => (
  <View style={[styles.holidayItem, ]}>
    <Text style={[styles.date, { backgroundColor: holiday.color }]}>{holiday.date}</Text>
    <View>
      <Text style={styles.name}>{holiday.name}</Text>
      <Text style={styles.day}>{holiday.day}</Text>
    </View>
  </View>
);

const Holidays = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={holidays}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => <HolidayItem holiday={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  holidayItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:"white",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    borderRadius:10,
    color: 'white',
    marginRight: 15,
  },
  name: {
    fontSize: 16,
    color: 'black',
    
  },
  day: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Holidays;
