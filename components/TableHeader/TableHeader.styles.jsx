import {
  View,
  Text,
  StyleSheet,
  TextInput as RNTextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";

export const MainContainer = ({ children, customStyles }) => (
  <View style={[styles.mainContainer, customStyles]}>{children}</View>
);

export const Label = ({ children }) => (
  <Text style={[styles.label]}>{children}</Text>
);

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#c1bfbf",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
  },
});
