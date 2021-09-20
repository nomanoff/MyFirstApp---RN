import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from "../screens/ListingsScreen";
import AccountScreen from "../screens/AccountScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Listings"
      component={ListingsScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
