import { View, StyleSheet } from "react-native";

export const SwitchContainer = ({ children }) => (
  <View style={styles.mainContainer}>{children}</View>
);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
