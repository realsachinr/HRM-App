import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignIn = () => {
    let valid = true;

    // Email validation
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    // Password validation
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      valid = false;
    } else if (!/(?=.*[a-z])/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      valid = false;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      valid = false;
    } else if (!/(?=.*\d)/.test(password)) {
      setPasswordError("Password must contain at least one digit.");
      valid = false;
    } else if (!/(?=.*[@$!%*?&])/g.test(password)) {
      setPasswordError("Password must contain at least one special character.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      // Handle successful sign in
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "HomeScreen" }],
        })
      );
      console.log("Sign In Successful");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <View style={styles.signinContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.signInText}>Sign In</Text>
        </View>
        <Text style={styles.subText}>
          Sign in now to begin an amazing journey
        </Text>
      </View>

      <View style={styles.mainContainer}>
        <View>
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
          <View>
            <Text style={styles.label}>
              Password <Text style={styles.starClr}>*</Text>
            </Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? "eye-off" : "eye"}
                  size={20}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
            {passwordError ? (
              <Text style={styles.errorText}>{passwordError}</Text>
            ) : null}
          </View>
        </View>

        <View style={styles.optionsContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>Sign In</Text>
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
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  eyeIcon: {
    padding: 10,
    right: 50,
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
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginVertical: 10,
  },
  label: {
    marginLeft: 10,
    backgroundColor: "white",
    color: "#00224D",
  },

  forgotPasswordText: {
    color: "#00224D",
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
  signUpText: {
    textAlign: "center",
    color: "#1e90ff",
  },
  errorText: {
    color: "red",
    paddingLeft: 15,
    marginBottom: 10,
  },
});

export default SignInScreen;
