import Help from "@/components/Help";
import PokeballsCounter from "@/components/PokeballsCounter";
import Pokecard from "@/components/PokemonCard";
import ResearchBar from "@/components/ResearchBar";
import { POKEMONS } from "@/listPokemons";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const pokemonType: Record<string, string> = {
  Tous: "#A59D9D",
  Plante: "#78C850",
  Feu: "#F08030",
  Eau: "#6890F0",
  Électrik: "#F8D030",
  Insecte: "#A8B820",
  Normal: "#A8A878",
  Poison: "#A040A0",
  Vol: "#A890F0",
  Combat: "#C03028",
  Sol: "#E0C068",
  Roche: "#B8A038",
  Psy: "#F85888",
  Glace: "#98D8D8",
  Spectre: "#705898",
  Dragon: "#7038F8",
  Acier: "#B8B8D0",
  Ténèbres: "#705848",
  Fée: "#EE99AC",
};

const pokemonTypeKeys = Object.keys(pokemonType);

export default function Index() {
  const [getSelectedType, setSelectedType] = useState(0);
  const [getFilterInput, setFilterInput] = useState("");
  const [getCaptured, setCaptured] = useState<number[]>([]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mon PokéHess</Text>
        <Text style={styles.description}>
          Tout droit venu de la hess, ce Pokéhess fonctionne à moitié.
        </Text>
        <Help />
      </View>

      <PokeballsCounter />

      <View style={styles.filterStyles}>
        <Pressable
          style={[
            styles.button,
            { backgroundColor: pokemonType[pokemonTypeKeys[getSelectedType]] },
            { width: "50%" },
          ]}
          onPress={() => {
            getSelectedType + 1 == pokemonTypeKeys.length
              ? setSelectedType(0)
              : setSelectedType(getSelectedType + 1);
          }}
        >
          <Text>{pokemonTypeKeys[getSelectedType]}</Text>
        </Pressable>

        <ResearchBar
          value={getFilterInput}
          callBack={setFilterInput}
        ></ResearchBar>
      </View>

      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        data={POKEMONS.filter(
          (p) =>
            (getSelectedType === 0 ||
              p.type === pokemonTypeKeys[getSelectedType]) &&
            p.name.includes(getFilterInput),
        )}
        keyExtractor={(item) => String(item.number)}
        renderItem={({ item }) => (
          <Pokecard
            onPressed={() => setCaptured(() => [...getCaptured, item.number])}
            name={item.name}
            id={item.number}
            type={item.type}
            alreadyCaptured={getCaptured.includes(item.number)}
          />
        )}
      />
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
    marginBottom: 15,
  },
  title: {
    marginBottom: 10,
    color: "#F08030",
    fontSize: 35,
    fontWeight: "800",
  },
  description: {
    marginTop: 12,
    color: "#858CA1",
    fontSize: 16,
  },
  sectionTitle: {
    marginBottom: 14,
    color: "#D9DCE7",
    fontSize: 14,
    fontWeight: "700",
  },
  scrollViewContent: {
    alignItems: "center",
    paddingVertical: 20,
  },
  button: {
    backgroundColor: "#F08030",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
  whiteText: {
    color: "#FFF",
    marginVertical: 5,
  },
  filterStyles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  columnWrapper: {
    justifyContent: "center",
  },
});
