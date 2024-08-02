import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import Summary from "./Summary";
import ApplyLeaves from "./ApplyLeaves";
import Holidays from "./Holidays";
import TeamAttendance from "./TeamAttendance"
import MyLeaveApplication from "./MyLeaveApplication";

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 100,
          justifyContent: "center",
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          let IconComponent = Ionicons;
          let iconStyle = {
            fontSize: 20,
          };

          if (route.name === "Summary") {
            IconComponent = FontAwesome5;
            iconName = "clipboard-list";
          } else if (route.name === "Apply Leaves") {
            iconName = "calendar";
          } else if (route.name === "Holidays") {
            iconName = "settings";
          } else if (route.name === "Team Attendance") {
            iconName = "person";
          }

          return (
            <View style={styles.iconContainer}>
              <IconComponent
                name={iconName}
                size={30}
                color={color}
                style={iconStyle}
              />
              <Text style={[styles.iconText, { color }]}>{route.name}</Text>
            </View>
          );
        },
        tabBarActiveTintColor: "#00224D",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        headerTitleStyle: {
          textTransform: "uppercase",
          fontSize: 18,
          fontWeight: "700",
          color: "white",
        },
        headerTitleAlign: "center",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.headerContainer}
          >
            <Ionicons name="arrow-back" size={30} color="white" />
          </TouchableOpacity>
        ),
      })}
    >
      <Tab.Screen name="Summary" component={Summary} />
      <Tab.Screen name="Apply Leaves" component={MyLeaveApplication} />
      <Tab.Screen name="Holidays" component={Holidays} />
      <Tab.Screen name="Team Attendance" component={TeamAttendance} />
    
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    // marginVertical: 1,
    

  },
  iconText: {
    marginTop: 5,
    fontSize: 12,
    paddingBottom: 10, 
    width: 100, 
    textAlign: "center",
    
  },
  headerContainer: {
    paddingLeft: 10,
  },
});
