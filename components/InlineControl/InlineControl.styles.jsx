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
import InputModal from "../InputModal/InputModal";

export const MainContainer = ({ children, width, customStyle = {} }) => (
  <View style={[styles.mainContainer, { width, ...customStyle }]}>
    {children}
  </View>
);

export const Label = ({ children }) => (
  <Text style={[styles.label]}>{children}</Text>
);

export const LabelContainer = ({ children, width }) => (
  <View style={[styles.labelContainer, { width }]}>{children}</View>
);

export const TextInput = ({
  value,
  handleValue,
  visible,
  handleVisible,
  variant = "A",
  customStyle,
}) => (
  <>
    <View style={{ ...(customStyle?.container ?? {}) }}>
      <RNTextInput
        value={value}
        // editable={false}
        onPress={() => {
          handleVisible();
        }}
        onChange={handleValue}
        style={{
          ...styles.textInput,
          ...(customStyle?.textInput ?? {}),
          // ...(variant === "A"
          //   ? { ...styles.textInputVariantA }
          //   : { ...styles.textInputVariantB }),
        }}
      />
    </View>
    <InputModal
      visible={visible}
      closeModal={handleVisible}
      value={value}
      handleChange={handleValue}
    />
  </>
);

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // flex: 1,
    borderWidth: 1,
    borderColor: "#8399b9",
  },
  textInput: {
    width: "100%",
    //height: 40,
    // padding: 5,
    color: "#0d1f53",
    fontSize: 16,
    fontWeight: "600",
    paddingHorizontal: 5,
    paddingVertical: 0,
    // borderWidth: 1,
    // borderColor: "blue",
    textAlign: "right",
  },
  label: {
    fontSize: 12,
    fontWeight: "700",
    color: "#aba03f",
    padding: 5,
    textTransform: "uppercase",
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // borderWidth: 1,
    // borderColor: "black",
  },
});
