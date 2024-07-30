import React, { useRef } from "react";
import {
  View,
  Text,
  FlatList,
  Animated,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const { width } = Dimensions.get("window");

const slides = [
  {
    key: "1",
    title: "Track your work & get result",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sit suspendisse aliquam eget lorem viverra tincidunt.",
    image: require("./SliderPic1.png"),
  },
  {
    key: "2",
    title: "Stay organized with team",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sit suspendisse aliquam eget lorem viverra tincidunt.",
    image: require("./SliderPic2.png"), // Adjust path as per your actual image location
  },
  {
    key: "3",
    title: "Keep healthy work-life",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sit suspendisse aliquam eget lorem viverra tincidunt.",
    image: require("./SliderPic3.png"), // Adjust path as per your actual image location
  },
];

const Slider = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const navigation = useNavigation(); // Initialize useNavigation hook

  const handleNext = (index) => {
    if (index < slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: index + 1 });
    } else {
      // Navigate to SignInScreen when on the last slide
      navigation.navigate("SignInScreen");
    }
  };

  const renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        {slides.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const dotSize = scrollX.interpolate({
            inputRange,
            outputRange: [10, 20, 10],
            extrapolate: "clamp",
          });
          const dotColor = scrollX.interpolate({
            inputRange,
            outputRange: ["#d3d3d3", "#00224D", "#d3d3d3"],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={index.toString()}
              style={[
                styles.dot,
                { width: dotSize, backgroundColor: dotColor },
              ]}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        renderItem={({ item, index }) => (
          <View style={styles.slide}>
            {index !== slides.length - 1 && ( // Conditionally render the Skip button
              <View style={styles.skipBtn}>
                <TouchableOpacity
                  style={styles.skipButton}
                  onPress={() => navigation.navigate("SignInScreen")}
                >
                  <Text style={{ color: "white" }}>Skip</Text>
                </TouchableOpacity>
              </View>
            )}
            <Image source={item.image} style={styles.image} />
            <View style={styles.screenContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>{item.text}</Text>
              <View style={styles.btnContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleNext(index)}
                >
                  <Icon name="chevron-right" size={30} color="white" />
                </TouchableOpacity>
              </View>
              {renderDots()}
            </View>
          </View>
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00224D",
  },
  screenContainer: {
    width,
    backgroundColor: "white",
    justifyContent: "center",
    paddingBottom: 50,
    paddingLeft: 30,
    paddingRight: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop: 30,
    // top: 70,
  },
  skipBtn: {
    width,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 60,
    height: 60,
    position: "absolute",
    right: 20,
    top: 30,
    zIndex: 100,
  },
  btnContainer: {
    width,
    alignItems: "flex-end",
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 20,
  },
  slide: {
    width,
    justifyContent: "flex-end",

    alignItems: "center",
  },
  skipButton: {
    paddingVertical: 11,
    backgroundColor: "#00224D",
    fontWeight: "bold",

    top: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    borderRadius: 100,
  },
  image: {
    // top: 20,
    bottom: 50,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    height: "50%", // Adjust height as per your design
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
    marginRight: 50,
    backgroundColor: "#00224D",
    padding: 21,
    borderRadius: 100,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  dotsContainer: {
    flexDirection: "row",
    position: "absolute",
    left: 50,
    top: 200,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default Slider;
