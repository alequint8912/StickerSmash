import { useState, useEffect } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import IndicatorBall from "../IndicatorBall/IndicatorBall";

const Switch = () => {
  const [enabled, setEnabled] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [indicatorSize, setIndicatorSize] = useState({ width: 0, height: 0 });
  const backColor = useSharedValue("#c1bbb6");
  const offset = useSharedValue(0);
  const offSetText = useSharedValue(0);

  useEffect(() => {
    if (containerSize.width && containerSize.height) {
      const height = containerSize.height * 0.7; // 80% del alto del contenedor
      const width = containerSize.width * 0.5; // 5px más de ancho que de alto
      setIndicatorSize({ width, height });

      // Actualiza el offset máximo para la animación del indicador
      offset.value = withSpring(containerSize.width - width - 12); // 12 es el paddingHorizontal
    }
  }, [containerSize]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: backColor.value,
    };
  });

  const indicatorAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  const textAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offSetText.value }],
    };
  });

  const handleTrueAnimation = () => {
    backColor.value = withTiming("#63ba01", { duration: 100 });
    offset.value = withSpring(containerSize.width - indicatorSize.width, {
      damping: 30,
      stiffness: 500,
    });
    //offSetText.value = withSpring(-70, { damping: 30, stiffness: 500 });
  };

  const handleFalseAnimation = () => {
    backColor.value = withTiming("#c1bbb6", { duration: 100 });
    offset.value = withSpring(0, { damping: 30, stiffness: 500 });
    //offSetText.value = withSpring(0, { damping: 30, stiffness: 500 });
  };

  const handleChange = () => {
    const isEnabled = !enabled;
    setEnabled(isEnabled);
    if (isEnabled) {
      handleTrueAnimation();
    } else {
      handleFalseAnimation();
    }
  };

  return (
    <View style={styles.switchContainer}>
      <Pressable
        onPress={handleChange}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={styles.outsideContainer}
          onLayout={(event) => {
            const { width, height } = event.nativeEvent.layout;
            setContainerSize({ width: width, height: height });
          }}
        >
          <View
            //colors={["#a29a93", "#e3e3e0"]}
            style={styles.linearGradient}
          >
            <Animated.View style={[styles.container, animatedStyles]}>
              <IndicatorBall
                style={{
                  ...styles.indicator,
                  thumbContainer: {
                    width: indicatorSize.width,
                    height: indicatorSize.height,
                    borderRadius: indicatorSize.height / 2,
                  },
                }}
                label={{
                  text: enabled ? "YES" : "NO",
                  labelAnimatedStyle: textAnimatedStyles,
                }}
                onPress={handleChange}
                animatedStyles={indicatorAnimatedStyles}
              />
              {/* <Animated.Text
                style={[styles.label, textAnimatedStyles]}
              ></Animated.Text> */}
            </Animated.View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  linearGradient: {
    flex: 1,
    width: "100%",
    borderRadius: 0,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
    borderTopColor: "#83786f",
  },
  outsideContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 0,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "blue",
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "space-between",
    //paddingHorizontal: "10%",
    flexDirection: "row",
  },
  indicator: {
    shadowColor: "#00000040",
    shadowOffset: { width: 0, height: 5 },
  },
  label: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    color: "white",
  },
});

export default Switch;
