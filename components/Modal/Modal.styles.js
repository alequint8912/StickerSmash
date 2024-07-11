import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
//import CloseIcon from '../../../assets/images/icons/close-x.svg';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(187, 168, 142, 0.877)",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    width: "100%",
    position: "relative",
  },
  headerTextContainer: {
    width: "100%",
    height: 60,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 22,
    fontFamily: "Kanit-Regular",
  },
  closeButton: {
    paddingRight: 15,
  },
  logoContainer: {
    paddingLeft: 15,
  },
});

export const CloseButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.closeButton}>
    {/* <CloseIcon width={50} height={50} color="#fff" /> */}
  </TouchableOpacity>
);

export const ModalContainer = ({ children, onPress, customStyle }) =>
  onPress ? (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.mainContainer,
        ...(onPress !== undefined && { paddingTop: 15 }),
        ...(customStyle && { ...customStyle }),
      }}
    >
      {children}
    </TouchableOpacity>
  ) : (
    <View
      onPress={onPress}
      style={{
        ...styles.mainContainer,
        ...(onPress !== undefined && { paddingTop: 15 }),
        ...(customStyle && { ...customStyle }),
      }}
    >
      {children}
    </View>
  );

export const Header = ({ children }) => (
  <View style={styles.header}>{children}</View>
);
export const Logo = ({ children }) => (
  <View style={styles.logoContainer}>{children}</View>
);
export const HeaderText = ({ children }) => (
  <View style={styles.headerTextContainer}>
    <Text style={styles.headerText}>{children}</Text>
  </View>
);
