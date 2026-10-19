import Pokecard from "@/components/PokemonCard";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const POKEMONS = [
  { number: 1, name: "Bulbizarre", type: "Plante" },
  { number: 4, name: "Salamèche", type: "Feu" },
  { number: 7, name: "Carapuce", type: "Eau" },
  { number: 25, name: "Pikachu", type: "Électrik" },
  { number: 37, name: "Goupix", type: "Feu" },
  { number: 43, name: "Mystherbe", type: "Plante" },
];

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mon PokéHess</Text>
        <Text style={styles.description}>
          Tout droit venu de la hess, ce Pokéhess fonctionne à moitié.
        </Text>
      </View>

      <View style={styles.summary}>
        <Text style={styles.count}>{POKEMONS.length}</Text>
        <Text style={styles.countLabel}>Pokémons dans ton pokéhess</Text>
      </View>

      <View style={styles.cardSection}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.sectionTitle}>Voici les pokémons découverts</Text>
          {POKEMONS.map((p) => (
            <Pokecard name={p.name} id={p.number} type={p.type} />
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
    paddingTop: 72,
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
  summary: {
    flexDirection: "row",
    alignItems: "baseline",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 18,
    backgroundColor: "#171A24",
    borderWidth: 1,
    borderColor: "#2C3142",
  },
  count: {
    marginRight: 12,
    color: "#F7F8FC",
    fontSize: 30,
    fontWeight: "800",
  },
  countLabel: {
    color: "#858CA1",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.9,
  },
  cardSection: {
    width: "100%",
    maxWidth: 420,
    marginTop: 36,
  },
  sectionTitle: {
    marginBottom: 14,
    color: "#D9DCE7",
    fontSize: 14,
    fontWeight: "700",
  },
  scrollContent: {
    alignItems: "center",
  },
});
