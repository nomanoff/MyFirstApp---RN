import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title:
      "Title 1 , Title 1Title 1Title 1Title 1Title 1Title 1Title 1Title 1Title 1Title 1Title 1Title 1Title 1Title 1Title 1Title 1Title 1Title 1",
    description:
      "Description 1,Description 1,Description 1,Description 1,Description 1,Description 1,Description 1 ",
    image: require("../assets/new_profile.jpg"),
  },
  {
    id: 2,
    title: "Title 2",
    description: "Description 2",
    image: require("../assets/new_profile.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    //Delete the message from
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Selected:", item.id)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "Title 1",
              description: "Description 1",
              image: require("../assets/new_profile.jpg"),
            },
            {
              id: 2,
              title: "Title 2",
              description: "Description 2",
              image: require("../assets/new_profile.jpg"),
            },
            {
              id: 3,
              title: "Title 3",
              description: "Description 3",
              image: require("../assets/new_profile.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
