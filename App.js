import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  Button,
  Alert,
  Platform,
} from "react-native";
import {
  useDeviceOrientation,
  useDimensions,
} from "@react-native-community/hooks";

import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [image, setImage] = useState(null);

  const requestUserPermission = async () => {
    if (Platform.OS !== "web") {
      const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
      console.log("Result", result);
    }
  };

  useEffect(() => {
    requestUserPermission();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ImageInput imageUri={image} onChangeImage={(uri) => setImage(uri)} />
    </View>
  );
}
