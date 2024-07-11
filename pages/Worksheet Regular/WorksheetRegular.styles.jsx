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

export const MainContainer = ({ children }) => (
  <ScrollView
    style={{
      width: "100%",
      height: "100%",
    }}
  >
    <View style={styles.mainContainer}>{children}</View>
  </ScrollView>
);

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderColor: "red",
    marginTop: 50,
    flexDirection: "column",
    paddingHorizontal: 10,
    marginBottom: 50,
    display: "flex",
  },
});
