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

const styles = StyleSheet.create({
  mainContainer: {
    //height: "100%",
    //flexDirection: "row",
    // marginTop: 50,
    // flexDirection: "column",
    // paddingHorizontal: 10,
    // marginBottom: 50,
    // display: "flex",
  },
});
