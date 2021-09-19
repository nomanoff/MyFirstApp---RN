import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
}
