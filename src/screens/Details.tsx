import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { Repositorios } from "../types/response";

const Details = () => {
  const route = useRoute();

  const item = route.params as Repositorios;
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item.owner.avatar_url,
          }}
        />
        <Text>{item.owner.login}</Text>
      </View>
      <Text style={styles.title}>{item.name.toUpperCase()}</Text>
      <Text style={styles.description}>{item.description ?? "-"}</Text>
      <Text> {item.stargazers_count}</Text>
      <Text>{item.watchers_count}</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#a1b2c3d4",
    marginHorizontal: 10,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
  },
  description: {
    fontSize: 18,
  },
  button: {
    marginVertical: 10,
    width: "40%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252525",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
