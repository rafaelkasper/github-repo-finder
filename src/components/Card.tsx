import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import { Repositorios } from "../types/response";
import { useNavigation } from "@react-navigation/native";
import { HomeProps } from "../types/navigator";

interface CardProps {
  item: Repositorios;
}
const Card: FC<CardProps> = ({ item }) => {
  const { navigation } = useNavigation<HomeProps>();

  const goToDetails = () => {
    navigation.navigate("Details", item);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name.toUpperCase()}</Text>
      <Text style={styles.description}>{item.description ?? "-"}</Text>
      <TouchableOpacity style={styles.button} onPress={goToDetails}>
        <Text style={styles.buttonText}>Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

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
});
