import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  CheckBox,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigation = useNavigation();
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignIn = () => {
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
      navigation.navigate("OTPVerification");
    }

  };

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <View style={styles.signinContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.signInText}>Forgot Password</Text>
        </View>
        <Text style={styles.subText}>
          Forgot your password? Enter your email address below and we'll send
          you a password reset link.
          {/* <Text style={styles.starClr}> *</Text> - required field. */}
        </Text>
      </View>

      <View style={styles.mainContainer}>
        <View>
          <Text style={styles.label}>
            Email Address <Text style={styles.starClr}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            placeholder="xyz@myitronline.com"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}
        </View>

        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>Get OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00224D",
    width: "100%",
  },
  starClr: {
    color: "red",
    fontSize: 20,
  },
  signinContainer: {
    flexDirection: "row",
    marginVertical: 20,
    gap: 10,
    alignItems: "center",
  },
  mainContainer: {
    backgroundColor: "white",
    padding: 20,
    gap: 10,
    borderRadius: 30,
    height: "100%",
    marginBottom: 100,
  },
  headContainer: {
    padding: 20,
    paddingTop: 40,
  },
  signInText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  subText: {
    color: "white",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    // marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  label: {
    marginLeft: 10,
    backgroundColor: "white",
  },
  signInButton: {
    backgroundColor: "#00224D",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
  },
  signInButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    // marginTop: -10,
    paddingLeft: 15,
    marginBottom: 10,
  },
});

export default ForgotPassword;
