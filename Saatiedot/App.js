import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Position from "./components/Position";
import Weather from "./components/Weather";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Current Weather</Text>
      <Position />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});