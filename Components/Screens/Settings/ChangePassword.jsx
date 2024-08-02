import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function ChangePassword() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.subtitle}>
          Your password must be at least 6 characters and should include a
          combination of numbers, letters and special characters (!$@%).
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Current password"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="New password"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Retype new password"
          secureTextEntry
        />

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>
            Forgotten your password?
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.submitButton}>CHANGE PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },

  input: {
    height: 50,
    backgroundColor: "white",
    color: "black",
    borderRadius: 9,
    elevation: 2,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxLabel: {
    color: "white",
  },
  forgotPassword: {
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: "#1E90FF",
  },
  buttonContainer: {
    borderRadius: 50,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00224D",
   
  },
  submitButton: {
    color: "white",
    fontWeight: 'bold',
  },
});
