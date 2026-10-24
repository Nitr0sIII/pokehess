import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "700",
  },
  count: {
    marginLeft: 4,
    color: "#858CA1",
    fontSize: 15,
  },
  controls: {
    flexDirection: "row",
    gap: 8,
    marginLeft: 8,
  },
  button: {
    width: 32,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: "#29bc64",
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "800",
  },
});

export default function () {
  const [getPokeHessBalls, setPokeHessBalls] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>PokéHess Balls :</Text>
      <Text style={styles.count}>{getPokeHessBalls}</Text>

      <View style={styles.controls}>
        <Pressable
          onPress={() => setPokeHessBalls(getPokeHessBalls - 1)}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>−</Text>
        </Pressable>
        <Pressable
          onPress={() => setPokeHessBalls(getPokeHessBalls + 1)}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}
