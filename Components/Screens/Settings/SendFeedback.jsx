import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';

const FeedbackScreen = () => {
  const [rating, setRating] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [comment, setComment] = useState('');

  const ratingOptions = [
    { icon: 'frown', label: 'Very bad', value: 1 },
    { icon: 'meh', label: 'Bad', value: 2 },
    { icon: 'smile-wink', label: 'Okay', value: 3 },
    { icon: 'smile', label: 'Good', value: 4 },
    { icon: 'heart', label: 'Awesome!', value: 5 },
  ];

  const feedbackOptions = [
    'Delivery speed',
    'Product quality',
    'Politeness and competence of staff',
    'Customer support',
    'Overall service',
  ];

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Share your feedback</Text>
      <Text style={styles.subtitle}>Rate your experience</Text>
      <View style={styles.ratingContainer}>
      {ratingOptions.map((item) => (
          <TouchableOpacity
            key={item.value}
            style={styles.ratingButton}
            onPress={() => setRating(item.value)}
          >
            {item.value === 5 ? (
              <AntDesign
                name={item.icon}
                size={30}
                color={rating === item.value ? '#ffba00' : '#ccc'}
              />
            ) : (
              <FontAwesome5
                name={item.icon}
                size={30}
                color={rating === item.value ? '#ffba00' : '#ccc'}
              />
            )}
            <Text style={styles.ratingText}>
              {rating === item.value ? item.label : ''}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.subtitle}>What did you like?</Text>
      {feedbackOptions.map((option) => (
        <TouchableOpacity
          key={option}
          style={styles.optionContainer}
          onPress={() => toggleOption(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
          <Icon
            name={selectedOptions.includes(option) ? 'check-circle' : 'circle-thin'}
            size={20}
            color={selectedOptions.includes(option) ? '#4caf50' : '#ccc'}
          />
        </TouchableOpacity>
      ))}
      <TextInput
        style={styles.commentInput}
        placeholder="Describe your experience here"
        value={comment}
        onChangeText={setComment}
        multiline
      />
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingButton: {
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    color: '#000',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  commentInput: {
    height: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    elevation: 2,
    backgroundColor: "white",
  },
  submitButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#4caf50',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 50
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FeedbackScreen;
