import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ImageInput({ imageUri, onChangeImage }) {
  const requestUserPermission = async () => {
    if (Platform.OS !== "web") {
      const { granted } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!granted)
        alert("You need to enable permissions to access the images.");
    }
  };

  useEffect(() => {
    requestUserPermission();
  }, []);

  const handlePress = () => {
    if (!imageUri) pickImage();
    else
      Alert.alert("Delete", "Are sure you want to delete this image", [
        {
          text: "Yes",
          onPress: () => onChangeImage(null),
        },
        { text: "No" },
      ]);
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 0.5,
      });

      console.log(result);

      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image:", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.medium}
            name="camera"
            size={40}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
  },

  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageInput;
