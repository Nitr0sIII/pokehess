import Pokecard from "@/components/PokemonCard";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const POKEMONS = [
  { number: 1, name: "Bulbizarre", type: "Plante" },
  { number: 4, name: "Salamèche", type: "Feu" },
  { number: 7, name: "Carapuce", type: "Eau" },
  { number: 25, name: "Pikachu", type: "Électrik" },
  { number: 37, name: "Goupix", type: "Feu" },
  { number: 43, name: "Mystherbe", type: "Plante" },
];

export default function Index() {
  const [getFilterFire, setFilterFire] = useState(false);

  const displayedPokemons = getFilterFire
    ? POKEMONS.filter((p) => p.type === "Feu")
    : POKEMONS;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mon PokéHess</Text>
        <Text style={styles.description}>
          Tout droit venu de la hess, ce Pokéhess fonctionne à moitié.
        </Text>
      </View>

      <Pressable
        onPress={() => setFilterFire(!getFilterFire)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{getFilterFire ? "Tous" : "Feu"}</Text>
      </Pressable>

      <View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.sectionTitle}>
            {displayedPokemons.length} pokémons découverts
          </Text>
          {displayedPokemons.map((p) => (
            <Pokecard
              key={p.number}
              name={p.name}
              id={p.number}
              type={p.type}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1017",
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  header: {
    maxWidth: 420,
    marginBottom: 32,
  },
  title: {
    marginBottom: 10,
    color: "#F08030",
    fontSize: 35,
    fontWeight: "800",
    letterSpacing: 1.6,
  },
  description: {
    maxWidth: 340,
    marginTop: 12,
    color: "#858CA1",
    fontSize: 16,
    lineHeight: 24,
  },

  sectionTitle: {
    marginBottom: 14,
    color: "#D9DCE7",
    fontSize: 14,
    fontWeight: "700",
  },
  scrollViewContent: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#F08030",
    borderRadius: 15,
    paddingVertical: 2,
    paddingHorizontal: 7,

    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});
