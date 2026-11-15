import { POKEMONS } from "@/listPokemons";
import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function PokemonDetailScreen() {
  const ARTWORK =
    "https://raw.githubusercontent.com/PokeAPI/sprites" +
    "/master/sprites/pokemon/other/official-artwork/";

  const { number } = useLocalSearchParams();

  const pokemon = POKEMONS.find((p) => p.number === Number(number));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pokémon #{number}</Text>
      <Image source={{ uri: `${ARTWORK}${number}.png` }} style={styles.image} />
      <Text style={styles.text}>{pokemon?.type}</Text>
      <Text style={styles.text}>{pokemon?.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1017",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#F7F8FC",
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
  },
});
