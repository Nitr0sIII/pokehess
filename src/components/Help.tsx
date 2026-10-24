import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Help() {
  const [getHelp, setHelp] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => setHelp(!getHelp)}>
        <Text style={styles.text}>
          {getHelp ? "Cacher aide" : "Afficher aide"}
        </Text>
      </Pressable>
      <Text style={styles.text}>
        {getHelp && "De l'aide.... Non, c'est la hess"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    gap: 5,
  },
  text: {
    color: "#FFF",
    fontWeight: "800",
    padding: 5,
  },
  button: {
    borderRadius: 5,
    backgroundColor: "#2986bc",
    padding: 8,
    alignSelf: "flex-start",
  },
});
