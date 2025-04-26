import { FlatList, StyleSheet, Text } from "react-native";
import { ArrayColors } from "./src/components/RawData";
import ColorBox from "./src/components/colorBox";

export default function app() {
  return (
    <FlatList
      style={style.container}
      data={ArrayColors}
      keyExtractor={(item) => item.hex}
      renderItem={({ item }) => (
        <ColorBox name={item.name} hexvalue={item.hex} />
      )}
      ListHeaderComponent={() => <Text style={style.text}>List Of Colors</Text>}
    />
  );
}
const style = StyleSheet.create({
  container:{
    marginTop: 40,
    backgroundColor: "#f0f0f0e1",
  },
  text:{
    fontWeight: "bold",
    marginLeft: 10,
  }
});
