import { StyleSheet, TextInput, View } from "react-native";

type researchBarProps = {
  value: string;
  callBack: (text: string) => void;
};

export default function ResearchBar({ value, callBack }: researchBarProps) {
  const styles = StyleSheet.create({
    textInput: {
      borderColor: "#FFF",
      borderWidth: 1,
      borderRadius: 7,
      color: "#FFF",
    },
  });
  return (
    <View style={{ width: "50%" }}>
      <TextInput
        onChangeText={callBack}
        value={value}
        style={styles.textInput}
      ></TextInput>
    </View>
  );
}
