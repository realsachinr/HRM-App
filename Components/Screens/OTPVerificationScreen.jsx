import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const OTPVerificationScreen = ({ initialSeconds = 60 }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resendDisabled, setResendDisabled] = useState(true);
  const inputRefs = useRef([]);
  const navigation = useNavigation();
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let timer;
    if (seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      setResendDisabled(false);
    }
    return () => clearInterval(timer);
  }, [seconds]);

  const handleOtpChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const backHandler = () => {
    navigation.goBack();
  };

  const handleResend = () => {
    setResendDisabled(true);
    setSeconds(initialSeconds);
    // Logic to resend OTP
  };

  const handleVerify = () => {
    const otpValue = otp.join("");
    // Logic to verify OTP
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTitleContainer}>
          <TouchableOpacity onPress={backHandler}>
            <Ionicons name="arrow-back" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Mobile Number Verify</Text>
        </View>
        <Text style={styles.subtitle}>
          Enter the 6 digit code sent to your mobile number
        </Text>
      </View>
      <View style={styles.fullOtpContainer}>
        <View style={styles.OtpInputContainer}>
          <Text style={styles.mainOtpBox}>OTP Input</Text>
        </View>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={(value) => handleOtpChange(index, value)}
              ref={(ref) => (inputRefs.current[index] = ref)}
            />
          ))}
        </View>
        <TouchableOpacity disabled={resendDisabled} onPress={handleResend}>
          <Text style={resendDisabled ? styles.resendDisabled : styles.resend}>
            Resend OTP
          </Text>
        </TouchableOpacity>
        <View style={styles.otpBox}>
          <Text style={styles.otptext}>You can request OTP after {seconds} seconds</Text>
        </View>
        <Button
          mode="contained"
          onPress={handleVerify}
          style={styles.verifyButton}
        >
          Verify
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#00224D",
  },
  otpBox: {
    flexDirection: "row",
    alignItems: "center",
    bottom: 17,
  },
  otptext: {
    color: "orange",
  },
  OtpInputContainer: {
    width: "100%",
    justifyContent: "center",
    paddingVertical: 20,
    paddingLeft: 15,
    marginTop: 15,
    marginBottom: 20,
    backgroundColor: "#FEF4EA",
    borderLeftWidth: 7,
    borderRadius: 7,
    borderColor: "#FF8A19",
  },
  mainOtpBox: {
    fontWeight: "bold",
    fontSize: 17,
  },
  headerTitleContainer: {
    width: "100%",
    gap: 12,
    alignItems: "center",
    flexDirection: "row",
  },
  headerContainer: {
    gap: 10,
    padding: 16,
    paddingTop: 40,
    marginVertical: 20,
    width: "100%",
  },
  fullOtpContainer: {
    width: "100%",
    flex: 1,
    gap: 8,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    color: "#B2C3FA",
    marginBottom: 16,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#00224D",
    textAlign: "center",
    fontSize: 18,
    marginRight: 8,
  },
  resend: {
    fontSize: 16,
    color: "#00224D",
    fontWeight: "bold",
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 30,
    backgroundColor: "#EAE9EF",
    textAlign: "center",
    marginBottom: 16,
  },
  resendDisabled: {
    fontSize: 16,
    color: "gray",
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 30,
    backgroundColor: "#EAE9EF",
    textAlign: "center",
    marginBottom: 16,
  },
  verifyButton: {
    width: "100%",
    padding: 10,
    backgroundColor: "#00224D",
  },
});

export default OTPVerificationScreen;
