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
import Animated, {
  BounceInDown,
  BounceOutDown,
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
  FadeOutDown,
  Layout,
  SlideOutUp,
  ZoomInEasyDown,
  ZoomOutEasyDown,
} from "react-native-reanimated";
import InputModal from "../InputModal/InputModal";

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",

    //flex: 1,
  },
  mainContainerVariantA: {
    borderWidth: 1,
    borderColor: "#9a9494",
  },
  mainContainerVariantB: {
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#9a9494",
  },
  mainContainerVariantC: {
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#9a9494",
    justifyContent: "space-between",

    flex: 0,
  },
  label: {
    fontSize: 12,
    fontWeight: "700",
    color: "#aba03f",
    //width: "100%",

    padding: 5,
    textTransform: "uppercase",
  },
  labelVarA: {
    backgroundColor: "#ccc8c8",
    textAlign: "center",
  },
  labelVarB: {
    backgroundColor: "transparent",
    textAlign: "left",
  },
  labelVarC: {
    //backgroundColor: "gray",
    textAlign: "center",
    paddingHorizontal: 0,
    fontSize: 10,
  },
  textInputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },
  textInput: {
    //width: "100%",
    //height: 40,
    // padding: 5,
    color: "#0d1f53",
    fontSize: 16,
    fontWeight: "600",
    paddingHorizontal: 5,
    paddingVertical: 0,
  },
  textInputVariantA: {
    backgroundColor: "#dfdbdb91",
    textAlign: "center",
  },
  textInputVariantB: {
    backgroundColor: "transparent",
    textAlign: "left",
  },
  textInputVariantC: {
    textAlign: "center",
    flex: 1,
  },
});

const stylesByVariant = {
  mainContainer: {
    A: styles.mainContainerVariantA,
    B: styles.mainContainerVariantB,
    C: styles.mainContainerVariantC,
  },
  label: {
    A: styles.labelVarA,
    B: styles.labelVarB,
    C: styles.labelVarC,
  },
  textInput: {
    A: styles.textInputVariantA,
    B: styles.textInputVariantB,
    C: styles.textInputVariantC,
  },
};

export const MainContainer = ({ children, variant, customStyles }) => (
  <View
    style={{
      ...styles.mainContainer,
      ...stylesByVariant["mainContainer"][variant],
      // ...(variant === "A"
      //   ? { ...styles.mainContainerVariantA }
      //   : { ...styles.mainContainerVariantB }),
      ...customStyles,
    }}
  >
    {children}
  </View>
);

export const InputLabel = ({ children, variant = "A" }) => (
  <Text
    style={{
      ...styles.label,
      ...stylesByVariant["label"][variant],
      //...(variant === "A" ? { ...styles.labelVarA } : { ...styles.labelVarB }),
    }}
  >
    {children}
  </Text>
);

export const TextInputContainer = ({ children }) => (
  <View style={styles.textInputContainer}>{children}</View>
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
    <Pressable
      onPress={() => {
        handleVisible();
      }}
      style={{ flex: 1 }}
    >
      <RNTextInput
        value={value}
        editable={false}
        style={{
          ...styles.textInput,
          ...stylesByVariant["textInput"][variant],
          // ...(variant === "A"
          //   ? { ...styles.textInputVariantA }
          //   : { ...styles.textInputVariantB }),
        }}
      />
    </Pressable>
    <InputModal
      visible={visible}
      closeModal={handleVisible}
      value={value}
      handleChange={handleValue}
    />
  </>
);
