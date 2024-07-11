import {
  TouchableWithoutFeedback,
  View,
  ImageBackground,
  Image,
} from "react-native";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

const IndicatorBall = ({
  style = {},
  label,
  onPress = null,
  animatedStyles = {},
}) => {
  const SmallDot = () => (
    <View
      style={[
        { ...styles.smallDot, ...(style.smallDot && { ...style.smallDot }) },
        {
          transform: [{ rotate: "-45deg" }],
        },
      ]}
    >
      <View
        style={{
          ...styles.smallDotInside,
          ...(style.smallDotInside && { ...style.smallDotInside }),
        }}
      />
    </View>
  );

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={[
          {
            ...styles.thumbContainer,
            ...(style.thumbContainer && { ...style.thumbContainer }),
          },
          animatedStyles,
        ]}
      >
        <Animated.Text /*style={label?.labelAnimatedStyle}*/>
          {label?.text}
        </Animated.Text>
        {/* <Image
          source={require("../../../assets/images/range-thumb.jpeg")}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: "center",
            borderRadius: 40,
            width: "100%",
            height: "100%",
          }}
        >
          
        </Image> */}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default IndicatorBall;

const styles = StyleSheet.create({
  thumbContainer: {
    alignItems: "center",
    backgroundColor: "#dbdad6",
    height: 55,
    justifyContent: "center",
    width: 55,
    borderRadius: 30,
    shadowColor: "#a29a93",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 10,
    shadowRadius: 6,
  },
  smallDot: {
    width: 15,
    height: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderBottomStyle: "solid",
    borderColor: "#000",
    borderBottomColor: "#fff",
    borderTopColor: "#83786f",
    borderLeftColor: "#fff",
    borderRightColor: "#83786f",
  },
  smallDotInside: {
    width: 12,
    height: 12,
    backgroundColor: "#002855",
    borderColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderBottomStyle: "solid",
  },
});
