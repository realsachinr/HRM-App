import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Slider from "./Components/Screens/SliderScreen/SliderScreen";
import SignInScreen from "./Components/Screens/SignInScreen";
import ForgotPassword from "./Components/Screens/ForgotPassword";
import OTPVerificationScreen from "./Components/Screens/OTPVerificationScreen";
import HomeScreen from "./Components/Screens/HomeScreen/HomeScreen";
import SideBar from "./Components/Screens/Drawer/SideBar";
import EmployeeAttendance from "./Components/Screens/EmployeeAttendance/EmployeeAttendace";
import MyAttendance from "./Components/Screens/EmployeeAttendance/MyAttendance";
import AttendanceReport from "./Components/Screens/EmployeeAttendance/AttendanceReport";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import LeaveApplication from "./Components/Screens/LeaveApplication/LeaveApplication";
import MyLeaveApplication from "./Components/Screens/LeaveApplication/MyLeaveApplication";
import LeaveApplicationInformation from "./Components/Screens/LeaveApplication/LeaveApplicationInformation";
import EmployeeProfile from "./Components/Screens/Drawer/DrawerTabs/EmployeeProfile";
import TermsAndServices from "./Components/Screens/Drawer/DrawerTabs/TermsAndServices";
import PrivacyPolicy from "./Components/Screens/Drawer/DrawerTabs/PrivacyPolicy";
import SalaryStatement from "./Components/Screens/SalaryStatement/SalaryStatement";
import NoticeBoard from "./Components/Screens/NoticeBoard/NoticeBoard";
import Leaves from "./Components/Screens/LeaveApplication/Leaves";
import LeaveStatus from "./Components/Screens/LeaveApplication/LeaveStatus";
import DailyWorkReport from "./Components/Screens/DailyWorkReport/DailyWorkReport";
import Notification from "./Components/Screens/Drawer/DrawerTabs/Notification";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: "#00224D",
          height: 100,
        },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "My Attendance") {
            iconName = "calendar";
          } else if (route.name === "Leave Application") {
            iconName = "paper-plane";
          } else if (route.name === "My Profile") {
            iconName = "person";
          }

          return (
            <View>
              {focused && (
                <View
                  style={{
                    height: 3,
                    backgroundColor: "#00224D",
                    position: "absolute",
                    left: -22,
                    bottom: 34.5,
                    width: "70%",
                  }}
                />
              )}
              <Ionicons name={iconName} size={size} color={color} />
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
        headerLeft: () => {
          const navigation = useNavigation();
          return (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.headerContainer}
            >
              <Ionicons name="arrow-back" size={30} color="white" />
            </TouchableOpacity>
          );
        },
        
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="My Attendance" component={MyAttendance} />
      <Tab.Screen name="Leave Application" component={LeaveApplication} />
      <Tab.Screen name="My Profile" component={EmployeeProfile} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#00224D" />
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleStyle: {
            textTransform: "uppercase",
            fontSize: 18,
            fontWeight: "700",
            color: "white",
          },
          headerTitleAlign: "center",
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.headerContainer}
              >
                <Ionicons name="arrow-back" size={30} color="white" />
              </TouchableOpacity>
            );
          },
          headerStyle: {
            backgroundColor: "#00224D",
            height: 100,
          },
          headerTintColor: "#FFFFFF",
          ...TransitionPresets.SlideFromRightIOS, // Apply the right-side animation
        }}
      >
        <Stack.Screen
          name="Slider"
          component={Slider}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTPVerification"
          component={OTPVerificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={BottomTabNavigator} // Use BottomTabNavigator here
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SideBar" component={SideBar} />
        <Stack.Screen
          name="Employee Attendance"
          component={EmployeeAttendance}
        />
        <Stack.Screen name="Attendance Report" component={AttendanceReport} />
        <Stack.Screen
          name="My Leave Application"
          component={MyLeaveApplication}
        />
        <Stack.Screen
          name="Leave Application Form"
          component={LeaveApplicationInformation}
        />
        <Stack.Screen name="Daily Work Report" component={DailyWorkReport} />
        <Stack.Screen name="Salary Statement" component={SalaryStatement} />
        <Stack.Screen name="Terms And Services" component={TermsAndServices} />
        <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} />
        <Stack.Screen name="Notice Board" component={NoticeBoard} />
        <Stack.Screen
          name="Leaves"
          component={Leaves}
          options={{
            headerRight: () => (
              <TouchableOpacity style={styles.calendarIconContainer}>
                <Ionicons name="calendar" size={30} color="white" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="Leave Status" component={LeaveStatus} />
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    paddingLeft: 15,
  },
  calendarIconContainer: {
    paddingRight: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
