import React from "react";
import ModalThird from "react-native-modal";
import {
  CloseButton,
  Header,
  HeaderText,
  Logo,
  ModalContainer,
} from "./Modal.styles";
// import {BlurView} from '@react-native-community/blur';
import { BlurView } from "expo-blur";
//import IberostarIcon from "../../../assets/images/iberostar-the-club-logo.svg";

const Modal = ({
  children,
  visible,
  closeModal,
  showCloseButton,
  customStyle,
  headerText = "",
}) => {
  return (
    <ModalThird
      isVisible={visible}
      animationIn="fadeIn"
      animationOut="fadeOut"
      coverScreen={true}
      hasBackdrop={false}
      style={{
        backgroundColor: "transparent",
        margin: 0,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ModalContainer
        onPress={!showCloseButton ? closeModal : undefined}
        customStyle={customStyle}
      >
        <BlurView
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          blurType="light"
          blurAmount={4}
          // reducedTransparencyFallbackColor="white"
        />
        {showCloseButton ? (
          <Header>
            <HeaderText>{headerText}</HeaderText>
            <Logo>
              {/* <IberostarIcon width={125} height={35} fill="#fff" /> */}
            </Logo>
            <CloseButton onPress={closeModal} />
          </Header>
        ) : null}
        {children}
      </ModalContainer>
    </ModalThird>
  );
};

export default Modal;
