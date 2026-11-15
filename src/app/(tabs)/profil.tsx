import { StyleSheet, Text, View } from "react-native";

export default function Profil() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon Profil</Text>
      <Text style={styles.prenom}>Este</Text>
      <Text style={styles.pokemon}>Pokémon préféré : Evolie</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  prenom: {
    fontSize: 20,
    marginBottom: 10,
    color: "#444",
  },
  pokemon: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
    color: "#6b4c9a",
  },
  image: {
    width: 220,
    height: 220,
    resizeMode: "contain",
  },
});
