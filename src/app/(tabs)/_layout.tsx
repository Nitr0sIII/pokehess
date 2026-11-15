import { Tabs } from "expo-router";
export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Pokédex" }} /> 2
      <Tabs.Screen name="profil" options={{ title: "Profil" }} />
    </Tabs>
  );
}
