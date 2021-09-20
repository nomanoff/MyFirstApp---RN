import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getUserLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;

      let location = await Location.getLastKnownPositionAsync({});
      setLocation(location);
    } catch (error) {
      console.log("Oops:", error);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return location;
};
