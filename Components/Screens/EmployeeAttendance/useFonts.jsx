// fonts.js
import * as Font from 'expo-font';

export const useFonts = () => {
  return Font.loadAsync({
    'digital-7': require('./digital-7 (mono).ttf'),
    // Add more fonts if needed
  });
};
