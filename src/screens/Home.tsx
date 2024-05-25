import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Repositorios } from "../types/response";
import axios from "axios";
import Card from "../components/Card";

const Home = () => {
  const [list, setList] = useState<Repositorios[]>([]);
  const [search, setSearch] = useState("");

  const urlBase = "https://api.github.com/users";

  const getRepository = async () => {
    if (search.length > 2) {
      try {
        const response = await axios.get<Repositorios[]>(
          `${urlBase}/${search}/repos`
        );
        setList(response.data);
        setSearch("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Github Repos Finder</Text>
      <View style={styles.rowContainer}>
        <TextInput onChangeText={setSearch} style={styles.input} />
        <TouchableOpacity style={styles.button} onPress={getRepository}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
  },
  button: {
    width: "20%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252525",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  input: {
    width: "70%",
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
