import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Button } from "@rneui/themed";

const weekDays = [
  "Luni",
  "Marti",
  "Miercuri",
  "Joi",
  "Vineri",
  "Sambata",
  "Duminica",
];

function HomePage(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={weekDays}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Button
            size="lg"
            title={item}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
            containerStyle={styles.containerStyle}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // flexWrap: "wrap",
    backgroundColor: "#282C33",
  },
  buttonStyle: {
    backgroundColor: "rgba(78, 116, 289, 1)",
    borderRadius: 5,
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 23,
  },
  containerStyle: {
    marginHorizontal: 25,
    // height: 200,
    // width: 200,
    marginVertical: 10,
  },
});

export default HomePage;
