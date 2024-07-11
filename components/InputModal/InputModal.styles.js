import {
  TextInput as RNTextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    width: "100%",
    //backgroundColor: 'rgba(187, 168, 142, 0.877)',
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "85%",
    height: "80%",
    borderRadius: 5,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 19,
    shadowColor: "#a29a93",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 10,
    shadowRadius: 6,
  },
});

export const InputContainer = ({ children, onPress }) => (
  <TouchableOpacity style={styles.inputContainer} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

export const TextInput = ({ value, onChangeText, multiline }) => (
  <RNTextInput
    style={styles.textInput}
    value={value}
    onChangeText={onChangeText}
    multiline={multiline}
  />
);
