import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import backgroundImage from "./CardBg.jpg"; // Adjust the path according to your project structure

const BirthdayCard = () => {
  const [selectedDay, setSelectedDay] = useState("Today");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePress = (day) => {
    setSelectedDay(day);
    setCurrentIndex(0); // Reset index when day is changed
  };

  const [fontsLoaded] = useFonts({
    Edu: require("./Edu-SemiBold.ttf"),
    PlaywriteRegular: require("./PlaywriteRegular.ttf"),
  });

  useEffect(() => {}, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Or a loading spinner
  }

  const yesterdayBirthdays = [
    { name: "John Doe", birthday: "29th July" },
    { name: "Michael Brown", birthday: "29th July" },
    { name: "Sarah Wilson", birthday: "29th July" },
    { name: "Chris Lee", birthday: "29th July" },
    { name: "Patricia Green", birthday: "29th July" },
  ];

  const todayBirthdays = [
    {
      name: "Jane Smith",
      birthday: "30th July",
      imageUrl:
        "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change1.jpg",
    },
    {
      name: "David Harris",
      birthday: "30th July",
      imageUrl:
        "https://neural.love/cdn/thumbnails/1eeaefe8-9667-6250-9ca7-3955697da8e7/433331f6-afe8-5343-b610-e1733160b54c.webp?Expires=1725148799&Signature=AyyMVkGqL0pCpbSsdre9O4zZyTVbr3x-nn4rIh0KnKMdHkJlraC2xeVL2tRjQ-4-ejdaFhH-XTLggkCDqpIrTZIt6l8ge2wXyF9J9xSe-GxAFTih5dxJu5YLQbGu0HDob1Lzpb0Drw5vlxxdX6E7WMCOS4LwSOluE2qPPVdhd8r8rWeDNK7jMww1ltG1PDWVMVv1JH2qBggPvY1ugSd6xF7t6BMtRQ78JsVe4MurI~hahADq5MG08FNZcQCpWjyxNm4~10lOyGzK~viRno7MSg1iCmV5sw8eXt4RQZWYPSYSpMQ6a4eiKolq6pUfIjNA0sxBcX4ecWQpNJNbQ~r2wQ__&Key-Pair-Id=K2RFTOXRBNSROX",
    },
    {
      name: "Emma Clark",
      birthday: "30th July",
      imageUrl:
        "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change1.jpg",
    },
    {
      name: "Olivia Lewis",
      birthday: "30th July",
      imageUrl:
        "https://neural.love/cdn/thumbnails/1eeaefe8-9667-6250-9ca7-3955697da8e7/433331f6-afe8-5343-b610-e1733160b54c.webp?Expires=1725148799&Signature=AyyMVkGqL0pCpbSsdre9O4zZyTVbr3x-nn4rIh0KnKMdHkJlraC2xeVL2tRjQ-4-ejdaFhH-XTLggkCDqpIrTZIt6l8ge2wXyF9J9xSe-GxAFTih5dxJu5YLQbGu0HDob1Lzpb0Drw5vlxxdX6E7WMCOS4LwSOluE2qPPVdhd8r8rWeDNK7jMww1ltG1PDWVMVv1JH2qBggPvY1ugSd6xF7t6BMtRQ78JsVe4MurI~hahADq5MG08FNZcQCpWjyxNm4~10lOyGzK~viRno7MSg1iCmV5sw8eXt4RQZWYPSYSpMQ6a4eiKolq6pUfIjNA0sxBcX4ecWQpNJNbQ~r2wQ__&Key-Pair-Id=K2RFTOXRBNSROX",
    },
    {
      name: "Noah Walker",
      birthday: "30th July",
      imageUrl:
        "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change1.jpg",
    },
  ];

  const tomorrowBirthdays = [
    {
      name: "Alice Johnson",
      birthday: "31st July",
      imageUrl:
        "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change1.jpg",
    },
    {
      name: "Sophia Young",
      birthday: "31st July",
      imageUrl:
        "https://neural.love/cdn/thumbnails/1eeaefe8-9667-6250-9ca7-3955697da8e7/433331f6-afe8-5343-b610-e1733160b54c.webp?Expires=1725148799&Signature=AyyMVkGqL0pCpbSsdre9O4zZyTVbr3x-nn4rIh0KnKMdHkJlraC2xeVL2tRjQ-4-ejdaFhH-XTLggkCDqpIrTZIt6l8ge2wXyF9J9xSe-GxAFTih5dxJu5YLQbGu0HDob1Lzpb0Drw5vlxxdX6E7WMCOS4LwSOluE2qPPVdhd8r8rWeDNK7jMww1ltG1PDWVMVv1JH2qBggPvY1ugSd6xF7t6BMtRQ78JsVe4MurI~hahADq5MG08FNZcQCpWjyxNm4~10lOyGzK~viRno7MSg1iCmV5sw8eXt4RQZWYPSYSpMQ6a4eiKolq6pUfIjNA0sxBcX4ecWQpNJNbQ~r2wQ__&Key-Pair-Id=K2RFTOXRBNSROX",
    },
    {
      name: "Liam King",
      birthday: "31st July",
      imageUrl:
        "https://e0.pxfuel.com/wallpapers/976/171/desktop-wallpaper-dani-daniels.jpg",
    },
    {
      name: "Sasha Gray",
      birthday: "31st July",
      imageUrl:
        "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/2e57ee6e-d812-4338-a52b-52a8afc005f8/width=450/04508-3830103873-RAW%20Photograph,%20close%20up,%20classy%20Koh_SashaGreyv2,%20wearing%20turtleneck%20galadress,%20exclusive%20restaurant,%20michelin,%20candeliers,%20curt.jpeg",
    },
    { name: "James Scott", birthday: "31st July" },
  ];

  const getBirthdaysForSelectedDay = () => {
    switch (selectedDay) {
      case "Yesterday":
        return yesterdayBirthdays;
      case "Today":
        return todayBirthdays;
      case "Tomorrow":
        return tomorrowBirthdays;
      default:
        return [];
    }
  };

  const birthdaysToDisplay = getBirthdaysForSelectedDay();

  const renderCardContent = () => {
    if (birthdaysToDisplay.length === 0) {
      return <Text>Select a day</Text>;
    }

    const currentBirthday = birthdaysToDisplay[currentIndex];

    return (
      <View style={styles.cardContent}>
        <View>
          <Image
            source={{ uri: currentBirthday.imageUrl }} // image URL
            style={styles.image}
          />
        </View>
        <View style={{ justifyContent: "center" }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "PlaywriteRegular",
                // lineHeight: 22,
              }}
            >
              {currentBirthday.name}'s
            </Text>
            <Text style={{ lineHeight: 22 }}>
              <Text
                style={{ fontWeight: "500", fontFamily: "PlaywriteRegular" }}
              >
                Birthday
              </Text>
            </Text>
          </View>
          <TouchableOpacity>
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: "#E2719D",
                  width: 90,
                  height: 22,
                  marginTop: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 50,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 10.5, textAlign: "center" }}
                >
                  SENT WISH
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handleNext = () => {
    if (currentIndex < birthdaysToDisplay.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        {birthdaysToDisplay.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#4D5763",
          paddingBottom: 10,
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        Birthday & Anniversaries
      </Text>
      <View style={styles.buttonContainer}>
        {["Yesterday", "Today", "Tomorrow"].map((day) => (
          <TouchableOpacity key={day} onPress={() => handlePress(day)}>
            <Text
              style={[
                styles.tabsContainer,
                selectedDay === day && styles.activeTab,
              ]}
            >
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ImageBackground
        imageStyle={styles.imageStyle}
        source={backgroundImage}
        style={styles.backgroundImage}
      >
        <View style={styles.card}>
          <TouchableOpacity
            style={[styles.navigationButton, styles.previousButton]}
            onPress={handlePrevious}
            disabled={currentIndex === 0}
          >
            <Text
              style={
                currentIndex === 0 ? styles.disabledButton : styles.activeButton
              }
            >
              <Ionicons
                name="chevron-back"
                style={styles.arrowIcon}
                size={22}
                color="white"
              />
            </Text>
          </TouchableOpacity>
          <View>{renderCardContent()}</View>
          <TouchableOpacity
            style={[styles.navigationButton, styles.nextButton]}
            onPress={handleNext}
            disabled={currentIndex === birthdaysToDisplay.length - 1}
          >
            <Text
              style={
                currentIndex === birthdaysToDisplay.length - 1
                  ? styles.disabledButton
                  : styles.activeButton
              }
            >
              <MaterialIcons
                name="navigate-next"
                style={styles.arrowIcon}
                size={22}
                color="white"
              />
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {renderDots()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#EFEFEF",
    backgroundColor: "#F0F0F2",
    borderRadius: 8,
    justifyContent: "space-between",
    marginBottom: 10,
  },
  tabsContainer: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    color: "gray",
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 50,
  },
  activeTab: {
    color: "#00224D",
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "#00224D",
  },
  backgroundImage: {
    flex: 1,
    objectFit: "cover",
    justifyContent: "center",
    width: "100%",
  },
  imageStyle: {
    borderRadius: 8,
  },
  card: {
    borderRadius: 8,
    width: "100%",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  cardContent: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    paddingVertical: 20,
    borderRadius: 8,
  },
  navigationButton: {
    position: "absolute",
    paddingHorizontal: 2,
    paddingVertical: 10,
    elevation: 1,
    backgroundColor: "#00224D",
    borderRadius: 8,
    transform: [{ translateY: -20 }],
  },
  previousButton: {
    left: 10,
    zIndex: 100,
    top: "50%",
    transform: [{ translateY: -25 }],
  },
  nextButton: {
    right: 10,
    top: "50%",
    transform: [{ translateY: -25 }],
  },
  disabledButton: {
    color: "grey",
  },
  activeButton: {
    color: "blue",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: "#D3D3D3",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#00224D",
  },
});

export default BirthdayCard;
