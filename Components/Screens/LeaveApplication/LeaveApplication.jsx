import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";



const LeaveApplication = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.card1} onPress={() => navigation.navigate("My Leave Application") }>
          <Image
            source={require("./LeaveApplication1.png")}
            style={styles.cardIconImage}
          />
          <Text style={styles.cardText}>My Leave Application</Text>
          <AntDesign style={styles.arrowicon} name="right" size={20} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card2} onPress={() => navigation.navigate("Leaves")}>
          <Image
            source={require("./leave.png")}
            style={styles.cardIconImage}
          />
          <Text style={styles.cardText}>Leaves</Text>
          <AntDesign style={styles.arrowicon2} name="right" size={20} color="gray" />
        </TouchableOpacity>
      </View>
      
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F8F8F8",
  },
  arrowicon:{ 
    left: 70,
  },
  arrowicon2: {
    left: 180,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  card1: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 16,
    borderLeftWidth: 5,
    borderLeftColor: "#0473CE",
    marginVertical: 10,
    borderRadius: 10,
    elevation: 2,
  },
  card2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderLeftWidth: 5,
    borderLeftColor: "#E6294F",
    padding: 16,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 2,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 16,
  },
  cardIconImage: {
    width: 50,
    height: 50,
  },
});

export default LeaveApplication;
