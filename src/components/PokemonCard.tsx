import { Image, StyleSheet, Text, View } from "react-native";

type PokeCardProps = {
  name: string;
  id: number;
  type: string;
};

const ARTWORK =
  "https://raw.githubusercontent.com/PokeAPI/sprites" +
  "/master/sprites/pokemon/other/official-artwork/";

const TYPE_COLORS: Record<string, string> = {
  Plante: "#78C850",
  Feu: "#F08030",
  Eau: "#6890F0",
  Électrik: "#F8D030",
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    maxWidth: 360,
    minHeight: 132,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    margin: 8,
    borderRadius: 24,
    backgroundColor: "#171A24",
    borderWidth: 1,
    borderColor: "#2C3142",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 18,
  },
  artworkContainer: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
    borderRadius: 20,
    backgroundColor: "#222735",
  },
  artwork: {
    width: 92,
    height: 92,
  },
  details: {
    justifyContent: "center",
    gap: 8,
  },
  number: {
    color: "#858CA1",
    fontSize: 12,
    fontWeight: "700",
  },
  name: {
    color: "#F7F8FC",
    fontSize: 22,
    fontWeight: "800",
  },
  typeBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
  },
  type: {
    color: "#10131B",
    fontSize: 11,
    fontWeight: "800",
  },
});

export default function Pokecard({ name, id, type }: PokeCardProps) {
  const color = TYPE_COLORS[type] ?? "#A78BFA";

  return (
    <View style={styles.card}>
      <View
        style={[
          styles.artworkContainer,
          { borderColor: color, borderWidth: 1 },
        ]}
      >
        <Image
          source={{ uri: `${ARTWORK}${id}.png` }}
          style={styles.artwork}
          accessibilityLabel={`Illustration de ${name}`}
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.number}>#{id}</Text>
        <Text style={styles.name}>{name}</Text>
        <View style={[styles.typeBadge, { backgroundColor: color }]}>
          <Text style={styles.type}>{type}</Text>
        </View>
      </View>
    </View>
  );
}
