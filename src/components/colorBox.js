import { View,Text, StyleSheet } from "react-native";

function ColorBox({name, hexvalue, }) {
    const backgroundColor ={backgroundColor: hexvalue} 
    return (
      <View style={[style.container, backgroundColor]}>
        <Text style={style.text}>
          {name}, {hexvalue}
        </Text>
      </View>
    );
}
export default ColorBox;
const style = StyleSheet.create({
  container: {
    padding: 20,
    margin: 4,
    marginHorizontal: 15,
    borderRadius: 10,
    borderWidth: 2,
    
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
});