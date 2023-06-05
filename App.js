import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from "react-native";

export default function App() {
  const [product, setProduct] = useState("");
  const [myProducts, setMyProducts] = useState([]);

  const inputHandler = (value) => {
    setProduct(value);
  };

  const submitHandler = () => {
    console.log(product);
    const idString = Date.now().toString();
    setMyProducts((currentMyProducts) => [{ key: idString, name: product }, ...currentMyProducts]);
    setProduct("");
  };

  return (
    <View style={styles.container}>
      <Text>My List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nouveau Produit"
          onChangeText={inputHandler}
          value={product}
        />
        <Button title="Valider" onPress={submitHandler} />
      </View>
      <FlatList
        data={myProducts}
        renderItem={({ item }) => {
          return <Text style={styles.items}>{item.name}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60,
    alignItems: "center",
  },
  inputContainer: { flexDirection: "row" },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 5,
    paddingLeft: 9,
    width: "90%",
    fontSize: 18,
    flexGrow: 1,
  },
  list: {
    width: "90%",
    marginTop: 10,
    flexDirection: "column",
  },
  items: {
    paddingVertical: 20,
    paddingHorizontal: "auto",
    fontSize: 17,
    marginVertical: 6,
    backgroundColor: "lightgrey",
  },
});
